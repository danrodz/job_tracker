import React, { Component } from 'react';
import { Row } from 'react-materialize';
import ListContainer from '../ListContainer/ListContainer';
import jobs from './jobs';
// Navigation Bar For BoardContainer
// List Container
const WISHLIST = [];
const APPLIED = [];
const PHONE = [];
const ON_SITE = [];
const OFFER = [];
const REJECT = [];

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
    let item = array.find(job => job.id === id);
    array = array.filter(job => job !== item);
    item = { ...item };
    item.status = newStatus;
    let newArray = [...this.state[newStatus]];
    newArray = [...newArray, item];
    this.setState({ [status]: array, [newStatus]: newArray });
  };

  handleColorChange = (color, id, status) => {
    let array = this.state[status];
    array = [...array];
    let item = array.find(job => job.id === id);
    array = array.filter(job => job !== item);
    item = { ...item };
    item.color = color;
    array = [...array, item];

    this.setState({ [status]: array });
  };

  render() {
    return (
      <Row>
        <ListContainer
          jobs={[...this.state.WISHLIST]}
          backgroundColor="#E9E9E9"
          columnTitle="WISHLIST"
          handleColorChange={this.handleColorChange}
          handleStatusChange={this.handleStatusChange}
        />
        <ListContainer
          jobs={[...this.state.APPLIED]}
          backgroundColor="#F0F0F0"
          columnTitle="APPLIED"
          handleColorChange={this.handleColorChange}
          handleStatusChange={this.handleStatusChange}
        />
        <ListContainer
          jobs={[...this.state.PHONE]}
          backgroundColor="#E9E9E9"
          columnTitle="PHONE"
          handleColorChange={this.handleColorChange}
          handleStatusChange={this.handleStatusChange}
        />
        <ListContainer
          jobs={[...this.state['ON SITE']]}
          backgroundColor="#F0F0F0"
          columnTitle="ON SITE"
          handleColorChange={this.handleColorChange}
          handleStatusChange={this.handleStatusChange}
        />
        <ListContainer
          jobs={[...this.state.OFFER]}
          backgroundColor="#E9E9E9"
          columnTitle="OFFER"
          handleColorChange={this.handleColorChange}
          handleStatusChange={this.handleStatusChange}
        />
        <ListContainer
          jobs={[...this.state.REJECT]}
          backgroundColor="#F0F0F0"
          columnTitle="REJECT"
          handleColorChange={this.handleColorChange}
          handleStatusChange={this.handleStatusChange}
        />
      </Row>
    );
  }
}

export default BoardContainer;
