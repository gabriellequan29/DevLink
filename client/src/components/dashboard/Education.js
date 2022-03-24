import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../utils/formatDate";
import { deleteEducation } from "../../actions/profileActions";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        {formatDate(edu.from)} - {!edu.current ? formatDate(edu.to) : "Now"}
      </td>
      <td>
        <Link className="btn btn-info btn-sm" size="sm" to={{pathname: `/edit-education/${edu._id}`}}>
          Update
        </Link>
      </td>
      <td>
        <Button
          onClick={() => deleteEducation(edu._id)}
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
      <h2 className="my-2">Education</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
