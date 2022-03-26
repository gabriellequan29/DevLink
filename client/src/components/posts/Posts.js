import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/postActions';
import { Container } from 'react-bootstrap';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container className='mt-3'>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Share and Collaborate
      </p>
      <PostForm />
      <div className="posts mt-3">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
