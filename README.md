# grunt-doctest

> Run doctest from grunt



## Getting Started
This plugin requires Grunt `^0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-doctest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-doctest');
```




## Doctest task
_Run this task with the `grunt doctest` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options


#### glob

Type: `String` {String} Pattern to be matched.
Default: null

Specify the files you want to run doctests on.


#### module

Type: `String` {commonjs | amd}
Default: `commonjs`

The module system your project is using.

### Usage examples

#### Basic configuration

This configuration will run doctests on the javascript files in the test and tasks folders, even in subfolders.

```js
// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    doctest: {
        test: {
            options: {
                module: 'commonjs',
                glob: '{test/**/*.js,tasks/**/*.js}'
            }
        }
    }```


## Release History

 * 2014-06-06   v1.0.0   First official release of grunt-doctest.
---

Task submitted by [Paolo del Mundo](http://paolodm.com/)

