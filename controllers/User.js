const AWS = require('aws-sdk')
const {v4:uuidv4} = require('uuid')
const userService = require('../services/user')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your_key1",
    secretAccessKey: "your_secret_key1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "User";

exports.register = async (req,res) => {
    const response = await userService.register(req.body);
    res.send(response);
}

exports.login = async (req,res) => {
    const response = await userService.login(req.body);
    res.send(response);
}


