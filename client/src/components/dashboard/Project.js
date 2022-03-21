import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from '../../actions/profileActions';
import { Button } from "react-bootstrap";

const Project = ({ project, deleteProject }) => {
  const projects = project.map((pro) => (
    <tr key={pro._id}>
      <td>{pro.projectname}</td>
      <td className="hide-sm">{pro.description}</td>
      <td>
      {pro.technologies}
      </td>
      <td>
        <Button
          onClick={() => deleteProject(pro._id)}
          variant="danger"
          size="sm"
        >
          Delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Project</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th className="hide-sm">Description</th>
            <th className="hide-sm">Technologies</th>
            <th />
          </tr>
        </thead>
        <tbody>{projects}</tbody>
      </table>
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.array.isRequired,
  deleteProject: PropTypes.func.isRequired
};


export default connect(null, { deleteProject })(Project);
