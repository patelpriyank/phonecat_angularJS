'use strict';

var angular = require('angular');
var phoneList = require("./common/phone-list/phone-list.module");

//var phonelistCtrl = require('./home/controllers/home.controller.js');

var phonecatApp = angular.module("phonecatApp", [phoneList.name]);
//phonecatApp.controller("PhoneListCtrl", ['$scope', phonelistCtrl]);
