const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

// GET Route for retrieving all the notes
notes.get("/", (req, res) => {    
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, "./db/db.json");
        res.json('Note added successfully');
    } else {
        res.error("Error in adding note");
    }});

    module.exports = notes;