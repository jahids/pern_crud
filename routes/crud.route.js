const express = require("express");
const User = require("../models/user.model");
const crudController = require("../Controllers/User.controller");
const router = express.Router();

// adnub riute
router.post('/admin', crudController.adminpost);

// user route
router.get('/:id', crudController.findBYid);

// find by id
router.get('/:id', crudController.getdata);

router.get('/', crudController.getdata);
// CREATE
router.post('/users', crudController.postData);
// READ
router.get('/users', crudController.Allyousersget);

// UPDATE
router.put('/users/:id', crudController.update);

// DELETE
router.delete('/users/:id', crudController.deleteData);

module.exports = router