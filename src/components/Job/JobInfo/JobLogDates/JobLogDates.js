import React from "react";
import JobLogDateItem from "./JobLogDateItem/JobLogDateItem";

const JobLogDates = ({
  deadline,
  applied,
  interview_1,
  interview_2,
  offer,
  handleDateChange,
  handleDateSelect
}) => {
  const dates = [
    { date: deadline, label: "deadline", name: "Deadline" },
    { date: applied, label: "applied", name: "Applied" },
    { date: interview_1, label: "interview_1", name: "Interview 1" },
    { date: interview_2, label: "interview_2", name: "Interview 2" },
    { date: offer, label: "offer", name: "Offer" }
  ].map(({ date, label, name }) => {
    return (
      <JobLogDateItem
        key={name}
        name={name}
        date={date}
        label={label}
        handleDateChange={handleDateChange}
        handleDateSelect={handleDateSelect}
      />
    );
  });

  return (
    <div>
      <p>LOG DATES</p>
      {dates}
    </div>
  );
};

export default JobLogDates;
