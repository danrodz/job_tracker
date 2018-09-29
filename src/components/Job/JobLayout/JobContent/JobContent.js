import React, { Fragment } from "react";
import JobCompany from "../../JobCompany/JobCompany";
import JobInfo from "../../JobInfo/JobInfo";
import JobNotes from "../../JobNotes/JobNotes";
import JobTasks from "../../JobTasks/JobTasks";

const JobContent = ({
  company,
  location,
  salary,
  title,
  description,
  postURL,
  subtitle,
  headquarters,
  url,
  year,
  type,
  country,
  showing,
  note,
  notes,
  task,
  tasks,
  taskDate,
  deadline,
  applied,
  interview_1,
  interview_2,
  offer,
  handleInputChange,
  handleNotesSubmit,
  handleDeleteNote,
  handleDateChange,
  handleDateSelect,
  handleTaskSubmit,
  handleCheckboxToggle
}) => {
  return (
    <Fragment>
      {showing === "jobInfo" ? (
        <JobInfo
          title={title}
          company={company}
          location={location}
          salary={salary}
          description={description}
          postURL={postURL}
          deadline={deadline}
          applied={applied}
          interview_1={interview_1}
          interview_2={interview_2}
          offer={offer}
          handleInputChange={handleInputChange}
          handleDateChange={handleDateChange}
          handleDateSelect={handleDateSelect}
        />
      ) : null}
      {showing === "jobCompany" ? (
        <JobCompany
          company={company}
          subtitle={subtitle}
          headquarters={headquarters}
          url={url}
          year={year}
          type={type}
          country={country}
        />
      ) : null}
      {showing === "jobNotes" ? (
        <JobNotes
          note={note}
          notes={notes}
          handleDeleteNote={handleDeleteNote}
          handleNotesSubmit={handleNotesSubmit}
          handleInputChange={handleInputChange}
        />
      ) : null}
      {showing === "jobTasks" ? (
        <JobTasks
          task={task}
          tasks={tasks}
          taskDate={taskDate}
          handleInputChange={handleInputChange}
          handleDateChange={handleDateChange}
          handleDateSelect={handleDateSelect}
          handleTaskSubmit={handleTaskSubmit}
          handleCheckboxToggle={handleCheckboxToggle}
        />
      ) : null}
    </Fragment>
  );
};

export default JobContent;
