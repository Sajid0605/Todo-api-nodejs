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
    const col = client.db(dbName).collection('Users');

    col.find({name: 'Mohammad Sajid Ansari'}).toArray().then((count) => {
        console.log(`User Data`);
        console.log(JSON.stringify(count, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    });

    col.find({name: 'Mohammad Sajid Ansari'}).count().then((count) => {
        console.log(`User Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch data', err);
    });

    // client.close();
});
