import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../layout/Loader';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import { getPost } from '../../actions/postActions';
import { Container } from 'react-bootstrap';

const Post = ({ getPost, post: { post, loading } }) => {
    const { id } = useParams();
    useEffect(() => {
      getPost(id);
    }, [getPost, id]);
  
    return loading || post === null ? (
      <Loader />
    ) : (
      <Container className='my-3'>
        <Link to="/posts" className="btn btn-light">
          Back To Posts
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className="comments">
          {post.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} postId={post._id} />
          ))}
        </div>
      </Container>
    );
  };
  
  Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    post: state.post
  });
  
  export default connect(mapStateToProps, { getPost })(Post);
  