import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEducation, updateEducation } from "../../actions/profileActions";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../utils/FormContainer";
import Message from "../layout/Message";
import formatDate from "../utils/formateDate";

const UpdateEducation = ({
  profile: { edu, loading, error },
  getEducation,
  updateEducation,
}) => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: "",
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { school, degree, fieldofstudy, from, to, description, current } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateEducation(formData, navigate, id);
  };

  useEffect(() => {
    if (edu && Object.keys(edu).length === 0) {
      getEducation(id);
    }

    if (!loading && edu) {
      let from_date = edu.from;
      let to_date = edu.to;
      if (edu.from) {
        from_date = new Date(edu.from).toISOString().split('T')[0];
      }
      if (edu.to && !edu.current) {
        to_date = new Date(edu.to).toISOString().split('T')[0];
      }

      const eduData = {
        _id: id,
        school: edu.school,
        degree: edu.degree,
        fieldofstudy: edu.fieldofstudy,
        from: from_date,
        to: to_date,
        current: edu.current,
        description: edu.description,
      };
      setFormData(eduData);
    }
  }, [id, loading, edu]);

  return (
    <FormContainer>
      <h5 className="large text-primary">Add Education</h5>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add your education information
      </p>
      {Object.keys(error).length === 0 ? (
        ""
      ) : (
        <Message variant="danger">{error.data.msg}</Message>
      )}
      <small>* = required field</small>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3" controlId="school">
          <Form.Label>School</Form.Label>
          <Form.Control
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="degree">
          <Form.Label>Degree</Form.Label>
          <Form.Control
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="fieldofstudy">
          <Form.Label>Field of Study</Form.Label>
          <Form.Control
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="from">
          <Form.Label>From Date</Form.Label>
          <Form.Control
            type="date"
            name="from"
            value={from}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="current">
          <Form.Check
            type="checkbox"
            name="current"
            checked={current}
            value={current}
            onChange={() => setFormData({ ...formData, current: !current })}
            label="Current School"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="to">
          <Form.Label>To Date</Form.Label>
          <Form.Control
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Program Description</Form.Label>
          <Form.Control
            name="description"
            cols={30}
            rows={5}
            placeholder="Program Description"
            value={description}
            onChange={onChange}
            as="textarea"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </Form>
    </FormContainer>
  );
};

UpdateEducation.propTypes = {
  getEducation: PropTypes.func.isRequired,
  updateEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getEducation, updateEducation })(
  UpdateEducation
);
