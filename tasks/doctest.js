'use strict';

var doctest = require('doctest'),
    _ = require('lodash'),
    glob = require('glob'),
    chalk = require('chalk');

/*
convertResultArrayToObject -> Array -> Object

doctest returns results in an array
This function converts the array to an object, so it would be easier to
work with.

> convertResultArrayToObject([true, 10, 10, 5])
{ pass: true, expected: 10, actual: 10, lineNumber: 5 }
*/
function convertResultArrayToObject(result) {
    return {
        pass: result[0],
        expected: result[1],
        actual: result[2],
        lineNumber: result[3]
    };
}

module.exports = function(grunt) {
    grunt.registerMultiTask('doctest', 'Run doctests against files', function() {
        var options = this.options({
                module: 'commonjs'
            }),
            files = glob.sync(options.glob, { cwd: '.' });

        function runDoctests(files) {
            _.each(files, function(file) {
                console.log('Running doctest for ' + file + '...');

                var results = doctest(file, {
                    module: options.module
                });

                _(results)
                    .map(convertResultArrayToObject)
                    .each(function(result) {
                        if (result.pass) {
                            console.log(chalk.green("\tPassed on line " + result.lineNumber));
                        }
                        else {
                            console.log(chalk.red("\tFailed on line " + result.lineNumber + ".\n" +
                                "\t\tExpected: " + result.expected + "\n" +
                                "\t\tActual: " + result.actual + "\n"));
                        }
                    });
            });
        }

        runDoctests(files);
    });
};