const Workout = require("../models/workout");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, {
      $push: {
        exercises: body
      }
    }, {
      new: true
    }).then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });
};