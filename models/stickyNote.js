//Define a schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StickyNoteSchema = new Schema(
    {
        id: { type: Number, min:1, required: true, unique: true },
        name: { type: String, trim: true, required: true},
        title: { type: String, trim: true, required: true},
        created_on: { type: Date, default: Date.now },
        notes: { type: String, trim: true, required: true}
    })

var StickyNote = mongoose.model('StickyNote', StickyNoteSchema);
// make this available to our users in our Node applications
module.exports = StickyNote;