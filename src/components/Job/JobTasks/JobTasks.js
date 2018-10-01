import React from 'react';
import uuidv4 from 'uuid/v4';
import { string, object, func, array } from 'prop-types';
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
    <div>
      <form onSubmit={handleTaskSubmit}>
        <input type="text" name="task" placeholder="+ Add Task" value={task} onChange={handleInputChange} />
        <input type="submit" value="Add Task" />
      </form>
      <JobLogDateItem
        name="Due Date"
        label="taskDate"
        date={taskDate}
        handleDateChange={handleDateChange}
        handleDateSelect={handleDateSelect}
      />
      {allTasks}
    </div>
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
