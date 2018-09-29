import React from "react";
import { string } from "prop-types";

const JobCompanyItem = ({ label, value, link }) => {
  return (
    <li>
      <span>{label} </span>
      {link ? (
        <a href={link} target="_blank" title={value}>
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </li>
  );
};

JobCompanyItem.propTypes = {
  label: string,
  value: string,
  link: string
};

export default JobCompanyItem;
