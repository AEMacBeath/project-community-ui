import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// To create Observation comments.
function CommentCreateForm(props) {
  const { observation, setObservation, setComments } =
    props;
  const [content, setContent] = useState("");
  const currentUser = useCurrentUser();

  // Makes input fields editable
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  // Submits the form input to the API
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        observation,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setObservation((prevObservation) => ({
        results: [
          {
            ...prevObservation.results[0],
            comments_count: prevObservation.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          {/* Content input */}
          <Form.Control
            className={styles.Form}
            placeholder={`${currentUser?.username}, enter your comment here`}
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
        {/* Submit button */}
        <button
          className={btnStyles.Btn}
          disabled={!content.trim()}
          type="submit"
        >
          Add comment
        </button>
      </Form.Group>
    </Form>
  );
}

export default CommentCreateForm;
