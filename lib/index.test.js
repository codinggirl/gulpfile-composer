const {
    tasksFromDir,
    tasksFromDirs,
    tasksFromFiles,
    tasks
} = require('./index')

test('define', () => {
    expect(tasksFromDir).toBeDefined()
    expect(tasksFromDirs).toBeDefined()
    expect(tasksFromFiles).toBeDefined()
    expect(tasks).toBeDefined()

    expect(typeof tasksFromDir).toEqual('function')
    expect(typeof tasksFromDirs).toEqual('function')
    expect(typeof tasksFromFiles).toEqual('function')
    expect(typeof tasks).toEqual('function')
})
