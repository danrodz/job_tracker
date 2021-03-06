import React from 'react';
import { string } from 'prop-types';

const JobCompanyItem = ({ label, value, link }) => (
  <li>
    <b>{label}: </b>
    {link ? (
      <a href={link} rel="noopener noreferrer" target="_blank" title={value}>
        {value}
      </a>
    ) : (
      <span>{value}</span>
    )}
  </li>
);

JobCompanyItem.propTypes = {
  label: string,
  value: string,
  link: string
};

export default JobCompanyItem;
