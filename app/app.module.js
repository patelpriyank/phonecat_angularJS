'use strict';

var angular = require('angular');
var phonelistCtrl = require('./home/controllers/home.controller.js');

var phonecatApp = angular.module("phonecatApp", []);
phonecatApp.controller("PhoneListCtrl", ['$scope', phonelistCtrl]);
