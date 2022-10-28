import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// Allows the observation data to be used throughout 
// the app without repeating code.
const ObservationDataContext = createContext();
const SetObservationDataContext = createContext();

export const useObservationData = () => useContext(ObservationDataContext);
export const useSetObservationData = () =>
  useContext(SetObservationDataContext);

export const ObservationDataProvider = ({ children }) => {
  const [observationData, setObservationData] = useState({
    pageObservation: { results: [] },
    popularObservations: { results: [] },
  });

  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/observations/?ordering=-likes_count"
        );
        setObservationData((prevState) => ({
          ...prevState,
          popularObservations: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ObservationDataContext.Provider value={observationData}>
        <SetObservationDataContext.Provider value={setObservationData}>
            {children}
        </SetObservationDataContext.Provider>
    </ObservationDataContext.Provider>
  )
};
