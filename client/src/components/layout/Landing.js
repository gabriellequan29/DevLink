import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DevLink</h1>
          <p className="lead">
            Create a developer profile, share job opportunities with other
            developers
          </p>
          <div className="buttons">
            {isAuthenticated ? (""
              
            ) : (
                <>
                <Link to="/register" className="btn btn-primary mx-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-primary mx-2">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Landing);
