import React from "react";
import JobGeneralInfo from "./JobGeneralInfo/JobGeneralInfo";
import JobLogDates from "./JobLogDates/JobLogDates";

const JobInfo = ({
  company,
  title,
  location,
  salary,
  postURL,
  handleInputChange
}) => {
  return (
    <div>
      <JobGeneralInfo
        company={company}
        title={title}
        location={location}
        salary={salary}
        postURL={postURL}
        handleInputChange={handleInputChange}
      />
      <JobLogDates />
    </div>
  );
};

/*
JobGeneralInfo
  company = "",
  title = "",
  location = "",
  salary = "",
  postURL = "",
  handleInputChange

JobLogDates
*/

export default JobInfo;
