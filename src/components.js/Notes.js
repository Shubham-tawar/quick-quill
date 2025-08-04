import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";


const Notes = ({ searchQuery }) => {
  const context = useContext(noteContext);
  const navigate = useNavigate(); // Import useNavigate from react-router-dom to redirect
  const { notes, getNotes, editNote, userName } = context;
  
    

  const filteredNotes = notes.filter((note) =>
    note.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tag?.toLowerCase().includes(searchQuery.toLowerCase())
  );

    useEffect(() => {
    if (localStorage.getItem("token")) {
        getNotes();
    } else {
        navigate("/login");
    }
    // eslint-disable-next-line
    }, []);



    // Fetch notes when the component mounts or getNotes changes

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""});

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag});
    }

    const handleClick = async(e)=>{ 
        await editNote(note.id, note.etitle, note.edescription, note.etag);
        await getNotes();
        refClose.current.click();
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="my-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                    </div>
                </div>
            </div>
        </div>
        Hello <strong>{userName.name || "User"}</strong> Here are your notes
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
            {filteredNotes.length === 0 ? (
            <p>No notes to display</p>
            ) : (
            filteredNotes.map((note) => (
                <NoteItem key={note._id} note={note} updateNote={updateNote} />
            ))
            )}
        </div>
        
      </div>
    </>
  );
};

export default Notes;
