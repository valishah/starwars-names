var uniqueRandomArr = require('unique-random-array');
var starWarsNames   = require('./starwars-names.json');
var getRandomItem   = uniqueRandomArr(starWarsNames);

module.exports = {
	all : starWarsNames,
	random :random
};

function random(number){
	if(number === undefined)
	 return getRandomItem();

	var randomItems = [];
	for(var i=0;i<number;i++){
		randomItems.push(getRandomItem());
	}
	return randomItems;
}
