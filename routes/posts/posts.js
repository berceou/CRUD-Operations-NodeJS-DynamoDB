const aws = require('aws-sdk');
const express = require('express')
let router = express.Router();

let postsController = require('../../controllers/Posts')

router.post('/',postsController.add);
router.get('/',postsController.fetchAll);
router.get('/:id',postsController.fetchSingle);
router.put('/',postsController.update);
router.delete('/:id',postsController.delete);

module.exports = router;