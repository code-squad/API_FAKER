const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const wonderAPI = require('../fakedb/controller/wonder')

app.use(cors())

app.get('/', (req,res) => {
		res.json({'name' : 'welcome fakedb wonder'});
});

app.get('/:query', (req,res) => {
    const query = req.params.query;
    console.log(query);
	const resultJSON = wonderAPI.getItem(query);
	res.json(resultJSON);
})

app.use(function(req, res, next) {
  res.status(404).json({'error' : 'not found that'});
});

module.exports = app;