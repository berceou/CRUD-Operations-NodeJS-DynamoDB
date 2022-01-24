const express = require('express')
let router = express.Router();

let brandController = require('../../controllers/Brand')


router.get('/',brandController.fetchBrand) //localhost:3000/api/brand
router.get('/categories',brandController.fetchCategories) //localhost:3000/api/brand
router.get('/category/:id',brandController.fetchSingleCategory)


module.exports = router;
