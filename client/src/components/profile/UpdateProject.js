import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProject, updateProject } from "../../actions/profileActions";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../utils/FormContainer";
import Message from "../layout/Message";

const UpdateProject = ({
  profile: { prj, loading, error },
  getProject,
  updateProject,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: "",
    projectname: "",
    link: "",
    technologies: "",
    description: "",
  });

  const { projectname, link, technologies, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateProject(formData, navigate, id);
  };

  useEffect(() => {
    if (prj && Object.keys(prj).length === 0) {
      getProject(id);
    }

    if (!loading && prj) {
      const prjData = {
        _id: id,
        projectname: prj.projectname,
        link: prj.link,
        technologies: prj.technologies,
        description: prj.description,
      };
      setFormData(prjData);
    }
  }, [id, loading, prj]);

  return (
    <FormContainer>
      <h5 className="large text-primary">Add Project</h5>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add your project information
      </p>
      {Object.keys(error).length === 0 ? (
        ""
      ) : (
        <Message variant="danger">{error.data.msg}</Message>
      )}
      <small>* = required field</small>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3" controlId="projectname">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="* Project Name"
            name="projectname"
            value={projectname}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="link">
          <Form.Label>Project Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Project Link"
            name="link"
            value={link}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="technologies">
          <Form.Label>Technologies</Form.Label>
          <Form.Control
            type="text"
            placeholder="Technologies used for this project"
            name="technologies"
            value={technologies}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            name="description"
            cols={30}
            rows={5}
            placeholder="Project Description"
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

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProject, updateProject })(
  UpdateProject
);
