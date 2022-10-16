import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ObservationDataProvider } from "./contexts/PopularObservationContext";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";

ReactDOM.render(
    <Router>
      <CurrentUserProvider>
        <ObservationDataProvider>
          <ProfileDataProvider>
            <App />
          </ProfileDataProvider>
        </ObservationDataProvider>
      </CurrentUserProvider>
    </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
