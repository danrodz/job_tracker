import React, { Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import { string, func, array } from 'prop-types';
import { Button, Input } from 'react-materialize';

const JobNotes = ({
  note, notes, handleDeleteNote, handleNotesSubmit, handleInputChange
}) => {
  let allNotes = null;

  if (notes.length) {
    allNotes = notes.map(({ content, time }, index) => (
      <div key={uuidv4()}>
        <p>{time}</p>
        <p>{content}</p>
        <Button type="button" value="Delete" onClick={() => handleDeleteNote(index)}>
          Delete
        </Button>
      </div>
    ));
  }

  return (
    <Fragment>
      <div>
        <form onSubmit={handleNotesSubmit}>
          <Input
            name="note"
            type="textarea"
            value={note}
            onChange={handleInputChange}
            placeholder="+ Add Note"
            cols="30"
            rows="10"
          />
          <Button type="submit" value="Save">
            Save
          </Button>
        </form>
      </div>
      <div>{allNotes}</div>
    </Fragment>
  );
};

JobNotes.propTypes = {
  note: string,
  notes: array,
  handleDeleteNote: func,
  handleNotesSubmit: func,
  handleInputChange: func
};

export default JobNotes;
