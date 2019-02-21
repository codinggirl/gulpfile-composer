const composer = require('../src/')
// const gulp = require('gulp')
// const path = require('path')

describe('tasksFromDir', () => {

    test('empty dirName should throw', () => {
        expect(() => {
            tasksFromDir()
        }).toThrow()
    })

    test('empty dirName should throw', () => {
        expect(() => {
            tasksFromDir(undefined)
        }).toThrow()
    })

    test('empty dirName should throw', () => {
        expect(() => {
            tasksFromDir(null)
        }).toThrow()
    })

    test('empty dirName should throw', () => {
        expect(() => {
            tasksFromDir(false)
        }).toThrow()
    })

    test('invalid dirName should throw', () => {
        expect(() => {
            tasksFromDir(1)
        }).toThrow()
    })

    let base = `${__dirname}/helper`
    let dir = 'dir'

    let composedTasks = composer.tasksFromDir(`${base}/${dir}`)

    test('should be defined', () => {
        expect(composedTasks).toBeDefined()
    })

    test('file content', () => {
        
        let t1 = require(`${base}/dir/task1.js`)
        let t2 = require(`${base}/dir/task2.js`)
        let t3 = require(`${base}/dir/task3.js`)
        let t4 = require(`${base}/dir/task4.js`)
        let t5 = require(`${base}/dir/task5.js`)
        let t6 = require(`${base}/dir/task6.js`)

        expect(t1).toBeDefined()
        expect(t2).toBeDefined()
        expect(t3).toBeDefined()

        expect(() => t1['1a']()).toThrow()
        expect(() => t1['1b']()).toThrow()
        expect(() => t1['1c']()).toThrow()
        expect(() => t2['2a']()).toThrow()
        expect(() => t2['2b']()).toThrow()
        expect(() => t2['2c']()).toThrow()
        expect(() => t3['3a']()).toThrow()
        expect(() => t3['3b']()).toThrow()
        expect(() => t3['3c']()).toThrow()

        expect(() => t4['1a']()).toThrow()
        expect(() => t4['1b']()).toThrow()
        expect(() => t4['1c']()).toThrow()
        expect(() => t5['2a']()).toThrow()
        expect(() => t5['2b']()).toThrow()
        expect(() => t5['2c']()).toThrow()
        expect(() => t6['3a']()).toThrow()
        expect(() => t6['3b']()).toThrow()
        expect(() => t6['3c']()).toThrow()
    })
})

describe('tasksFromDirs', () => {
    let dir1 = `${__dirname}/helper/dirs/group-1`
    let dir2 = `${__dirname}/helper/dirs/group2`
    let dirs = [dir1, dir2]
    let composedTasks = composer.tasksFromDirs(dirs)

    test('should be defined', () => {
        expect(composedTasks).toBeDefined()
    })

    test('file content', () => {
        
        let t1 = require(`${__dirname}/helper/dirs/group-1/task1.js`)
        let t2 = require(`${__dirname}/helper/dirs/group-1/task2.js`)
        let t3 = require(`${__dirname}/helper/dirs/group-1/task3.js`)
        let t4 = require(`${__dirname}/helper/dirs/group-1/task4.js`)
        let t5 = require(`${__dirname}/helper/dirs/group-1/task5.js`)
        let t6 = require(`${__dirname}/helper/dirs/group-1/task6.js`)

        expect(t1).toBeDefined()
        expect(t2).toBeDefined()
        expect(t3).toBeDefined()

        expect(() => t1['1a']()).toThrow()
        expect(() => t1['1b']()).toThrow()
        expect(() => t1['1c']()).toThrow()
        expect(() => t2['2a']()).toThrow()
        expect(() => t2['2b']()).toThrow()
        expect(() => t2['2c']()).toThrow()
        expect(() => t3['3a']()).toThrow()
        expect(() => t3['3b']()).toThrow()
        expect(() => t3['3c']()).toThrow()

        expect(() => t4['1a']()).toThrow()
        expect(() => t4['1b']()).toThrow()
        expect(() => t4['1c']()).toThrow()
        expect(() => t5['2a']()).toThrow()
        expect(() => t5['2b']()).toThrow()
        expect(() => t5['2c']()).toThrow()
        expect(() => t6['3a']()).toThrow()
        expect(() => t6['3b']()).toThrow()
        expect(() => t6['3c']()).toThrow()
    })
})

describe('tasksFromFiles', () => {
    let base = `${__dirname}/helper/files`
    let files = ['task1.js', 'task2.js', 'task3.js']
    let filePaths = files.map(file => `${base}/${file}`)
    let composedTasks = composer.tasksFromFiles(filePaths)

    test('file content', () => {
        
        let t1 = require(`${base}/task1.js`)
        let t2 = require(`${base}/task2.js`)
        let t3 = require(`${base}/task3.js`)

        expect(t1).toBeDefined()
        expect(t2).toBeDefined()
        expect(t3).toBeDefined()

        expect(() => t1['1a']()).toThrow()
        expect(() => t1['1b']()).toThrow()
        expect(() => t1['1c']()).toThrow()
        expect(() => t2['2a']()).toThrow()
        expect(() => t2['2b']()).toThrow()
        expect(() => t2['2c']()).toThrow()
        expect(() => t3['3a']()).toThrow()
        expect(() => t3['3b']()).toThrow()
        expect(() => t3['3c']()).toThrow()
    })

    test('should be defined', () => {
        expect(composedTasks).toBeDefined()
    })

    test('should have key', () => {
        expect(composedTasks).toHaveProperty('1a')
        expect(composedTasks).toHaveProperty('1b')
        expect(composedTasks).toHaveProperty('1c')
        expect(composedTasks).toHaveProperty('2a')
        expect(composedTasks).toHaveProperty('2b')
        expect(composedTasks).toHaveProperty('2c')
        expect(composedTasks).toHaveProperty('3a')
        expect(composedTasks).toHaveProperty('3b')
        expect(composedTasks).toHaveProperty('3c')
    })
})

describe('tasks', () => {
    let task1 = {
        'js:1': (cb) => {
            cb(null)
        },
        'js:2': (cb) => {
            cb(null)
        },
        'css:1': (cb) => {
            cb(null)
        }
    }
    let task2 = {
        'pug:1': (cb) => {
            cb(null)
        }
    }
    let expectedComposedTask = {
        'js:1': (cb) => {
            cb(null)
        },
        'js:2': (cb) => {
            cb(null)
        },
        'css:1': (cb) => {
            cb(null)
        },
        'pug:1': (cb) => {
            cb(null)
        }
    }

    let composedTask = composer.tasks([task1, task2])

    test('should be defined', () => {
        expect(composedTask).toBeDefined()
    })

    test('should compose', () => {
        expect(composedTask).toHaveProperty('js:1')
        expect(composedTask).toHaveProperty('js:2')
        expect(composedTask).toHaveProperty('css:1')
        expect(composedTask).toHaveProperty('pug:1')
    })
})

describe('common', () => {

    test('direct call should throw', () => {
        expect(() => {
            composer()
        }).toThrow()
    })
})
