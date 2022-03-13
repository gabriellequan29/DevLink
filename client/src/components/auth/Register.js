import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FormContainer from "../utils/FormContainer";
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "../layout/Message";
import { register } from '../../actions/userActions';

const Register = ({register, isAuthenticated, error}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const navigate = useNavigate();
  const [info, setInfo] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const { name, email, password, confirmedPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      setInfo("Password do not match");
    } else {
      setInfo("");
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    navigate('/');
  }
  return (
    <FormContainer>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      {info &&  <Message variant='danger'>{info}</Message>}
      {error && error.map((err) => (<Message variant='danger'>{err.msg}</Message>))}
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email Address"
            value={email}
            name="email"
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            name="password"
            minLength="6"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Comfirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            name="confirmedPassword"
            minLength="6"
            value={confirmedPassword}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { register })(Register);