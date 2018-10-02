import React from 'react';
import { string } from 'prop-types';

const JobHeader = ({ company, title }) => (
  <div>
    <h3>{company}</h3>
    <h4>{title}</h4>
  </div>
);

JobHeader.propTypes = {
  company: string,
  title: string
};

export default JobHeader;
