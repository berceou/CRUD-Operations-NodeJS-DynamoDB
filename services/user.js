const AWS = require('aws-sdk');
const {v4:uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your_key1",
    secretAccessKey: "your_secret_key1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "User";
//register içinde post işlemi yaparak üye oluşturma:
exports.register = async (params)=>{
    const items = {
        TableName : table,
        Item: {
            email:params.email,
            username: params.username,
            password: params.password,
            firstname: params.firstname,
            lastname: params.lastname,
            gender: params.gender,
            age: params.age
        }
    }
    try {
        await docClient.put(items).promise();
        return {
            status: true,
            message: 'Üyelik Oluşturuldu :)'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
//login içinde post işlemi yapılır. Karşılaştırma:

exports.login = async(params) => {
    //console.log(params)
    const items ={
        TableName : table,
        Key: {
            email: params.email,
            password: params.password//dynamoDB private key email verdik. Ek bilgi vermek için sort içinde yazmalısın. Sort'a password ekle!
        }
    }
    try {

        const data = await docClient.get(items).promise();
        const user = data.Item;
        const secret  = "62cb5757449177f69896654ee30d330a";
        const token = jwt.sign(
            user,
            secret,
            { expiresIn: '7d' }
        );
        return {
            status: true,
            jwt: {
                token: token,
                expiresIn: '7d'
            },//token visibility
            user
        };

    } catch (err) {
        return{
            status: false,
            message: err
        }
    }
}
