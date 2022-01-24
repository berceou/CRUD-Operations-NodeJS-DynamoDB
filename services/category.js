const AWS = require('aws-sdk')
const {v4:uuidv4} = require('uuid')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your_key1",
    secretAccessKey: "your_secret_key1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "category";

exports.add = async (params)=>{
    const items = {
        TableName : table,
        Item: {
            id: uuidv4(),
            categoryName: params.categoryName
        }
    }
    try {
        await docClient.put(items).promise();
        return {
            status: true,
            message: 'Kategori eklendi'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

exports.fetchSingle = async (params) => { 
    var items = {
        TableName: table,
        Key:{
            id : params.id
        }
    };
    try {
        const data = await docClient.get(items).promise();
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

exports.fetchAll = async () => {
    const  items = {
        TableName:table
    };
    //scan:fetch all items
    try {
        const data = await docClient.scan(items).promise();
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

exports.update = async (params) => {
    var items = {
        TableName:table,
        Key:{
            id: params.id,
        },
    UpdateExpression: "set categoryName = :categoryName",
    ExpressionAttributeValues:{
        ":categoryName":params.categoryName,
    },
    ReturnValues:"UPDATED_NEW"
   };
    try {
        const data = await docClient.update(items).promise();
        return {
            status: true,
            data: data,
            message: 'Kategori güncellendi'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

exports.delete = async (params) => {
    var items = {
        TableName:table,
        Key:{
            id : params.id
        },
    };
    try {
        const response = await docClient.delete(items).promise();
        return {
            status: true,
            message: 'Kategori silindi'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
