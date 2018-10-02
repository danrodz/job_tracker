import React, { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { string, object, func } from 'prop-types';

const JobLogDateItem = ({
  name, label, date, handleDateSelect, handleDateChange
}) => (
  <Fragment>
    <b>{name}</b>
    <DatePicker
      onFocus={() => handleDateSelect(label)}
      selected={date}
      onChange={handleDateChange}
      placeholderText="+ Set date"
      dateFormat="LLL"
      showTimeSelect
    />
  </Fragment>
);

JobLogDateItem.propTypes = {
  name: string,
  label: string,
  date: object,
  handleDateSelect: func,
  handleDateChange: func
};

export default JobLogDateItem;
