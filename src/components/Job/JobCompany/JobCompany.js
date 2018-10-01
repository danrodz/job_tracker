import React from "react";
import { string } from "prop-types";
import JobCompanyItem from "./JobCompanyItem/JobCompanyItem";

const JobCompany = ({
  company,
  subtitle,
  headquarters,
  url,
  year,
  type,
  country
}) => {
  return (
    <div>
      <h4>{company}</h4>
      <h5>{subtitle}</h5>
      <h6>{headquarters}</h6>
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

JobCompany.propTypes = {
  company: string,
  subtitle: string,
  headquarters: string,
  url: string,
  year: string,
  type: string,
  country: string
};

export default JobCompany;
