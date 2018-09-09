
/**** ALL LIST : ****/ 
exports.getItems = (query) => {
	const list = require('../ac/amazon.js');
	for (data of list) {
		if(data.prefix === query) return data;
	}
	return {'error' : 'not found item'};
}