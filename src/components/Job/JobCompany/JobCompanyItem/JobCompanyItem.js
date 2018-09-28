import React from "react";

const JobCompanyItem = ({ label, value, link }) => {
  return (
    <li>
      <span>{label}</span>
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

export default JobCompanyItem;
