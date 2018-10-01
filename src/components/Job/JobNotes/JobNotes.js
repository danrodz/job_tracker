import React, { Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import { string, func, array } from 'prop-types';

const JobNotes = ({
  note, notes, handleDeleteNote, handleNotesSubmit, handleInputChange
}) => {
  let allNotes = null;

  if (notes.length) {
    allNotes = notes.map(({ content, time }, index) => (
      <div key={uuidv4()}>
        <p>{time}</p>
        <p>{content}</p>
        <input type="button" value="Delete" onClick={() => handleDeleteNote(index)} />
      </div>
    ));
  }

  return (
    <Fragment>
      <div>
        <form onSubmit={handleNotesSubmit}>
          <textarea
            name="note"
            value={note}
            onChange={handleInputChange}
            placeholder="+ Add Note"
            cols="30"
            rows="10"
          />
          <input type="submit" value="Save" />
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
