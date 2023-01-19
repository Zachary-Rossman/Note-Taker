const notes = require('express').Router();

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
// tips.post('/', (req, res) => {
//   console.log(req.body);

module.exports = notes;