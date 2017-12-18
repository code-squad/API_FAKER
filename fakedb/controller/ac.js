
/**** ALL LIST : ****/ 
exports.getItems = (query) => {
	const list = require('../ac/banchan.js');
	for(let i=0; i<list.length; i++) {
		if(list[i].qs === query) { 
			return [list[i].qs, list[i].items];
		}
	}
	return {'error' : 'not found item'};
}

