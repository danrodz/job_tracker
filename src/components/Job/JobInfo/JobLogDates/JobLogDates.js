import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class JobLogDates extends Component {
  state = {
    deadline: moment(),
    applied: moment(),
    interviewOne: moment(),
    interviewTwo: moment(),
    offer: moment(),
    calendarSelected: ""
  };

  handleChange = date => {
    const { calendarSelected } = this.state;
    this.setState({ [calendarSelected]: date });
  };

  handleSelect = calendarSelected => {
    this.setState({ calendarSelected });
  };

  render() {
    const { deadline, applied, interviewOne, interviewTwo, offer } = this.state;
    return (
      <div>
        <p>LOG DATES</p>
        <p>Deadline</p>
        <DatePicker
          onFocus={() => this.handleSelect("deadline")}
          selected={deadline}
          onChange={this.handleChange}
          name="deadline"
          isClearable={true}
          placeholderText="+ Set date"
          dateFormat="LLL"
          showTimeSelect
        />
        <p>Applied</p>
        <DatePicker
          onFocus={() => this.handleSelect("applied")}
          selected={applied}
          onChange={this.handleChange}
          isClearable={true}
          placeholderText="+ Set date"
          dateFormat="LLL"
          showTimeSelect
        />
        <p>Interview 1</p>
        <DatePicker
          onFocus={() => this.handleSelect("interviewOne")}
          selected={interviewOne}
          onChange={this.handleChange}
          isClearable={true}
          placeholderText="+ Set date"
          dateFormat="LLL"
          showTimeSelect
        />
        <p>interview 2</p>
        <DatePicker
          onFocus={() => this.handleSelect("interviewTwo")}
          selected={interviewTwo}
          onChange={this.handleChange}
          isClearable={true}
          placeholderText="+ Set date"
          dateFormat="LLL"
          showTimeSelect
        />
        <p>Offer</p>
        <DatePicker
          onFocus={() => this.handleSelect("offer")}
          selected={offer}
          onChange={this.handleChange}
          isClearable={true}
          placeholderText="+ Set date"
          dateFormat="LLL"
          showTimeSelect
        />
      </div>
    );
  }
}

export default JobLogDates;
