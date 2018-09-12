const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const amazon = require('../fakedb/controller/amazon')

app.use(cors())

//need to use 'app' object to reponse with cors
app.get('/', (req,res) => {
		res.json({'name' : 'welcome Amazon fakeDB'});
});

app.get('/ac/:query', (req,res) => {
	const query = req.params.query;
	const resultJSON = amazon.getAutoCompleteItems(query);
	res.json(resultJSON);
})

app.get('/card/:name', (req,res) => {
	const cardName = req.params.name.toLowerCase();
	const resultJSON = amazon.getCard(cardName);
	res.json(resultJSON);
})

app.use(function(req, res, next) {
  res.status(404).json({'error' : 'not found that'});
});

module.exports = app;