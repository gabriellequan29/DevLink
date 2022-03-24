import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../utils/formatDate";
import { deleteExperience } from "../../actions/profileActions";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Experience({ experience, deleteExperience }) {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        {formatDate(exp.from)} - {!exp.current ? formatDate(exp.to) : "Now"}
      </td>
      <td>
        <Link className="btn btn-info btn-sm" size="sm" to={{pathname: `/edit-experience/${exp._id}`}}>
          Update
        </Link>
      </td>
      <td>
        <Button
          onClick={() => deleteExperience(exp._id)}
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
      <h2 className="my-2">Experience</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};


export default connect(null, { deleteExperience })(Experience);