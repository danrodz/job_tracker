import React from 'react';
import { string } from 'prop-types';
import { Row, Input } from 'react-materialize';

const JobHeader = ({
  company, title, status, handleStatusChange, handleColorChange, color
}) => (
  <Row>
    <div>
      <h3>{company}</h3>
      <h4>{title}</h4>
    </div>
    <Input s={6} type="select" onChange={handleStatusChange} label="Current Stage:" defaultValue={status}>
      <option value="WISHLIST">WISHLIST</option>
      <option value="APPLIED">APPLIED</option>
      <option value="PHONE">PHONE</option>
      <option value="ON SITE">ON SITE</option>
      <option value="OFFER">OFFER</option>
      <option value="REJECT">REJECT</option>
    </Input>
    <Input s={6} type="select" onChange={handleColorChange} label="Change Color" defaultValue={color}>
      <option value="red accent-4">Red</option>
      <option value="pink accent-2">Pink</option>
      <option value="purple accent-2">Purple</option>
      <option value="cyan accent-2">Cyan</option>
      <option value="teal accent-3">Teal</option>
      <option value="yellow accent-2">Yellow</option>
      <option value="orange accent-3">Orange</option>
      <option value="blue-grey darken-1">Grey</option>
    </Input>
  </Row>
);

JobHeader.propTypes = {
  company: string,
  title: string
};

export default JobHeader;
