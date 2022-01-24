//Eksik işlemler. Doldurulması gerek.
const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your_key1",
    secretAccessKey: "your_secret_key1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "category";

exports.add = (params)=>{

}
exports.fetch = (params) => {

}
exports.fetchAll = () => {


}
exports.update = (params) => {

}
exports.delete = (params) => {

}


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
    }).promise();
}

exports.fetchALL = async (req,res) => {
     var  params = {
        TableName:table, //give it your table name
        Select: "All_ATTRIBUTES"
    };
    //scan:fetch all items
    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false})
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true})
            //console.log(data.Items);
        }
    }).promise();
}
/*
exports.getCategory= async(req,res)=>{
    
    var params={
        TableName:table,
        Select:"ALL_ATTRIBUTES"
        
    }
     const category=await docClient.scan(params).promise()
     res.send(category)
     console.log(category)
   
 }*/

exports.getSingle = async (req,res) => {
    var id = req.body.id; 
    var params = {
        TableName: table,
        Key:{
            "id" : req.params.id,
        }
    };
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false})
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true})
        }
    });
}

exports.put = async (req,res) => {
    var params = {
        TableName:table,
        Key:{
            "id": req.body.id,
        },
    UpdateExpression: "set categoryName = :categoryName",
    ExpressionAttributeValues:{
        ":categoryName":req.body.categoryName,
    },
    ReturnValues:"UPDATED_NEW"
   };
   
    console.log("Updating the item...");
    docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false})
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true})
        }
    });
}

exports.delete = async (req,res) => {
    var params = {
        TableName:table,
        Key:{
            "id":req.params.id
        },
    };
    
    console.log("Attempting a conditional delete...");
    docClient.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false})
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true})
        }
    });
}
