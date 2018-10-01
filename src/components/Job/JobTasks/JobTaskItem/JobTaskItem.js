import React, { Fragment } from "react";

const JobTaskItem = ({
  date,
  content,
  completed,
  index,
  handleCheckboxToggle
}) => {
  return (
    <Fragment>
      <p>
        <input
          type="checkbox"
          id={index}
          onChange={handleCheckboxToggle}
          checked={completed}
        />
        Due: {date.format("LLL")}
      </p>
      <p>{content}</p>
    </Fragment>
  );
};

export default JobTaskItem;
