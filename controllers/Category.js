const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
const categoryService = require('../services/category')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your_key1",
    secretAccessKey: "your_secret_key1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "category";

exports.add = async (req,res) => {
    const response = await categoryService.add(req.body); //body ne yazarsan onu eklicek. 
    res.send(response);
}
/* service taşıdık
exports.add = async (req,res) => {
    var categoryName = req.body.categoryName; //parametre olarak eklemek istediğimizde.
    
    var params = {
        TableName: table,
        Item:{
            "id":uuidv4(),
            "categoryName": categoryName
        }
    };
    docClient.put(params, function(err, data) {
        if(err) {
            console.error("Unable to add items, Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false, message:'sorun var'})
        } else {
            console.log("added item", JSON.stringify(data, null,2));
            res.send({status:true, message:"eklendi"})
        }
    }) //if/else yerine try/catch. server break vermemek için.
}*/

exports.fetchAll = async (req,res) => {
    const response = await categoryService.fetchAll();
    res.send(response); 
}

exports.fetchSingle = async (req,res) => {
    const response = await categoryService.fetchSingle(req.params); //reqbody görmem lazım.
    res.send(response);
}

exports.update = async (req,res) => {
    const response = await categoryService.update(req.body);
    res.send(response);
}

exports.delete = async (req,res) => {
    const response = await categoryService.delete(req.params);
    res.send(response); 
}
