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
import { useRedirect } from "../../hooks/useRedirect";

// To create an account and profile.
const SignUpForm = () => {
  useRedirect("loggedIn");

  // Defines sign in data
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;

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
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col>
        <Container className={styles.Container}>
          <h2>Sign up form</h2>
          <p>Please complete the below form to create an account</p>
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
            {/* Password1 input */}
            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password1</Form.Label>
              <Form.Control
                className={appStyles.Control}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {/* Password2 input */}
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Re-enter Password</Form.Label>
              <Form.Control
                className={appStyles.Control}
                type="password"
                placeholder="Re-enter Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            {/* Submit button */}
            <Button className={btnStyles.Btn} type="submit">
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>

          {/* Link to SignInForm for registered users. */}
          <Link className={styles.Link} to="/signin">
            Already a user? Sign in here.
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
