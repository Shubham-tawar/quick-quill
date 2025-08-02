const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes"); // to use the Notes model for database operations
const { body, validationResult } = require("express-validator");

//Route 1: Fetch all notes using GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes',fetchuser, async(req,res)=>{
    const notes = await Notes.find({user: req.user.id}); // find all notes for the user
    res.json(notes);
})


//Route 2: ADD new notes using  POST "/api/notes/addnote". Login required
router.post('/addnote',fetchuser, body("title").notEmpty(), async(req,res)=>{
    const errors = validationResult(req); // express-validator to validate the request body
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // if title is empty, return 400 status with errors
    }
    try {
        const { title, description, tag } = req.body; // destructuring the title, description and tag from the request body
        const note = new Notes({ // create a new note object
            title, description, tag, user: req.user.id // user id is taken from the request object
        });
        const savedNote = await note.save(); // save the note to the database
        res.json(savedNote); // return the saved note in json format
    } catch (error) {
        console.error("Error adding note:", error);
        return res.status(500).send("Internal Server Error");
        
    }
    
})

// Route 3: Update an existing note using PUT "/api/notes/updatenote/:id". Login required, *id of the note to be updated is passed as a parameter*
router.put("/updatenote/:id", fetchuser, async (req, res)=>{
    const { title, description, tag } = req.body; // destructuring the title, description and tag from the request body
    try {
        // Create a new note object with the updated values
        const newNote = {};
        if (title) { newNote.title = title; }
        if (description) { newNote.description = description; }
        if (tag) { newNote.tag = tag; }

        // Find the note by id and update it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Check if the user is authorized to update the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // Update the note in the database
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note); // return the updated note in json format
    } catch (error) {
        console.error("Error updating note:", error);
        return res.status(500).send("Internal Server Error");
    }
})

// Route 4: Delete an existing note using DELETE "/api/notes/deletenote/:id". Login required, *id of the note to be deleted is passed as a parameter*
router.delete("/deletenote/:id", fetchuser, async (req, res)=>{
    try {
        // Find the note by id
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Check if the user is authorized to delete the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // Delete the note from the database, this will automatically remove the note from the user's notes and retun the delted note
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note }); // return success message and deleted note in json format
    } catch (error) {
        console.error("Error deleting note:", error);
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router;