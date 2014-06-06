module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        doctest: {
            test: {
                options: {
                    files: ['test/toFarenheit.js'],
                    module: 'commonjs',
                    glob: '**/*'
                }
            }
        }
    });

    grunt.loadTasks('tasks');

    // Default task(s).
    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['doctest:test'])

};
