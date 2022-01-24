
# Basic CRUD operations with AWS DynamoDB and Node.js
This repo includes basic CRUD operations with AWS DynamoDB and NodeJS. Also, It has been prepared as a practice of A101 Nodejs bootcamp lessons.
In this, I’ll show how to do the following:  
- [AWS account](#AWS-Account)  
- [About AWS DynamoDB](#About-AWS-DynamoDB)  
- [About CRUD operations](#About-CRUD-operations)  
- [Setup the AWS-SDK in basic Node.js project](#Setup-the-AWS-SDK-in-basic-Node.js-project)  
- [Create a table](#Create-a-table)  
- [Create items in the table](#Create-items-in-the-table)  
- [List all of the items in the table](#List-all-of-the-items-in-the-table)  
- [Edit a table](#Edit-a-table)  
- [Delete the item in the table](#Delete-the-item-in-the-table)  
</br>  

**Note:** The first time you see DynamoDB's syntax and parameters for the various methods used in this repo, you can and should use the Google and [AWS documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html).  
</br>  

# Tech Stack
- **Client:** Postman  
- **Server:** Node, Express  
- **Packages:** Axios, Express, Express-jwt, JSONWebToken, Nodemon, Joi
- **Data Base:** AWS DynamoDB  
</br>  

# Directory Structure
    +---controllers
    |   |   Category.js
    |   |   User.js
    +---helpers
    |   |   error-handler.js
    |   |   jwt.js
    +---routes
    |   +---category
    |   |       category.js 
    |   +---user
    |   |       user.js   
    |   |   api.js
    +---services
    |   |   category.js
    |   |   user.js
    |   app.js
    |   package.json
    |   package-lock.json  
</br>  

# Usage/Examples/Informations  

## AWS Account
If you do not have an account yet, an AWS account must be created. The [Getting Started guide](https://docs.aws.amazon.com/comprehend/latest/dg/getting-started.html), which shows how to create an account, create an IAM user, and set up the AWS CLI, should be viewed.  
**Note:**
After creating the IAM user, to run this project, you will need to add the following environment variables to your .env file.  
```aws_access_key_id```  
```aws_secret_access_key```  
</br>  

## About AWS DynamoDB
DynamoDB is a Serverless NoSQL database solution developed by Amazon Web Services. Since DynamoDB is a serverless database, it enables to use a distributed database without considering the operational side of operations such as hardware adjustments, installation and configurations, replication. In order to provide the desired performance, it is the developer's responsibility to design the schema correctly and to determine the indexes correctly.  
</br>  

## About CRUD operations  

## Setup the AWS-SDK in basic Node.js project  
Install the AWS-SDK to be used to do things with DynamoDB.  
```
npm install aws-sdk
```  
**Note:** Similarly, it should be applied for all packages to be used.  
The code below just sets things up to be able to use DynamoDB methods from the SDK. These things will not change. At this point, transactions will be made using your AWS-generated ```aws_access_key_id```, ```aws_secret_access_key```.  

```javascript
const DynamoDB = new AWS.DynamoDB();
const AWS = require('aws-sdk')
const uuidv4 = require('uuid') //for id generation
AWS.config.update({
    region: "us-east-1", // replace with your region in AWS account
    accessKeyId: "aws_access_key_id",
    secretAccessKey: "aws_secret_access_key",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
```  
## Create a table  

## Create items in the table  

## List all of the items in the table  

## Edit a table  

## Delete the item in the table  





* [Reserved Words for AWS DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html)
=======
# NodeJS-BoilerPlate-Exp  
* Gain of NodeJS bootcamp  
* JWT embedded 
* cRUD operations
* Should update the README.md 


* [Reserved Words for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html)

