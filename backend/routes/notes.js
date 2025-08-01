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
module.exports = router;