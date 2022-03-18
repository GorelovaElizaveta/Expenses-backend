const express = require('express');
const router = express.Router();

const {
  getallExpenses,
  createNewTask,
  changeTaskInfo,
  deleteTask,
} = require('../controllers/task.controller');

router.get('/allExpenses', getallExpenses);
router.post('/createTask', createNewTask);
router.patch('/updateTask', changeTaskInfo);
router.delete('/deleteTask', deleteTask);


module.exports = router;