import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  //   screen.debug();
  const singInLink = screen.getByRole("link", { name: "Sign in" });
  expect(singInLink).toBeInTheDocument();
});

test("renders link to the user profile for a signed in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText("User04");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders sign in / sign out links on sign out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByRole('link', {name: "Sign out"})
  fireEvent.click(signOutLink)

  const signInLink = await screen.findByRole('link', {name: "Sign in"})
  const signUpLink = await screen.findByRole('link', {name: "Sign up"})

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});
