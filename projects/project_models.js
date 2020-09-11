const db = require("../data/connections")
const knex = require('knex')
function findResources() {
    return db('resource')
}

function addResource(resource) {
   return findResources().insert(resource)
}

//projects
function findProjects() {
    return db('project')
    .then(project => {
        return project.map(project => {
          return {...project, completed: project.completed ? true : false}
        });
      });
}

function findProject(id) {
    return db('project').where({id}).first()
    .then(project => {
        return {...project, completed: project.completed ? true : false}
      });
}

function addProject(project) {
    return db('project').insert(project)
}

function updateProject(updatedProject, id) {
    return db('project').where({id}).first().update(updatedProject)
}

function deleteProject(id){
    return db('project').where({id}).first().del()
}

//tasks
function findTasks(project_id) {
    return db('task').where({project_id})
    .then(tasks => {
        return tasks.map(task => {
          return {...task, completed: task.completed ? true : false}
        });
      });
    
}

function findTask(project_id, id) {
    return db('task').where({project_id}).where({id}).first()
    .then(task => {
        return {...task, completed: task.completed ? true : false}
      });
}

function addTask(project_id, task) {
    return db('task').where({project_id}).insert(task)
}

function updateTask(project_id, updatedTask, id) {
    return db('task').where({project_id}).where({id}).first().update(updatedTask)
}

function deleteTask(project_id, id){
    return db('task').where({project_id}).where({id}).first().del()
}





module.exports = {
    findResources,
    addResource,

    findProjects,
    findProject,
    addProject,
    updateProject,
    deleteProject,

    findTasks,
    findTask,
    addTask,
    updateTask,
    deleteTask,

    
}