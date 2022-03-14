import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  const navigate = useNavigate();
  if (loading) return <Spinner animation="border" />;
  if (isAuthenticated) return <Component />;

  navigate('/login');
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
