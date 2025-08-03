import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "688f2ef1c697a861875a6dfd",
      "user": "688f2c6ec697a861875a6ded",
      "title": "First Note",
      "description": "This is the first Note",
      "tag": "General",
      "date": "2025-08-03T09:42:09.768Z",
      "__v": 0
    },
    {
      "_id": "688f2f90c697a861875a6dff",
      "user": "688f2c6ec697a861875a6ded",
      "title": "Secont test Note",
      "description": "This is the second test Note",
      "tag": "General",
      "date": "2025-08-03T09:44:48.997Z",
      "__v": 0
    },
    {
      "_id": "688f2ef1c697a861875a6dfd",
      "user": "688f2c6ec697a861875a6ded",
      "title": "First Note",
      "description": "This is the first Note",
      "tag": "General",
      "date": "2025-08-03T09:42:09.768Z",
      "__v": 0
    },
    {
      "_id": "688f2f90c697a861875a6dff",
      "user": "688f2c6ec697a861875a6ded",
      "title": "Secont test Note",
      "description": "This is the second test Note",
      "tag": "General",
      "date": "2025-08-03T09:44:48.997Z",
      "__v": 0
    },
    {
      "_id": "688f2ef1c697a861875a6dfd",
      "user": "688f2c6ec697a861875a6ded",
      "title": "First Note",
      "description": "This is the first Note",
      "tag": "General",
      "date": "2025-08-03T09:42:09.768Z",
      "__v": 0
    },
    {
      "_id": "688f2f90c697a861875a6dff",
      "user": "688f2c6ec697a861875a6ded",
      "title": "Secont test Note",
      "description": "This is the second test Note",
      "tag": "General",
      "date": "2025-08-03T09:44:48.997Z",
      "__v": 0
    },
    {
      "_id": "688f2ef1c697a861875a6dfd",
      "user": "688f2c6ec697a861875a6ded",
      "title": "First Note",
      "description": "This is the first Note",
      "tag": "General",
      "date": "2025-08-03T09:42:09.768Z",
      "__v": 0
    },
    {
      "_id": "688f2f90c697a861875a6dff",
      "user": "688f2c6ec697a861875a6ded",
      "title": "Secont test Note",
      "description": "This is the second test Note",
      "tag": "General",
      "date": "2025-08-03T09:44:48.997Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial);  

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
