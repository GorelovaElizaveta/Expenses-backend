const tasks = require("../task/index");

module.exports.getallExpenses = async (req, res) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  if (req.body.Date) {
    const task = new Task(req.body);
    task
      .save()
      .then((result) => {
        Task.find().then((result) => {
          res.send({ data: result });
        });
      })
      .catch((err) => res.status(500).send("404 tasks not created"));
  } else {
    const now = new Date();
    const task = new Task({
      Expenses,
      Date: now,
      text,
    });
    task
      .save()
      .then((result) => {
        Task.find().then((result) => {
          res.send({ data: result });
        });
      })
      .catch((err) => res.status(500).send("404 tasks not created"));
  }
};

module.exports.changeTaskInfo = (req, res) => {
  const { body, body: _id } = req;
  const { Expenses, Date, text } = req.body;
  if (_id && (Expenses || Date || text)) {
    Task.updateOne({ _id: _id }, body)
      .then(() => {
        Task.find().then((result) => {
          res.send({ data: result });
        });
      })
      .catch((err) => res.status(500).send("error in getting a task by id"));
  }
};

module.exports.deleteTask = (req, res) => {
  if (req.query.id) {
    Task.deleteOne({ _id: req.query.id })
      .then(() => {
        Task.find()
          .then((result) => {
            res.send({ data: result });
          })
          .catch((err) => res.status(500).send("404 tasks not created"));
      })
      .catch((err) => res.status(500).send("404 tasks not created"));
  }
};
