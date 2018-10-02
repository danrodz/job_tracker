import React from 'react';
import { string } from 'prop-types';
import { Row, Col } from 'react-materialize';
import JobCompanyItem from './JobCompanyItem/JobCompanyItem';

const JobCompany = ({
  company, subtitle, headquarters, url, year, type, country
}) => (
  <Row>
    <Col s={12}>
      <br />
      <h4>{company}</h4>
    </Col>
    <Col s={12}>
      <h5>{subtitle}</h5>
      <h6>{headquarters}</h6>
    </Col>
    <Col s={6}>
      <ul>
        <JobCompanyItem label="Website" value={url} link={url} />
        <JobCompanyItem label="Founded" value={year} />
      </ul>
    </Col>
    <Col s={6}>
      <ul>
        <JobCompanyItem label="Type" value={type} />
        <JobCompanyItem label="Country" value={country} />
      </ul>
    </Col>
  </Row>
);

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
