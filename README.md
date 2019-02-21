# gulpfile-composer

A gulpfile compose tool that let you could write gulpfile seperately.

⚠️ This is not a gulp plugin.

## How to use

### Prepare a workspace that using gulp build tool

Before you get started, verify the gulp version.

```shell
gulp --verson
```

The above command should out like the following:

```
[10:00:15] CLI version 2.0.1
[10:00:15] Local version 4.0.0
```

### install

```shell
npm install --save-dev gulpfile-composer
```

### Create gulp tasks in seperate files

This is just a demo, you could use any directory or file names as your needs.

- make a `gulp-tasks` directory
- place a `css.dev.js` to it
- place a `js.dev.js` to it

### Import all tasks into main `gulpfile`

- modify the main `gulpfile.js`

```js
const gulpfileComposer = require('gulpfile-composer')

// tasks directory
const tasksDir = './gulp-tasks'

// load all tasks in directory into tasks object
const tasks = gulpfileComposer.tasksFromDir(tasksDir)

// now you can add more features to tasks

// the main tasks exported
module.exports = tasks
```
### Done

Run the following command, you should see the tasks list.

```shell
gulp --tasks
```

## The limitation

- It does not work when using ES6/Babel
- It does not work when using TypeScript

To support these features, you can rewrite the code of this repo to fit it, and publish as a npm package to let the world better 😊

## Why `gulpfile-composer`

When you work on a heavy repo, build tasks are heavy too.

The gulp website [said](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles#splitting-a-gulpfile):
> Many users start by adding all logic to a gulpfile. If it ever grows too big, it can be refactored into separate files.
>
> Each task can be split into its own file, then imported into your gulpfile for composition. Not only does this keep things organized, but it allows you to test each task independently or vary composition based on conditions.
>
> Node's module resolution allows you to replace your `gulpfile.js` file with a directory named `gulpfile.js` that contains an `index.js` file which is treated as a `gulpfile.js`. This directory could then contain your individual modules for tasks.

It shows a derection, but how to do, it said nothing.

## Who using `gulpfile-composer`

😂

## Compare to other tools

### How about `mount-tasks`?

It's outdated since I write the tool.

- It use a old style `gulp.task()` API, but now it's recommand to use `module.exports`.
- It's error message could not friendly 😢

### How about `requireDir`?

It's outdated too.

- It can be used in an old style `gulp.task()` API gulpfile, but cannot work by `module.exports`.

## How does it work

It read a a directory that config gulpfiles, and exports all the files _exports_ to a single object, you can attach that object to the main gulpfile.

More details please see the code.

## Contribution

Feel free to help improve this project.

## License

[The MIT License](LICENSE).
