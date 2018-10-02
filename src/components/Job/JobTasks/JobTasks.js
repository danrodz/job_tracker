import React, { Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import { string, object, func, array } from 'prop-types';
import { Button, Input } from 'react-materialize';
import JobLogDateItem from '../JobInfo/JobLogDates/JobLogDateItem/JobLogDateItem';
import JobTaskItem from './JobTaskItem/JobTaskItem';

const JobTasks = ({
  task,
  tasks,
  taskDate,
  handleInputChange,
  handleDateChange,
  handleDateSelect,
  handleTaskSubmit,
  handleCheckboxToggle
}) => {
  const allTasks = tasks.map((task, index) => (
    <JobTaskItem key={uuidv4()} handleCheckboxToggle={handleCheckboxToggle} {...task} index={index} />
  ));

  return (
    <Fragment>
      <form onSubmit={handleTaskSubmit}>
        <JobLogDateItem
          name="Due Date"
          label="taskDate"
          date={taskDate}
          handleDateChange={handleDateChange}
          handleDateSelect={handleDateSelect}
        />
        <Input type="text" name="task" placeholder="+ Add Task" value={task} onChange={handleInputChange} />
        <Button>Add Task</Button>
      </form>
      <br />
      {allTasks}
    </Fragment>
  );
};

JobTasks.propTypes = {
  task: string,
  tasks: array,
  taskDate: object,
  handleInputChange: func,
  handleDateChange: func,
  handleDateSelect: func,
  handleTaskSubmit: func,
  handleCheckboxToggle: func
};

export default JobTasks;
