const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const woowaApi = require('../fakedb/controller/woowa')

//cors : https://github.com/expressjs/cors#simple-usage-enable-all-cors-requests
app.use(cors())



//need to use 'app' object to reponse with cors
app.get('/', (req,res) => {
		res.json({'name' : 'welcome fakedb'});
});

/**** mapping table ****/
const listMap =  [
	{name : '/best', 		uniqueID : 'category_id'},
	{name : '/main', 		uniqueID : 'detail_hash'},
	{name : '/course', 	uniqueID : 'detail_hash'},
	{name : '/soup', 		uniqueID : 'detail_hash'},
	{name : '/side', 		uniqueID : 'detail_hash'},
	{name : '/detail', 		uniqueID : 'hash'}
]

/**** router : all item ****/
app.get(listMap.map((v) => v.name), (req,res) => {
		const kind = req.path.substring(1);
		const result = woowaApi.getAllItem(kind);
		res.json(result);
});

/**** router : each item ****/
listMap.forEach((v) => {
	app.get(v.name + '/:id' , (req,res) => {
			const id = req.params.id.toUpperCase();
			const resultJSON = woowaApi.getItem(v.name, v.uniqueID, id);
			res.json(resultJSON);
	});
});

app.use(function(req, res, next) {
  res.status(404).json({'error' : 'not found that'});
});

module.exports = app;