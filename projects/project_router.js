const project = require('./project_models')
const express = require('express')
const router = express.Router()

// get all recources
router.get('/resources', (req, res)=>{
    project.findResources()
    .then( (resources)=> res.status(200).json({data: resources}))
    .catch((error)=> errorHandler(error, res))
})

//add a resource
router.post('/resources', (req, res)=>{
    const newResource = req.body
    project.addResource(newResource)
    .then( (resource)=> res.status(200).json({data: resource}))
    .catch((error)=> errorHandler(error, res))
})

// get all projects 
router.get('/', (req, res)=>{
    project.findProjects()
    .then( (projects)=> res.status(200).json({data: projects}))
    .catch((error)=> errorHandler(error, res))
})

// get project by ID

router.get('/:id', (req, res)=>{
    const {id} = req.params
    project.findProject(id)
    .then( (project)=> res.status(200).json({data: project}))
    .catch((error)=> errorHandler(error, res))
})

// add project 
router.post('/', (req, res)=>{
    const newProject = req.body
    project.addProject(newProject)
    .then( (project)=> res.status(200).json({data: project}))
    .catch((error)=> errorHandler(error, res))
})

// update project 
router.put('/:id', (req, res)=>{
    const {id} = req.params
    const updating = req.body
    project.updateProject(updating, id)
    .then( (project)=> res.status(200).json({data: project}))
    .catch((error)=> errorHandler(error, res))
})

// delete project
router.delete('/:id', (req, res)=>{
    const {id} = req.params
    project.deleteProject(id)
    .then( (project)=> res.status(200).json({data: project}))
    .catch((error)=> errorHandler(error, res))
})





// get all tasks 
router.get('/:pid/tasks', (req, res)=>{
    const {pid} = req.params
    project.findTasks(pid)
    .then( (tasks)=> res.status(200).json({data: tasks}))
    .catch((error)=> errorHandler(error, res))
})

// get task by ID

router.get('/:pid/tasks/:id', (req, res)=>{
    const {pid} = req.params
    const {id} = req.params
    project.findTask(pid, id)
    .then( (task)=> res.status(200).json({data: task}))
    .catch((error)=> errorHandler(error, res))
})

// add task 
router.post('/:pid/tasks', (req, res)=>{
    const {pid} = req.params
    const newTask = req.body
    const projectId = {project_id: pid}
    const fixed = Object.assign(newTask, projectId )
    project.addTask(pid, fixed)
    .then( (task)=> res.status(200).json({data: task}))
    .catch((error)=> errorHandler(error, res))
})

// update task 
router.put('/:pid/tasks/:id', (req, res)=>{
    const {pid} = req.params
    const {id} = req.params
    const updating = req.body
    project.updateTask(pid, updating, id)
    .then( (task)=> res.status(200).json({data: task}))
    .catch((error)=> errorHandler(error, res))
})

// delete task
router.delete('/:pid/tasks/:id', (req, res)=>{
    const {pid} = req.params
    const {id} = req.params
    project.deleteTask(pid, id)
    .then( (task)=> res.status(200).json({data: task}))
    .catch((error)=> errorHandler(error, res))
})

// stretch 

router.get('/:id/strech', (req, res)=>{
    const {id} = req.params
    project.findProject(id)
    .then( (answer)=> {
        

        project.findTasks(id)
    .then( (answer2)=> {
        const mixed = {...answer, tasks: answer2}
        res.status(200).json({data: mixed})
    })
    
    })
    .catch((error)=> errorHandler(error, res))
})

router.get('/:id/strech2', (req, res)=>{
    const {id} = req.params
    project.findProject(id)
    .then( (answer)=> {
        

        project.findResources()
    .then( (answer2)=> {
        const mixed = {...answer, resources: answer2}
        res.status(200).json({data: mixed})
    })
    
    })
    .catch((error)=> errorHandler(error, res))
})


router.get('/:id/strech3', (req, res)=>{
    const {id} = req.params
    project.findTasks(id)
    .then( (answer)=> {
      
        project.findResources()
    .then( (answer2)=> {
        const extra = {resources: answer2}
        const mixed = answer.map(one => Object.assign(one, extra) )
        res.status(200).json({data: mixed})
    })
    
    })
    .catch((error)=> errorHandler(error, res))
})


router.get('/:id/strech4', (req, res)=>{
    const {id} = req.params
    project.findProject(id)
    .then( (answer)=> {
        

        project.findTasks(id)
    .then( (answer2)=> {
        

        project.findResources()
        .then((answer3=>{
            const mixed = {...answer, tasks: answer2, resources: answer3 }
            res.status(200).json({data: mixed})

        }))
    
    })
    
    })
    .catch((error)=> errorHandler(error, res))
})




// error handler
function errorHandler(error, res) {
    res.status(500).json({errorMessage: error.message})
}

module.exports = router