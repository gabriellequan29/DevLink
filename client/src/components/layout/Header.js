import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ isAuthenticated }) => {

  const dispatch = useDispatch();
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={dispatch(logout)} to='/'>
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1>
          <Link to="/">DevLink</Link>
        </h1>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
