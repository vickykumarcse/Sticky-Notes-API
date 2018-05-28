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
      res.status(500).send({ "result": "Failed", "error": err });
    }
    else {
      res.send({ "result": "Success" });
    }
  });
});


router.put('/editStickyNote', function (req, res, next) {
  console.log(req.body);
  var note = {
    "name": req.body.name,
    "title": req.body.title,
    "notes": req.body.notes
  };
  if(!req.body.id){
    res.status(500).send({ "result": "Edit Failed", "Error":"id is required"});
  }
  else{
    StickyNote.findOneAndUpdate({ id: req.body.id }, { $set: note }, function (err, doc) {
      if (err) {
        res.status(500).send({ "result": "Edit Failed", "error": err });
      }else {
        console.log(doc);
        if(!doc){
          res.status(500).send({ "result": "Edit Failed", "error": "Requested note is not available." });
        }else{
          res.send({ "result": "Success" });
        } 
      }
    });
  }
  
});

router.delete('/deleteStickyNote', function (req, res, next) {
  console.log(req.body);
  var deleteNotes = req.body.id;
  if(deleteNotes == null || deleteNotes == undefined){
    res.status(500).send({ "result": "Failed" });
  }
  if (typeof (deleteNotes) === "object" && deleteNotes.constructor === Array) {
    console.log("Array", deleteNotes)
    StickyNote.remove({ id: { $in: deleteNotes } }, function (err, item) {
      if (err) {
        console.log(err);
        res.status(500).send({ "result": "Failed", "error": err });
      }
      else {
        console.log(item);
        res.send({ "result": "Success" });
      }
    });
  }
  else if (typeof (deleteNotes) === "string" || typeof (deleteNotes) === "number") {
    console.log("String", deleteNotes);
    StickyNote.remove({ id: deleteNotes }, function (err, item) {
      if (err) {
        console.log(err);
        res.status(500).send({ "result": "Failed", "error": err });
      }
      else {
        console.log(item);
        res.send({ "result": "Success" });
      }
    });
  } else {
    res.status(500).send({ "result": "Failed" });
  }

});

module.exports = router;
