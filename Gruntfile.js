module.exports = function(grunt) {

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
        }
    });

    grunt.loadTasks('tasks');

    // Default task(s).
    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['doctest:test'])

};
