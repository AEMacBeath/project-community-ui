import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Redirects users away from content their 
// logged in / out status can't view.
export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // If user is logged in, the below code with run
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // If user is not logged in, the below code with run
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};
