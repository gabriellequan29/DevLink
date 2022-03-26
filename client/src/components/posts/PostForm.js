import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import { Form, Button, Row, Col } from "react-bootstrap";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>
            <h5>Post Here</h5>
          </Form.Label>
          <Form.Control
            name="text"
            cols={30}
            rows={5}
            placeholder="Create a post"
            value={text}
            onChange={(e) => setText(e.target.value)}
            as="textarea"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
