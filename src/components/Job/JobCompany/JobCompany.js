import React from "react";
import JobCompanyItem from "./JobCompanyItem/JobCompanyItem";

const JobCompany = ({ url, year, type, country }) => {
  return (
    <div>
      <ul>
        <JobCompanyItem label="Website" value={url} link={url} />
        <JobCompanyItem label="Founded" value={year} />
      </ul>
      <ul>
        <JobCompanyItem label="Type" value={type} />
        <JobCompanyItem label="Country" value={country} />
      </ul>
    </div>
  );
};

export default JobCompany;
