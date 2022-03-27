import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/postActions";
import { Form, Button } from "react-bootstrap";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <Form
        className="my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>
            <h5>Leave a Comment</h5>
          </Form.Label>
          <Form.Control
            name="text"
            cols={30}
            rows={5}
            placeholder="Comment the post"
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
