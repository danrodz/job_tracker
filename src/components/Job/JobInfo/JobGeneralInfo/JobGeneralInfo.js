import React from "react";

// onFocus onBlur onChange

const JobGeneralInfo = ({
  company = "",
  title = "",
  location = "",
  salary = "",
  postURL = "",
  handleInputChange
}) => {
  return (
    <div>
      <p>GENERAL INFO</p>
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        value={company}
        placeholder="Select Company"
        onChange={handleInputChange}
      />

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="+ add title"
        onChange={handleInputChange}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={location}
        placeholder="+ add location"
        onChange={handleInputChange}
      />

      <label htmlFor="salary">Salary</label>
      <input
        type="text"
        name="salary"
        value={salary}
        placeholder="add salary"
        onChange={handleInputChange}
      />

      <label htmlFor="postURL">PostURL</label>
      <input
        type="text"
        name="postURL"
        value={postURL}
        placeholder="add URL"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default JobGeneralInfo;
