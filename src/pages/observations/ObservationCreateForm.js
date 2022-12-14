import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/ObservationCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

// To create observation
function ObservationCreateForm() {
  // Redirects logged out users to homepage
  useRedirect("loggedOut");
  // Error handling
  const [errors, setErrors] = useState({});

  // Defines observation data
  const [observationData, setObservationData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = observationData;
  const imageInput = useRef(null);

  // To direct users to the required page when action is complete.
  const history = useHistory();

  // Makes inputs editable
  const handleChange = (event) => {
    setObservationData({
      ...observationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    URL.revokeObjectURL(image);
    if (event.target.files.length) {
      setObservationData({
        ...observationData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  // Submits the form input to the API
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/observations/", formData);
      history.push(`/observations/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div>
      {/* Title input */}
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          className={appStyles.Control}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {/* Content input */}
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          className={appStyles.Control}
          as="textarea"
          name="content"
          rows={4}
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      {/* Submit button */}
      <Button className={btnStyles.Btn} type="submit">
        Submit
      </Button>
      {errors?.non_field_errors?.map((message, idx) => (
        <Alert key={idx} variant="warning" className="mt-3">
          {message}
        </Alert>
      ))}
      {/* Cancel button */}
      <Button className={btnStyles.BtnCancel} onClick={() => history.goBack()}>
        Cancel
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        {/* Displays content field */}
        <Col md={6} lg={6} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="py-2 p-0 p-md-2" md={6} lg={6}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            {/* Image input */}
            <Form.Group className="text-center">
              {image ? (
                <>
                  <Form.Label htmlFor="image-upload">
                    Click to change the image
                  </Form.Label>
                  <figure>
                    <Image className={styles.image} src={image} />
                  </figure>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image."
                  />
                </Form.Label>
              )}
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ObservationCreateForm;
