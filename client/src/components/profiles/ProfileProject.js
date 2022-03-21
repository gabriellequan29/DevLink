import React from "react";
import PropTypes from "prop-types";

const ProfileProject = ({
  project: { projectname, link, technologies, description },
}) => (
  <div>
    <h3 className="text-dark">{projectname}</h3>
    <span>
      <strong>Technologies: </strong> {technologies}
    </span>
    <br />
    <span className="text-dark">
      {link ? (
        <a href={link}>
          <strong>Link: </strong> <i class="fas fa-link"></i> {link}
        </a>
      ) : null}
    </span>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileProject.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileProject;
