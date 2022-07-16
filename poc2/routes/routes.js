const control = require('../controller/students.js');
const express = require('express');
const router = express.Router();
const {validator ,validator2, result} = require('../validators/validators.js')


router.post('/studentregistration', validator,control.result,control.studentres);
router.get('/studentsignin',control.handel_get);
router.post('/login', control.login)









module.exports = { router };