const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Exercise type is required."
    },
    name: {
      type: String,
      trim: true,
      required: "Enter the exercise name."
    },
    duration: {
      type: Number,
      required: "Enter a duration time."
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
});

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;
