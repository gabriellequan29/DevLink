import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../components/utils/formateDate';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <span>
      <strong>Degree: </strong> {degree}
    </span>
    <br/>
    <span>
      <strong>Field Of Study: </strong> {fieldofstudy}
    </span>
    <br/>
    <span>
      <strong>Description: </strong> {description}
    </span>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
