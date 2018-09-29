import React, { Fragment } from "react";
import { string, func } from "prop-types";

const JobDescription = ({ handleInputChange, description }) => {
  return (
    <Fragment>
      <p>Description</p>
      <textarea
        name="description"
        cols="30"
        rows="10"
        onChange={handleInputChange}
        value={description}
      />
    </Fragment>
  );
};

JobDescription.propTypes = {
  handleInputChange: func,
  description: string
};

export default JobDescription;
