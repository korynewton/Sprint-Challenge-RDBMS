const express = require('express');

const server = express()

server.use(express.json())

const db = require('./data/dbConfig.js')



server.post('/projects', async (req, res) => {
    try {
        const [ posted ]  = await db('projects').insert(req.body)
        res.status(200).json(posted)
    } catch { 
        res.status(500).json({ error: "error in adding to database" })
    }
});

server.post('/actions', async (req, res) => {
    try {
        const [ posted ] = await db('actions').insert(req.body)
        res.status(200).json(posted)
    } catch { 
        res.status(500).json({ error: "error in adding to database" })
    }
});

server.get('/projects/:id', async (req, res) => {
    try {
        const project = await db('projects').where({ id: req.params.id }).first()
        if (project.completed === 0) {
            project.completed = false
        } else {
            project.completed = true
        }
        const actions_array = await db('actions').where({ project_id: project.id })
        for (let i = 0; i < actions_array.length; i++) {
            if (actions_array[i].completed === 0) {
                actions_array[i].completed = false
            } else {
                actions_array[i].completed = true
            }
            }
        res.status(200).json({...project, actions: actions_array})
    } catch {
        res.status(500).json({ message: "error" })
    }
})








//for testing if projects POST worked:
server.get('/projects', async (req, res) => {
    try {
        const projects = await db('projects')
        res.status(200).json(projects)
    } catch {
        res.status(500).json({ message: "not working" })
    }
});

//for testing if actions POST worked:
server.get('/actions', async (req, res) => {
    try {
        const actions = await db('actions')
        res.status(200).json(actions)
    } catch {
        res.status(500).json({ message: "not working" })
    }
});

server.listen(4000, () => {
    console.log("\n** server up and running on prt 4k**")
});