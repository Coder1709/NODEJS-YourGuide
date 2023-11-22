const express = require("express") ;


const mongoose = require ( "mongoose")

const morgan = require ( 'morgan')

const bodyParser = require ( 'body-parser')


mongoose.connect('mongodb://localhost:27017/testdb')

const db = mongoose.connection


db.on("error" , ( error) => {
    console.log(err)
})

db.once("open" , () => {
    console.log("databse Conection Established")
})


const app = express();

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())


const PORT = process.env.PORT || 3000;


app.listen(PORT , ()=> {

    console.log(`Server is running on port ${PORT}` );
    console.log("Arpit Servers is functiona")

});