const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
const postsService = require('../services/Posts')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your_key1",
    secretAccessKey: "your_secret_key1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "posts";

exports.add = async (req,res) => {
    const response = await postsService.add(req.body); //body ne yazarsan onu eklicek. 
    res.send({status:true});
}

exports.fetchAll = async (req,res) => {
    const response = await postsService.fetchAll();
    console.log(response);
    res.send({status:true}); 
}

exports.fetchSingle = async (req,res) => {
    const response = await postsService.fetch();
    console.log(response);
    res.send({status:true});
}

exports.update = async (req,res) => {
    const response = await postsService.update();
    console.log(response);
    res.send({status:true});
}

exports.delete = async (req,res) => {
    const response = await postsService.delete();
    console.log(response);
    res.send({status:true});
}
