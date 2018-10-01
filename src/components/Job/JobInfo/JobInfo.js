import React from 'react';
import { object, string, func } from 'prop-types';
import JobGeneralInfo from './JobGeneralInfo/JobGeneralInfo';
import JobLogDates from './JobLogDates/JobLogDates';
import JobDescription from './JobDescription/JobDescription';

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
  handleInputChange,
  handleDateChange,
  handleDateSelect
}) => (
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
      handleDateChange={handleDateChange}
      handleDateSelect={handleDateSelect}
    />
    <JobDescription handleInputChange={handleInputChange} description={description} />
  </div>
);

JobInfo.propTypes = {
  company: string,
  title: string,
  location: string,
  salary: string,
  postURL: string,
  description: string,
  deadline: object,
  applied: object,
  interview_1: object,
  interview_2: object,
  offer: object,
  handleInputChange: func,
  handleDateChange: func,
  handleDateSelect: func
};

export default JobInfo;
