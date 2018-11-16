const express = require('express')
const app = express()
const cors = require('cors')
const todo = require('../fakedb/controller/todo')

app.use(cors())

app.get('/', (req,res) => {
	const resultJSON = todo.getTodoList();
	res.json(resultJSON);
})

app.use(function(req, res, next) {
  res.status(404).json({'error' : 'not found that'});
});

module.exports = app;