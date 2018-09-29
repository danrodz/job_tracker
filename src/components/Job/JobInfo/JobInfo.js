import React from "react";
import JobGeneralInfo from "./JobGeneralInfo/JobGeneralInfo";
import JobLogDates from "./JobLogDates/JobLogDates";
import JobDescription from "./JobDescription/JobDescription";

const JobInfo = ({
  company,
  title,
  location,
  salary,
  postURL,
  description,
  deadline,
  applied,
  interview_1,
  interview_2,
  offer,
  calendarSelected,
  handleInputChange,
  handleDateChange,
  handleDateSelect
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
      <JobLogDates
        deadline={deadline}
        applied={applied}
        interview_1={interview_1}
        interview_2={interview_2}
        offer={offer}
        calendarSelected={calendarSelected}
        handleDateChange={handleDateChange}
        handleDateSelect={handleDateSelect}
      />
      <JobDescription
        handleInputChange={handleInputChange}
        description={description}
      />
    </div>
  );
};

export default JobInfo;
