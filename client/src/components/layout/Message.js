import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Alert } from "react-bootstrap";

export default function Message({ variant, children }) {
  return <Alert variant={variant}>{children}</Alert>;
}
