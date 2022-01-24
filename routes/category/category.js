const aws = require('aws-sdk');
const express = require('express')
let router = express.Router();

let categoryController = require('../../controllers/Category')

router.post('/',categoryController.add);
router.get('/',categoryController.fetchAll);
router.get('/:id',categoryController.fetchSingle);
router.put('/',categoryController.update);
router.delete('/:id',categoryController.delete);

module.exports = router;