// we are going to write  a code that will make a connection with mongodb

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoClient = (callback)=>{
    MongoClient.connect('mongodb+srv://chitkara:44f2AKdkrATs5GAI@cluster0.dldj1.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser : true,
        useUnifiedTopology :true
    }).then(result =>{
        console.log(" DataBase Connected...")
        callback(result)
    }).catch( err=> {
        console.log(err)
    })
}

module.exports = mongoClient