import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className='my-5'>
      <h1 className="x-large text-primary text-center">
        <i className="fas fa-exclamation-triangle" /> 404 Page Not Found 
      </h1>
      <p className="large text-center">Sorry, this page does not exist</p>
    </Container>
  );
};

export default NotFound;