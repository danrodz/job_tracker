import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import JobContainer from '../JobContainer/JobContainer';

// Navigation Bar For BoardContainer
// List Container
const WISHLIST = [];
const APPLIED = [];
const PHONE = [];
const ON_SITE = [];
const OFFER = [];
const REJECT = [];

const jobs = [
  {
    id: 1,
    company: 'Google',
    location: 'Austin',
    salary: '$100,000',
    description: 'really want it',
    title: 'Software Developer',
    postURL: 'indeed.com',
    subtitle: 'Google your life away',
    headquarters: 'Hippie Land, CA',
    url: 'google.com',
    year: '1998',
    type: 'Public',
    country: 'USA',
    notes: [],
    tasks: [],
    taskDate: null,
    deadline: null,
    applied: null,
    interview_1: null,
    interview_2: null,
    offer: null,
    status: 'WISHLIST'
  },
  {
    id: 2,
    company: 'Google',
    location: 'Austin',
    salary: '$100,000',
    description: 'really want it',
    title: 'Software Developer',
    postURL: 'indeed.com',
    subtitle: 'Google your life away',
    headquarters: 'Hippie Land, CA',
    url: 'google.com',
    year: '1998',
    type: 'Public',
    country: 'USA',
    notes: [],
    tasks: [],
    taskDate: null,
    deadline: null,
    applied: null,
    interview_1: null,
    interview_2: null,
    offer: null,
    status: 'WISHLIST'
  },
  {
    id: 3,
    company: 'Google',
    location: 'Austin',
    salary: '$100,000',
    description: 'really want it',
    title: 'Software Developer',
    postURL: 'indeed.com',
    subtitle: 'Google your life away',
    headquarters: 'Hippie Land, CA',
    url: 'google.com',
    year: '1998',
    type: 'Public',
    country: 'USA',
    notes: [],
    tasks: [],
    taskDate: null,
    deadline: null,
    applied: null,
    interview_1: null,
    interview_2: null,
    offer: null,
    status: 'WISHLIST'
  }
];

class BoardContainer extends Component {
  state = {
    WISHLIST: [],
    APPLIED: [],
    PHONE: [],
    'ON SITE': [],
    OFFER: [],
    REJECT: []
  };

  componentDidMount() {
    jobs.forEach(job => {
      switch (job.status) {
        case 'WISHLIST':
          WISHLIST.push(job);
          break;

        case 'APPLIED':
          APPLIED.push(job);
          break;

        case 'PHONE':
          PHONE.push(job);
          break;

        case 'ON SITE':
          ON_SITE.push(job);
          break;

        case 'OFFER':
          OFFER.push(job);
          break;

        case 'REJECT':
          REJECT.push(job);
          break;

        default:
          break;
      }
    });

    this.setState({
      WISHLIST,
      APPLIED,
      PHONE,
      'ON SITE': ON_SITE,
      OFFER,
      REJECT
    });
  }

  handleStatusChange = (id, status, newStatus) => {
    let array = this.state[status];
    array = [...array];
    const item = array.find(job => job.id === id);
    array = array.filter(job => job !== item);
    let newArray = this.state[newStatus];
    newArray = [...newArray, item];
    this.setState({ [status]: array, [newStatus]: newArray });
  };

  render() {
    return (
      <Row>
        <Col s={2}>
          <h5>WISHLIST</h5>
          {this.state.WISHLIST.length
            ? this.state.WISHLIST.map(job => (
              <JobContainer key={job.id} handleStatusChange={this.handleStatusChange} {...job} />
              ))
            : null}
        </Col>
        <Col s={2}>
          <h5>APPLIED</h5>
          {this.state.APPLIED.length
            ? this.state.APPLIED.map(job => (
              <JobContainer key={job.id} handleStatusChange={this.handleStatusChange} {...job} />
              ))
            : null}
        </Col>
        <Col s={2}>
          <h5>PHONE</h5>
          {this.state.PHONE.length
            ? this.state.PHONE.map(job => (
              <JobContainer key={job.id} handleStatusChange={this.handleStatusChange} {...job} />
              ))
            : null}
        </Col>
        <Col s={2}>
          <h5>ON SITE</h5>
          {this.state['ON SITE'].length
            ? this.state['ON SITE'].map(job => (
              <JobContainer key={job.id} handleStatusChange={this.handleStatusChange} {...job} />
              ))
            : null}
        </Col>
        <Col s={2}>
          <h5>OFFER</h5>
          {this.state.OFFER.length
            ? this.state.OFFER.map(job => (
              <JobContainer key={job.id} handleStatusChange={this.handleStatusChange} {...job} />
              ))
            : null}
        </Col>
        <Col s={2}>
          <h5>REJECT</h5>
          {this.state.REJECT.length
            ? this.state.REJECT.map(job => (
              <JobContainer key={job.id} handleStatusChange={this.handleStatusChange} {...job} />
              ))
            : null}
        </Col>
      </Row>
    );
  }
}

export default BoardContainer;
