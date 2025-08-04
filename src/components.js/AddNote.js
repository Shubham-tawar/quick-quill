import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" }); // Reset the form after adding the note
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value });
    }

  return (
    <>
      <h2 className="mb-4">Add a Note</h2>
      <form style={{ width: "100%", maxWidth: "600px" }}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title" name = "title"
            value={note.title}
            placeholder="Enter Title for your note" onChange={onChange}
            required
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name='description'
            rows="5"
            placeholder="Enter description for your note"
            onChange={onChange}
            value={note.description}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag" name = "tag"
            placeholder="Tag" onChange={onChange}
            value={note.tag}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 my-2" onClick={handleAddNote}>
          ADD
        </button>
      </form>
    </>
  )
}

export default AddNote
