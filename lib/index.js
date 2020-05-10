const { readdirSync } = require('fs')
const path = require('path')

/**
 * load and compose tasks from a directory
 * @param {string} dirName directory name
 * @returns {object}
 */
function tasksFromDir(dirName) {
    let tasks = {}
    const files = readdirSync(dirName)
    files.map(file => {
        let p = path.resolve(dirName, file)
        let o = require(p)
        Object.assign(tasks, o)
    })
    return tasks
}

/**
 * load and compose tasks from multiple directories
 * @param {Array.<string>} dirNameList directory name list
 * @returns {object}
 */
function tasksFromDirs(dirNameList) {
    let tasks = {}
    dirNameList.map(dirName => {
        Object.assign(tasks, tasksFromDir(dirName))
    })
    return tasks
}

/**
 * load and compose tasks from multiple files
 * @param {Array.<string>} fileNameList file name list
 * @returns {object}
 */
function tasksFromFiles(fileNameList) {
    let tasks = {}
    fileNameList.map(file => {
        let o = require(file)
        Object.assign(tasks, o)
    })
    return tasks
}

/**
 * compose tasks from mutiple task objects
 * @param {object[]} taskList task object list
 * @returns {object}
 */
function tasks(taskList) {
    let tasks = {}
    taskList.map(task => {
        Object.assign(tasks, task)
    })
    return tasks
}

/**
 * @module gulpfile-composer
 */
module.exports = {
    tasksFromDir,
    tasksFromDirs,
    tasksFromFiles,
    tasks
}
