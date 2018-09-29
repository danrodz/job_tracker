import React from "react";

const JobSideMenu = ({ handleSideMenuClick }) => {
  return (
    <div>
      <input
        type="button"
        name="jobInfo"
        value="JOB INFO"
        onClick={handleSideMenuClick}
      />
      <input
        type="button"
        name="jobTasks"
        value="TASKS"
        onClick={handleSideMenuClick}
      />
      <input
        type="button"
        name="jobNotes"
        value="NOTES"
        onClick={handleSideMenuClick}
      />
      <input
        type="button"
        name="jobCompany"
        value="COMPANY"
        onClick={handleSideMenuClick}
      />
    </div>
  );
};

export default JobSideMenu;
