//File: main.js in root/myFiles/ directory

const express = require('express')
const myRouter = express.Router()

myRouter.get('/', (req, res) => {
    resObj = {
        srNo: 5,
        course: "Web Development",
        creditHours: 3
    }
    res.json(resObj)
})
//exporting so that it can access from other files
module.exports = myRouter
