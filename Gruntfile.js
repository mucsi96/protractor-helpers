module.exports = function(grunt) {
	// Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    protractor: 'grunt-protractor-runner'
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
  	protractor: {
      options: {
        configFile: 'specs/protractor.conf.js'
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    }
  });

  grunt.registerTask('test', function() {
    return grunt.task.run([
        'protractor'
      ]);
  });

  grunt.registerTask('default', [
    'test'
  ]);

};