'use strict';

var gulp = require('gulp');
var megazord = require ('megazord-sdk');
megazord.registerScreenTasks();
gulp.tasks=megazord.gulp.tasks; 
