const express = require('express')
const mongoConnect = require('./util/connection')
const app = express()

function employee(empid , name, state)
{
    this.empid = empid
    this.name = name
    this.state = state
}

mongoConnect( (client)=>{
    let obj = new employee(1234,'Anand','panjab')
    myDatabase = client.db()

    myDatabase.collection('sample').insertOne(obj)
    .then(result =>{
        console.log("Data Uploaded ... ")
    })
    .catch(err => {
        console.log(err)
    })
// Reterieve all data 
    myDatabase.collection('sample').find().toArray().then(items =>{
        console.log(items)
    })
    .catch(err =>{
        console.log(err)
    })


    
// specific record 
    myDatabase.collection('sample').find({empid : 1234}).next()
    .then(items =>{
        console.log(items)
    })
    .catch(err =>{
        console.log(err)
    })

    myDatabase.collection('sample').deleteMany({empid:1234})
.then(result =>{
    console.log("Record Deleted ...")
})
.catch(err=>{
    console.log(err)
})

var record  = {name :'shubham Anand'}
myDatabase.collection('sample').updateMany({empid:1524},{$set : record})
.then(result =>{
    console.log("Record updated ...")
})
.catch(err=>{
    console.log(err)
})
    app.listen(3000)
})

