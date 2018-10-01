import React from "react";
import { func } from "prop-types";

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

JobSideMenu.propTypes = {
  handleSideMenuClick: func
};

export default JobSideMenu;
