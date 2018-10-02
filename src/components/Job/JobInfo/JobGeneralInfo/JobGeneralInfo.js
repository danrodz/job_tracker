import React from 'react';
import { string, func } from 'prop-types';
import { Row, Input } from 'react-materialize';
// onFocus onBlur onChange

const JobGeneralInfo = ({
  company, title, location, salary, postURL, handleInputChange
}) => (
  <Row>
    <Row>
      <h5>GENERAL INFO</h5>
    </Row>
    <br />
    <Input
      type="text"
      name="company"
      value={company}
      placeholder="Select Company"
      label="Company"
      onChange={handleInputChange}
    />

    <Input
      type="text"
      name="title"
      value={title}
      placeholder="+ add title"
      label="Title"
      onChange={handleInputChange}
    />

    <Input
      type="text"
      name="location"
      value={location}
      placeholder="+ add location"
      label="Location"
      onChange={handleInputChange}
    />

    <Input
      type="text"
      name="salary"
      value={salary}
      placeholder="add salary"
      label="Salary"
      onChange={handleInputChange}
    />

    <Input
      type="text"
      name="postURL"
      value={postURL}
      placeholder="add URL"
      label="PostURL"
      onChange={handleInputChange}
    />
  </Row>
);

JobGeneralInfo.propTypes = {
  company: string,
  title: string,
  location: string,
  salary: string,
  postURL: string,
  handleInputChange: func
};

export default JobGeneralInfo;
