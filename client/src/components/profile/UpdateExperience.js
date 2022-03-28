import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getExperience,
  updateExperience,
} from "../../actions/profileActions";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../utils/FormContainer";

const UpdateExperience = ({
  profile: { exp, loading },
  getExperience,
  updateExperience,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: "",
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateExperience(formData, navigate, id);
  };

  useEffect(() => {
    if (exp && Object.keys(exp).length === 0) {
      getExperience(id);
    }

    if (!loading && exp) {
      let from_date = exp.from;
      let to_date = exp.to;
      if (exp.from) {
        from_date = new Date(exp.from).toISOString().split("T")[0];
      }
      if (exp.to && !exp.current) {
        to_date = new Date(exp.to).toISOString().split("T")[0];
      }
      const expData = {
        _id: id,
        company: exp.company,
        title: exp.title,
        location: exp.location,
        from: from_date,
        to: to_date,
        current: exp.current,
        description: exp.description,
      };
      setFormData(expData);
    }
  }, [id, loading, exp]);

  return (
    <FormContainer>
      <h1 className="large text-primary">Add Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add your experience information
      </p>
      <small>* = required field</small>

      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            name="location"
            value={location}
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
            label="Current Job"
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
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            name="description"
            cols={30}
            rows={5}
            placeholder="Job Description"
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

UpdateExperience.propTypes = {
  getExperience: PropTypes.func.isRequired,
  updateExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getExperience, updateExperience })(
  UpdateExperience
);
