import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import PopularObservations from "../observations/PopularObservations";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Observation from "../observations/Observation";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

// ProfileDetail view
function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileObservations, setProfileObservations] = useState({
    results: [],
  });

  const { id } = useParams();

  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;

  // Gets profile data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileObservations }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/observations/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileObservations(profileObservations);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  // Page heading
  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={4} className="my-2">
              <div>{profile?.observations_count} { profile?.observations_count === 1 ? 'observation' : 'observations'}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );

  // User's observations with infinite scroll
  const mainProfileObservations = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s observations</p>
      <hr />
      {profileObservations.results.length ? (
        <InfiniteScroll
          children={profileObservations.results.map((observation) => (
            <Observation
              key={observation.id}
              {...observation}
              setObservations={setProfileObservations}
            />
          ))}
          dataLength={profileObservations.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileObservations.next}
          next={() =>
            fetchMoreData(profileObservations, setProfileObservations)
          }
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} sumbitted an observation yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularObservations mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfileObservations}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularObservations />
      </Col>
    </Row>
  );
}

export default ProfilePage;
