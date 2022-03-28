import React, { Fragment, useState, useEffect } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import FormContainer from "../utils/FormContainer";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";

const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch("/create-profile");

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) getCurrentProfile();

    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }

      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, profile ? true : false);
  };
  return (
    <FormContainer>
      <h5 className="large text-primary">
        {creatingProfile ? "Create Your Profile" : "Edit Your Profile"}
      </h5>
      <small>* = required field</small>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select name="status" value={status} onChange={onChange}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </Form.Select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="website">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
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
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Github Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="form-text">
            If you want share your Github repos, include your username
          </small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
            as="textarea"
            rows={3}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </Form.Group>
        <div className="my-2">
          <Button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </Button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <Form.Group className="social-input my-2" controlId="twitter">
              <i className="fab fa-twitter fa-2x" />
              <Form.Control
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="social-input my-2" controlId="facebook">
              <i className="fab fa-facebook fa-2x" />
              <Form.Control
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="social-input my-2" controlId="youtube">
              <i className="fab fa-youtube fa-2x" />
              <Form.Control
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="social-input my-2" controlId="linkedin">
              <i className="fab fa-linkedin fa-2x" />
              <Form.Control
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="social-input my-2" controlId="instagram">
              <i className="fab fa-instagram fa-2x" />
              <Form.Control
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </Form.Group>
          </Fragment>
        )}

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

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
