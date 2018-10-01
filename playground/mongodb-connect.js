// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const test = require('assert');

const url = 'mongodb://127.0.0.1:27017';
// Database Name
const dbName = 'TodoApp';

// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
    if(err){
        return console.log('Unable to connect Database Server');
    }
    console.log('Connect to MongoDB server');
    // Create a collection we want to drop later
    /*const col = client.db(dbName).collection('Todos');
    // Insert a bunch of documents
    col.insertOne({
        text: 'Something to do Data',
        completed: false
    }, (err, res) =>{
        if(err){
            return console.log('Unable to insert the data');
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });*/


   /* const col = client.db(dbName).collection('Users');
    // Insert a bunch of documents
    col.insertOne({
        name: 'Mohammad Sajid Ansari',
        age: '25',
        lcoation: 'Surat, Gujarat'
    }, (err, res) =>{
        if(err){
            return console.log('Unable to insert the data');
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });*/

    client.close();
});
