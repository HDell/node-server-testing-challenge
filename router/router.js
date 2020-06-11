//set up
const express = require('express');
//routes
const router = express.Router();
//middleware
const NameDbModel = require('../model/dataModel.js');
//CRUD
router.get('/', (req, res) => {
    NameDbModel.find().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.get('/:name', (req, res) => {
    const {name} = req.params;
    NameDbModel.findBy(name).then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({err: "The record with the specified name does not exist."})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.delete('/:name', (req, res) => {
    const {name} = req.params;
    NameDbModel.remove(name).then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({err: "The record with the specified name does not exist."})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
//export
module.exports = router;