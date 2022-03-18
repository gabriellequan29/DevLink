import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../utils/FormContainer";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/userActions';
import Message from '../../components/layout/Message';

const Login = ({ login, isAuthenticated, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <FormContainer>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      {error && error.map((err) => (<Message variant='danger'>{err.msg}</Message>))}
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            minLength="6"
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
          <Col>
          Don't have an account? <Link to='/Register'>Sign Up</Link>
          </Col>
        </Row>
    </FormContainer>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { login })(Login);