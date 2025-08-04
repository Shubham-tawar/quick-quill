import { useContext } from 'react'
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context; // imported deleteNode:- is a function in context to delete a note
  const { note,updateNote } = props;
  const formattedDate = new Date(note.date).toLocaleString();
  return (
    <div key={note._id} className="card m-3 noteItem" style={{ width: "18rem" }} >
      <div className="card-body" >
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <div className="d-flex justify-content-between align-items-center">
            <p className="card-text">
                <small className="text-muted">Tag: {note.tag}</small>
            </p>
            <i className="fa-solid fa-eraser mx-1" onClick={()=>{deleteNote(note._id)}}></i> 
            <i className="fa-solid fa-pen-nib mx-1" onClick={()=>{updateNote(note)}}></i>
        </div>
        <p className="card-text">
          <small className="text-muted">Created: {formattedDate}</small>
        </p>
        
      </div>
    </div>
  );
};

export default NoteItem;
