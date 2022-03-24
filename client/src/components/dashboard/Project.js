import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from '../../actions/profileActions';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = ({ project, deleteProject }) => {
  const projects = project.map((prj) => (
    <tr key={prj._id}>
      <td>{prj.projectname}</td>
      <td className="hide-sm">{prj.description}</td>
      <td>
      {prj.technologies}
      </td>
      <td>
        <Link className="btn btn-info btn-sm" size="sm" to={{pathname: `/edit-project/${prj._id}`}}>
          Update
        </Link>
      </td>
      <td>
        <Button
          onClick={() => deleteProject(prj._id)}
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
