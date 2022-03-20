import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "../layout/Loader";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";
import { Container } from "react-bootstrap";

const ProfilesScreen = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <div className="mt-5">
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead">
              <i className="fab fa-connectdevelop" /> Browse and connect with
              developers
            </p>
            <div className="profiles">
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </Container>
    </div>
  );
};

ProfilesScreen.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ProfilesScreen);
