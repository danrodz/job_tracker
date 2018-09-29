import React, { Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JobLogDateItem = ({
  name,
  label,
  date,
  handleDateSelect,
  handleDateChange
}) => {
  return (
    <Fragment>
      <p>{name}</p>
      <DatePicker
        onFocus={() => handleDateSelect(label)}
        selected={date}
        onChange={handleDateChange}
        isClearable={true}
        placeholderText="+ Set date"
        dateFormat="LLL"
        showTimeSelect
      />
    </Fragment>
  );
};

export default JobLogDateItem;
