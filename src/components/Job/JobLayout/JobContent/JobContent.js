import React, { Component } from "react";
import JobCompany from "../../JobCompany/JobCompany";
import JobInfo from "../../JobInfo/JobInfo";

const JobContent = ({
  company,
  location,
  salary,
  title,
  postURL,
  subtitle,
  headquarters,
  url,
  year,
  type,
  country
}) => {
  return (
    <React.Fragment>
      <JobInfo
        title={title}
        company={company}
        location={location}
        salary={salary}
        postURL={postURL}
      />
      <JobCompany
        company={company}
        subtitle={subtitle}
        headquarters={headquarters}
        url={url}
        year={year}
        type={type}
        country={country}
      />
    </React.Fragment>
  );
};

/*
<JobInfo
  company={company}
  location={location}
  salary={salary}
  postUrl={postUrl}
  handleInputChange
/>

<JobCompany
  company={company}
  subtitle={subtitle}
  headquarters={headquarters}
  url={url}
  year={year}
  type={type}
  country={country}
/>

*/
export default JobContent;
