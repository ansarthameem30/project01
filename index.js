const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
  });
   
  app.listen(3000, function () {
    console.log('Server is running on port 3000');
  });
  

const prompt = require('prompt-sync')();

const tasks = [];

const promptNewTask = () => {
  const title = prompt('Enter task title: ');
  const description = prompt('Enter task description: ');

  const newTask = { title, description, complete: false };
  tasks.push(newTask);
  console.log('Task added successfully!');
  promptMenu();
};

const listTasks = () => {
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} - ${task.description}`);
    });
  }
  promptMenu();
};

const markComplete = () => {
  const taskIndex = prompt('Enter the index of the task to mark as complete: ');

  if (taskIndex >= 1 && taskIndex <= tasks.length) {
    tasks[taskIndex - 1].complete = true;
    console.log('Task marked as complete!');
  } else {
    console.log('Please enter a valid task index.');
  }
  promptMenu();
};

const deleteTask = () => {
  const taskIndex = prompt('Enter the index of the task to delete: ');

  if (taskIndex >= 1 && taskIndex <= tasks.length) {
    tasks.splice(taskIndex - 1, 1);
    console.log('Task deleted!');
  } else {
    console.log('Please enter a valid task index.');
  }
  promptMenu();
};

const promptMenu = () => {
  console.log('\nSelect an option:');
  console.log('1. Add Task');
  console.log('2. List Tasks');
  console.log('3. Mark Task as Complete');
  console.log('4. Delete Task');
  console.log('5. Exit');

  const choice = prompt('Enter your choice: ');

  switch (choice) {
    case '1':
      promptNewTask();
      break;
    case '2':
      listTasks();
      break;
    case '3':
      markComplete();
      break;
    case '4':
      deleteTask();
      break;
    case '5':
      console.log('Goodbye!');
      break;
    default:
      console.log('Invalid option selected.');
      promptMenu();
  }
};

promptMenu();
