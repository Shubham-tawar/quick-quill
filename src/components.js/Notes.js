import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {notes.map((note) => (
          <NoteItem note={note} key={note._id} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
