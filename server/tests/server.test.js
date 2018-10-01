const expect = require('expect');
const supertest = require('supertest');
const request = require('request')

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
   Todo.deleteMany({completedAt: null}).then(() => done());
});

describe('POST /todos', () => {
   it('should a create a new todo', (done) => {
       var text = 'Testing todo';

           .post('/todos')
           .send({ text })
           .expect(200)
           .expect((res) => {
               expect(res.body.text).toBe(text);
           })
           .end((err, res) => {
               if(err)
                   return done(err);

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].length).toBe(text);
                    done();
                }).catch((err) => done(err));
           })
   });
});