import React, { Component, Fragment } from "react";
import JobContent from "../../components/Job/JobLayout/JobContent/JobContent";
import JobHeader from "../../components/Job/JobLayout/JobHeader/JobHeader";
import JobSideMenu from "../../components/Job/JobLayout/JobSideMenu/JobSideMenu";
import moment from "moment";

class JobContainer extends Component {
  state = {
    company: "Google",
    location: "Austin",
    salary: "$100,000",
    description: "really want it",
    title: "Software Developer",
    postURL: "indeed.com",
    subtitle: "Google your life away",
    headquarters: "Hippie Land, CA",
    url: "google.com",
    year: "1998",
    type: "Public",
    country: "USA",
    showing: "jobInfo",
    note: "",
    notes: [],
    task: "",
    tasks: [],
    taskDate: moment(),
    deadline: moment(),
    applied: moment(),
    interview_1: moment(),
    interview_2: moment(),
    offer: moment(),
    calendarSelected: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSideMenuClick = ({ target: { name: showing } }) => {
    this.setState({ showing });
  };

  // Job Notes
  addNote = note => {
    const notes = [note, ...this.state.notes];
    this.setState({ notes, note: "" });
  };

  handleDeleteNote = index => {
    const notes = [...this.state.notes];

    notes.splice(index, 1);

    this.setState({ notes });
  };

  handleNotesSubmit = e => {
    e.preventDefault();

    const now = moment().format("LLLL");
    const { note } = this.state;

    this.addNote({ content: note, time: now });
  };

  // Dates
  handleDateChange = date => {
    const { calendarSelected } = this.state;
    this.setState({ [calendarSelected]: date });
  };

  handleDateSelect = calendarSelected => {
    this.setState({ calendarSelected });
  };

  // Job Tasks
  handleTaskSubmit = e => {
    e.preventDefault();

    const { task, taskDate } = this.state;
    const newTask = { content: task, date: taskDate, completed: false };

    const tasks = [...this.state.tasks, newTask];
    this.setState({ tasks, task: "" });
  };

  handleCheckboxToggle = ({ target: { id } }) => {
    const tasks = [...this.state.tasks];

    tasks[id].completed = !tasks[id].completed;

    this.setState({ tasks });
  };

  render() {
    const {
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
      offer
    } = this.state;

    return (
      <Fragment>
        <JobHeader company={company} title={title} />
        <JobSideMenu handleSideMenuClick={this.handleSideMenuClick} />
        <JobContent
          company={company}
          location={location}
          salary={salary}
          description={description}
          title={title}
          postURL={postURL}
          subtitle={subtitle}
          headquarters={headquarters}
          url={url}
          year={year}
          type={type}
          country={country}
          showing={showing}
          note={note}
          notes={notes}
          task={task}
          tasks={tasks}
          taskDate={taskDate}
          deadline={deadline}
          applied={applied}
          interview_1={interview_1}
          interview_2={interview_2}
          offer={offer}
          handleInputChange={this.handleInputChange}
          handleNotesSubmit={this.handleNotesSubmit}
          handleDeleteNote={this.handleDeleteNote}
          handleDateChange={this.handleDateChange}
          handleDateSelect={this.handleDateSelect}
          handleTaskSubmit={this.handleTaskSubmit}
          handleCheckboxToggle={this.handleCheckboxToggle}
        />
      </Fragment>
    );
  }
}

export default JobContainer;
