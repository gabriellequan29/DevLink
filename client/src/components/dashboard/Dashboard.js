import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { Container } from "react-bootstrap";
import EditDashboard from "./EditDashboard";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {

  useEffect(() => {
    getCurrentProfile();
    console.log("useEffect ");
  }, [getCurrentProfile]);

  return (
    <Container className="mt-5">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <EditDashboard />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <Project project={profile.project} />

          {/* <div className="my-2">
          <button className="btn btn-danger" onClick={() => deleteAccount()}>
            <i className="fas fa-user-minus" /> Delete My Account
          </button>
        </div> */}
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </Container>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
