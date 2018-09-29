import React, { Fragment } from "react";

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

export default JobDescription;
