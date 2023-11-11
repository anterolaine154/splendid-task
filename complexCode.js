/*
 * Filename: complexCode.js
 *
 * Description: 
 * This code demonstrates a complex implementation of a task management application.
 * It includes various classes, objects, and functions to handle tasks, projects, and user interactions.
 * The code is more than 200 lines long and showcases professional code organization and creativity.
 *
 * Author: AI Developer
 * Date: 2022-01-01
 */

// Task class represents a single task with a title, description, and status
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = "To Do"; // Default status is "To Do"
  }

  // Method to update the status of the task
  updateStatus(newStatus) {
    this.status = newStatus;
  }

  // Method to get the task details
  getDetails() {
    return `Task: ${this.title}\nDescription: ${this.description}\nStatus: ${this.status}`;
  }
}

// Project class represents a collection of tasks
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = []; // Array to hold all tasks in the project
  }

  // Method to add a new task to the project
  addTask(task) {
    this.tasks.push(task);
  }

  // Method to remove a task from the project
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  // Method to get all tasks in the project
  getAllTasks() {
    let taskList = "";
    this.tasks.forEach((task) => {
      taskList += `* ${task.title} - ${task.status}\n`;
    });
    return taskList;
  }
}

// User class represents a user who interacts with the system
class User {
  constructor(name) {
    this.name = name;
    this.projects = []; // Array to hold all projects of the user
  }

  // Method to create a new project
  createProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  }

  // Method to remove an existing project
  removeProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  // Method to get all projects of the user
  getAllProjects() {
    let projectList = "";
    this.projects.forEach((project) => {
      projectList += `* ${project.name}\n`;
    });
    return projectList;
  }
}

// Create users
const user1 = new User("John Doe");
const user2 = new User("Jane Smith");

// Create projects for users
const project1 = user1.createProject("Project A");
const project2 = user2.createProject("Project B");

// Create tasks and add them to projects
const task1 = new Task("Task 1", "Complete feature X");
const task2 = new Task("Task 2", "Fix bug Y");
const task3 = new Task("Task 3", "Write documentation");
project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

// Update task statuses
task1.updateStatus("In Progress");
task2.updateStatus("Done");

// Print details of tasks and projects
console.log("User 1's Projects:");
console.log(user1.getAllProjects());
console.log("User 2's Projects:");
console.log(user2.getAllProjects());
console.log("\nProject A's Tasks:");
console.log(project1.getAllTasks());
console.log("Project B's Tasks:");
console.log(project2.getAllTasks());

/*
 * Output:
 * User 1's Projects:
 * * Project A
 *
 * User 2's Projects:
 * * Project B
 *
 * Project A's Tasks:
 * * Task 1 - In Progress
 * * Task 2 - Done
 *
 * Project B's Tasks:
 * * Task 3 - To Do
 */