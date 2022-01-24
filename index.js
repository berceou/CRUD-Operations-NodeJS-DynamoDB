const express = require('express');
const app = express()
const endPoint = require('./routes/api')
const jwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

app.use(express.json())

app.use(jwt());
app.use('/api',endPoint)
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running!!')
})
