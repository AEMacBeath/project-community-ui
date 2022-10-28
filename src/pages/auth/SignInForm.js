import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

// To sign into a registered account.
const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  // Defines sign up data
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signUpData;

  // Error handling
  const [errors, setErrors] = useState({});

  // To direct users to the required page when action is complete.
  const history = useHistory();

  // Makes input fields editable
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Submits the form input to the API
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signUpData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col>
        <Container className={styles.Container}>
          <h2>Sign in form</h2>
          <p>Please enter your detials to sign in</p>
          <Form className={styles.Form} onSubmit={handleSubmit}>
            {/* Username input */}
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={appStyles.Control}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Password input */}
            <Form.Group controlId="password">
              <Form.Label className="d-none">password</Form.Label>
              <Form.Control
                className={appStyles.Control}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Submit button */}
            <Button className={btnStyles.Btn} type="submit">
              Sign in
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          
          {/* Link to SignUpForm for un-registered users. */}
          <Link className={styles.Link} to="/signup">
            Not got an account? Sign up here
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignInForm;
