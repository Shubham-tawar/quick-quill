import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div key={note._id} className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <p className="card-text">
          <small className="text-muted">Tag: {note.tag}</small>
        </p>
      </div>
    </div>
  );
};

export default NoteItem;
