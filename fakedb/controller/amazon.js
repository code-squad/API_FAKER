exports.getCard = (cardName) => {
	const cards = require('../amazon/card.js');
	for (card of cards ) {
		if(card.name === cardName) return card;
	}
	return {'error' : 'not found item'};
}

/**** ALL LIST : ****/ 
exports.getAutoCompleteItems = (query) => {
	const list = require('../amazon/ac.js');
	for (data of list) {
		if(data.prefix === query) return data;
	}
	return {'error' : 'not found item'};
}