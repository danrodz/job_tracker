import React, { Fragment } from 'react';

const JobTaskItem = ({
  date, content, completed, index, handleCheckboxToggle
}) => (
  <Fragment>
    <input type="checkbox" id={index} onChange={handleCheckboxToggle} checked={completed} />
    Due: {date.format('LLL')}
    <p>{content}</p>
  </Fragment>
);

export default JobTaskItem;
