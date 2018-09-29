import React from "react";

const JobHeader = ({ company, title }) => {
  return (
    <div>
      <h1>{company}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default JobHeader;
