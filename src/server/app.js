let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let router = require('./router')

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())              
app.use(router)              

app.listen(81, () => {
    console.log('Server start successfully');
})

