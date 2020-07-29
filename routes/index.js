var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel');

router.post('/userSignup', async function(req, res, next){
    await userModel.insertUser(req.body);
});

router.post('/userAuthentication', async function (req,res) {
    var  = await userModel.authenticateUser(req.body);
    res.json()
});

router.post('mod_order', async function (req,res) {
    await userModel.getUserByID(req.body);
});

router.post('create_order', async function (req,res) {
    await userModel.getUserByID(req.body);
})

router.post('dropout', async function (req,res) {
    await userModel.getUserByID(req.body);
})