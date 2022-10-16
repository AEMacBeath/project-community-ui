import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ObservationCreateForm from "./pages/observations/ObservationCreateForm";
import ObservationPage from "./pages/observations/ObservationPage";
import ObservationsPage from "./pages/observations/ObservationsPage";
import ObservationEditForm from "./pages/observations/ObservationEditForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfilePage from "./pages/profiles/ProfilePage";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ObservationsPage message="No results found." />}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <ObservationsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/observations/create"
            render={() => <ObservationCreateForm />}
          />
          <Route
            exact
            path="/observations/:id"
            render={() => <ObservationPage />}
          />
          <Route exact path="/observations/:id/edit" render={() => <ObservationEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
