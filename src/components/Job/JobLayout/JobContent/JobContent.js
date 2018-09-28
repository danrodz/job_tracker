import React, { Component } from "react";
import JobCompany from "../../JobCompany/JobCompany";

const JobContent = ({
  company,
  subtitle,
  headquarters,
  url,
  year,
  type,
  country
}) => {
  return (
    <div>
      <h4>{company}</h4>
      <h5>{subtitle}</h5>
      <h6>{headquarters}</h6>
      <JobCompany url={url} year={year} type={type} country={country} />
    </div>
  );
};

export default JobContent;
