exports.getItem = (query) => {
	const list = require('../wonder/wonder.js');
	for(let i=0; i<list.length; i++) {
		console.log(list[i]);
		if(list[i].key === query) { 
			return list[i];
		}
	}
	return {'error' : 'not found item'};
}