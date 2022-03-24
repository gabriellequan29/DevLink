import React from "react";
import PropTypes from "prop-types";
import formatDate from "../utils/formatDate";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
    console.log(company)
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        {formatDate(from)} - {!current ? formatDate(to) : "Now"}
      </p>
      <span>
        <strong>Position: </strong> {title}
      </span>
      <br/>
      <span>
        <strong>Location: </strong> {location}
      </span>
      <br/>
      <span>
        <strong>Description: </strong> {description}
      </span>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
