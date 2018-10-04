import React, { Component } from 'react';
import { Modal, Row, Button, Icon } from 'react-materialize';
import JobContent from '../../components/Job/JobLayout/JobContent/JobContent';
import JobHeader from '../../components/Job/JobLayout/JobHeader/JobHeader';
import JobSideMenu from '../../components/Job/JobLayout/JobSideMenu/JobSideMenu';
import moment from 'moment';
// import { object, string, array, func } from 'prop-types';

/* global localStorage */
class JobContainer extends Component {
  state = {
    color: this.props.color || '',
    id: this.props.id,
    company: this.props.company || '',
    location: this.props.location || '',
    salary: this.props.salary || '',
    description: this.props.description || '',
    title: this.props.title || '',
    postURL: this.props.postURL || '',
    subtitle: this.props.subtitle || '',
    headquarters: this.props.headquarters || '',
    url: this.props.url || '',
    year: this.props.year || '',
    type: this.props.type || '',
    country: this.props.country || '',
    showing: 'jobInfo',
    note: '',
    notes: this.props.notes || [],
    task: '',
    tasks: this.props.tasks || [],
    taskDate: this.props.taskDate || moment(),
    deadline: this.props.deadline || moment(),
    applied: this.props.applied || moment(),
    interview_1: this.props.interview_1 || moment(),
    interview_2: this.props.interview_2 || moment(),
    offer: this.props.offer || moment(),
    calendarSelected: '',
    status: this.props.status || 'WISHLIST'
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.color !== this.props.color) {
      this.setState({ color: nextProps.color });
    } else if (nextProps.status !== this.props.status) {
      this.setState({ status: nextProps.status });
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSideMenuClick = ({ target: { name: showing } }) => {
    this.setState({ showing });
  };

  // Job Notes
  addNote = note => {
    const notes = [note, ...this.state.notes];
    this.setState({ notes, note: '' });
  };

  handleDeleteNote = index => {
    const notes = [...this.state.notes];

    notes.splice(index, 1);

    this.setState({ notes });
  };

  handleNotesSubmit = e => {
    e.preventDefault();

    const now = moment().format('LLLL');
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
    this.setState({ tasks, task: '' });
  };

  handleCheckboxToggle = ({ target: { id } }) => {
    const tasks = [...this.state.tasks];

    tasks[id].completed = !tasks[id].completed;

    this.setState({ tasks });
  };

  handleStatusChange = ({ target: { value: status } }) => {
    const { id, status: oldStatus } = this.state;
    this.props.handleStatusChange(id, oldStatus, status);
  };

  handleColorChange = ({ target: { value: color } }) => {
    const { id, status } = this.state;
    this.props.handleColorChange(color, id, status);
  };

  render() {
    const {
      color,
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
      status
    } = this.state;

    return (
      <Row>
        <Modal
          fixedFooter
          trigger={
            <Button waves="light" className={color}>
              {company}
              <Icon right large>
                add_circle_outline
              </Icon>
            </Button>
          }
        >
          <JobHeader
            company={company}
            title={title}
            handleStatusChange={this.handleStatusChange}
            handleColorChange={this.handleColorChange}
            color={color}
            status={status}
          />
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
        </Modal>
      </Row>
    );
  }
}

export default JobContainer;
