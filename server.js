const express = require('express')
const server  = express()
server.use(express.json())
const projectRouter = require("./projects/project_router")

// base URL to test if the server is running with no problems
server.get("/", (req, res)=>{
    res.status(200).send(`<h1> Server UP and Running </h1>`)
})

// this is the project router
server.use('/api/project', projectRouter)



module.exports = server;