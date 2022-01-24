const express = require('express')
let router = express.Router();

const userEndpoint = require('./user/user')
router.use('/user',userEndpoint) //localhost:3000/api/user
const brandEndpoint = require('./brand/brand')
//DynamoDB:
const categoryEndpoint = require('./category/category')
const postsEndpoint = require('./posts/posts')

router.use('/brand',brandEndpoint) //localhost:3000/api/brand
router.use('/category',categoryEndpoint) //localhost:3000/api/category
router.use('/posts',postsEndpoint)  //localhost:3000/api/posts


module.exports = router;