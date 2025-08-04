import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = process.env.REACT_APP_API_URL || "http://localhost:5000";
  const notesInitial = []
  
  const [userName, setUserName] = useState(() => {
    const storedName = localStorage.getItem("name");
    return { name: storedName || "" };
  });



  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });

      if (!response.ok) {
        const errorText = await response.text(); // Read the raw text
        throw new Error(`Server Error ${response.status}: ${errorText}`);
      }

      const json = await response.json();
      console.log("Fetched notes:", json);
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  const [notes, setNotes] = useState(notesInitial);  

  // Add a note
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note)); // it return a new array with the new note added
  }


  // Delete a note
    const deleteNote = async(id) => {
      const response = await fetch(`${host}/api/notes/deletenote/`+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
      console.log("Deleting the note with id: " + id);
      const newNotes = notes.filter((note) => { return note._id !== id });
      setNotes(newNotes); // it return a new array with the note deleted
    }

    // Edit a note
    const editNote = async(id, title, description, tag) => {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json();
      console.log(json);

      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id ===id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
          break;
          
        }
        
      }
      setNotes([newNotes]); // it return a new array with the updated note
    }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes, userName, setUserName}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
