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
    // const col = client.db(dbName).collection('Todos');
    const col = client.db(dbName).collection('Users');

    //deleteMany
    // col.deleteMany({name: 'Mohammad Sajid Ansari'}).then((res) => {
    //     console.log(res);
    // });

    // deleteOne
    // col.deleteOne({text: 'Lunch'}).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    col.findOneAndDelete({
        _id : new ObjectID('5bb1d17b2170e3b316bcffde')
    }).then((res) => {
        console.log(res);
    });

});
