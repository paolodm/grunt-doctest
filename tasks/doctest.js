'use strict';

var doctest = require('doctest'),
    _ = require('lodash'),
    glob = require('glob');

module.exports = function(grunt) {
    grunt.registerMultiTask('doctest', 'Run doctests against files', function() {
        var options = this.options({
            module: 'commonjs'
        });

        _.each(options.files, function(f) {
            console.log('file: ' + f);

            var result = doctest(f, {
                module: options.module
            });
            console.log('r', result);
        });
    });
};