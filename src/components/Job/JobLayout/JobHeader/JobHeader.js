import React from "react";
import { string } from "prop-types";

const JobHeader = ({ company, title }) => {
  return (
    <div>
      <h1>{company}</h1>
      <h2>{title}</h2>
    </div>
  );
};

JobHeader.propTypes = {
  company: string,
  title: string
};

export default JobHeader;
