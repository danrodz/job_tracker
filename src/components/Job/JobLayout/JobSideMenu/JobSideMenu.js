import React from 'react';
import { func } from 'prop-types';
import { Button, Icon } from 'react-materialize';

const JobSideMenu = ({ handleSideMenuClick }) => (
  <div>
    <Button
      type="button"
      name="jobInfo"
      className="blue lighten-2"
      value="JOB INFO"
      medium
      waves="red"
      onClick={handleSideMenuClick}
    >
      INFO <Icon right>info</Icon>
    </Button>
    {'          '}
    <Button type="button" name="jobTasks" className="red lighten-2" value="TASKS" medium onClick={handleSideMenuClick}>
      TASKS
      <Icon right>check_circle_outline</Icon>
    </Button>
    {'        '}

    <Button type="button" name="jobNotes" className="amber accent-2" value="NOTES" medium onClick={handleSideMenuClick}>
      NOTES
      <Icon right>lists</Icon>
    </Button>
    {'      '}

    <Button
      type="button"
      name="jobCompany"
      className="indigo darken-4"
      value="COMPANY"
      medium
      onClick={handleSideMenuClick}
    >
      COMPANY
      <Icon right>work_outline</Icon>
    </Button>
  </div>
);

JobSideMenu.propTypes = {
  handleSideMenuClick: func
};

export default JobSideMenu;
