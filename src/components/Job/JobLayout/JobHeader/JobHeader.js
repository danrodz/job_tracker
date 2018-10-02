import React from 'react';
import { string } from 'prop-types';
import { Row, Input } from 'react-materialize';

const JobHeader = ({
  company, title, status = 'WISHLIST', handleStatusChange
}) => (
  <Row>
    <div s={8} m={8}>
      <h3>{company}</h3>
      <h4>{title}</h4>
    </div>
    <Input s={4} m={4} type="select" onChange={handleStatusChange} label="Materialize Select" defaultValue={status}>
      <option value="WISHLIST">WISHLIST</option>
      <option value="APPLIED">APPLIED</option>
      <option value="PHONE">PHONE</option>
      <option value="ON SITE">ON SITE</option>
      <option value="OFFER">OFFER</option>
      <option value="REJECT">REJECT</option>
    </Input>
  </Row>
);

JobHeader.propTypes = {
  company: string,
  title: string
};

export default JobHeader;
