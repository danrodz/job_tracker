import React from 'react';
import { string, func } from 'prop-types';
import { Row, Input } from 'react-materialize';

const JobDescription = ({ handleInputChange, description }) => (
  <Row>
    <p>Description</p>
    <Input
      type="textarea"
      name="description"
      cols="30"
      rows="10"
      placeholder="+ Add Description"
      onChange={handleInputChange}
      value={description}
    />
  </Row>
);

JobDescription.propTypes = {
  handleInputChange: func,
  description: string
};

export default JobDescription;
