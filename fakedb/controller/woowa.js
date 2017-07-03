
/**** ALL LIST : ****/ 
exports.getAllItem = (kind) => (require('../woowa/' + kind));

exports.getItem = (kind, uniqueID, requestId) => {
	const list = require('../woowa/' + kind);
	const result = {'error' : 'not found that'};
	for(let i=0; i<list.length; i++) {
		if(list[i][uniqueID] === requestId) return list[i];
	}
	return result;
}

