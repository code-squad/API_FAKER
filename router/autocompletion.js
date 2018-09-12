const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const acAPI = require('../fakedb/controller/ac')

//cors : https://github.com/expressjs/cors#simple-usage-enable-all-cors-requests
app.use(cors())

//need to use 'app' object to reponse with cors
app.get('/', (req,res) => {
		res.json({'name' : 'welcome fakedb autocompletion'});
});

app.get('/:query', (req,res) => {
	const query = req.params.query;
	const resultJSON = acAPI.getItems(query);
	res.json(resultJSON);
})

app.use(function(req, res, next) {
  res.status(404).json({'error' : 'not found that'});
});

module.exports = app;