import React from 'react';
import { Col } from 'react-materialize';
import JobContainer from '../JobContainer/JobContainer';

const ListContainer = ({
  backgroundColor, columnTitle, handleColorChange, handleStatusChange, jobs
}) => (
  <div>
    <Col s={2} style={{ backgroundColor: `${backgroundColor}`, height: '500px', textAlign: 'center' }}>
      <h5 style={{ backgroundColor: '#FFF', textAlign: 'center', textShadow: '1px 1px 3px grey' }}>{columnTitle}</h5>
      {jobs.length
        ? jobs.map(job => (
          <JobContainer
            key={job.id}
            handleColorChange={handleColorChange}
            handleStatusChange={handleStatusChange}
            {...job}
          />
          ))
        : null}
    </Col>
  </div>
);

export default ListContainer;
