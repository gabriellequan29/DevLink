import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <Nav className="me-auto">
      <Nav.Link>
        <Link to="/profiles">Developers</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/posts">Posts</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </Nav.Link>
      <Nav.Link >
        <Link to="/">
          {" "}
          <i className="fas fa-sign-out-alt" />{" "}
          <span onClick={logout} className="hide-sm">Logout</span>
        </Link>
      </Nav.Link>
    </Nav>
  );

  const guestLinks = (
    <Nav className="me-auto">
      <Nav.Link>
        <Link to="/profiles">Developers</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/register">Register</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/login">Login</Link>
      </Nav.Link>
    </Nav>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">DevLink</Link>
        </Navbar.Brand>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
