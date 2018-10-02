const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/config');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
   Todo.find().then((todo) => {
       res.send({todo});
   }, (err) => {
        res.status(400).send(err);
   })
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo){

            return res.status(404).send(todo);
        }

        res.send({todo});

    }, (err) => {
        res.status(400).send({err});
    })
});

app.listen(3010, () => {
    console.log('Started server on 3010 port');
});


module.exports = {app};