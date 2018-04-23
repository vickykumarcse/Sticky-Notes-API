var express = require('express');
var router = express.Router();
var StickyNote = require('../models/stickyNote');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sticky Notes API' });
});

router.get('/getStickyNotes', function (req, res, next) {
  console.log(req.query);
  StickyNote.find(req.query, function (err, notes) {
    if (err) {
      res.send({"noteList":[], "error": err });
    }
    else {
      notes.sort(function (a, b) {
        return b.created_on - a.created_on;
      })
      res.send({ "noteList": notes });
    }
  });
});

router.post('/saveStickyNote', function (req, res, next) {
  console.log(req.body);
  var note = {
    "id": req.body.id,
    "name": req.body.name,
    "title": req.body.title,
    "notes": req.body.notes
  };
  var newNote = StickyNote(note);
  newNote.save(function (err) {
    if (err) {
      console.log(err);
      if (err && err.code == 11000) {
        StickyNote.findOneAndUpdate({ id: note.id }, { $set: note }, { upsert: true }, function (err, doc) {
          if (err) {
            res.status(500).send({ "result": "Update Failed", "error": err });
          } else {
            res.send({ "result": "Success" });
          }

        });
      }
      else {
        res.status(500).send({ "result": "Failed", "error": err });
      }
    }
    else {
      res.send({ "result": "Success" });
    }
  });
});

router.post('/deleteStickyNote', function (req, res, next) {
  console.log(req.body);
  var deleteNotes = req.body.id;
  if (deleteNotes.constructor === Array) {
    console.log("Array", deleteNotes)
    StickyNote.remove({ id: { $in: deleteNotes } }, function (err) {
      if (err) {
        console.log(err);
        res.status(500).send({ "result": "Failed", "error": err });
      }
      else {
        res.send({ "result": "Success" });
      }
    });
  }
  else if (typeof (deleteNotes) === "string") {
    console.log("String", deleteNotes);
    StickyNote.remove({ id: deleteNotes }, function (err) {
      if (err) {
        console.log(err);
        res.status(500).send({ "result": "Failed", "error": err });
      }
      else {
        res.send({ "result": "Success" });
      }
    });
  } else {
    res.status(500).send({ "result": "Failed" });
  }

});

module.exports = router;
