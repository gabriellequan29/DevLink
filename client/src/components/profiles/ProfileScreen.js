import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../layout/Loader";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileProject from "./ProfileProject";
import { getProfileById } from "../../actions/profileActions";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ProfileScreen = ({ getProfileById, profile: { profile }, auth }) => {
  const { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);
  return (
    <Container className="mt-3">
      {profile === null ? (
        <Loader />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}{" "}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />

            
            <Card>
              <Card.Header>Experience</Card.Header>
              {profile.experience.length > 0 ? (
                <Card.Body>
                  <Card.Text>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                  </Card.Text>
                </Card.Body>
              ) : (
                <Card.Body>No experience Info</Card.Body>
              )}
            </Card>
            <Card>
              <Card.Header>Education</Card.Header>
              {profile.education.length > 0 ? (
                <Card.Body>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Card.Body>
              ) : (
                <Card.Body>No education Info</Card.Body>
              )}
            </Card>
            <Card>
              <Card.Header>Project</Card.Header>
              {profile.project.length > 0 ? (
                <Card.Body>
                  {profile.project.map((project) => (
                    <ProfileProject
                      key={project._id}
                      project={project}
                    />
                  ))}
                </Card.Body>
              ) : (
                <Card.Body>No project Info</Card.Body>
              )}
            </Card>
           
{/* 
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience Info</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education Info</h4>
              )}
            </div> */}
          </div>
        </Fragment>
      )}
    </Container>
  );
};

ProfileScreen.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(ProfileScreen);
