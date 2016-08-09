var request = require('request'),
		util 	= require('../util');

// module.exports = function (param) {

// 	var	channel		= param.channel,
// 		endpoint	= param.commandConfig.endpoint.replace('{price}');
		
// 	var currency = param.args ? param.args[0] : 'USD';
// 	request(endpoint, function (err, response, body) {
// 		var info = [];

// 		if (!err && response.statusCode === 200) {
// 			body = JSON.parse(body);
// 			info.push('Brexit, what Brexit? ' + body.GBP.symbol + body.GBP.last);
// 			info.push('Last 15min: ' + body.GBP.symbol + body.GBP['15m']);
// 			info.push('US OF A: ' + body.USD.symbol + body.USD.last);
// 			info.push('Last 15min: ' + body.USD['15m']);
// 		}
// 		else {
// 			info = ['Errr... something went wrong'];
// 		}

// 		util.postMessage(channel, info.join('\n\n'));
// 	});

// };

function price(param) {

	var	channel		= param.channel,
		endpoint	= param.commandConfig.endpoint.replace('{price}');
		
	var currency = param.args ? param.args[0] : 'USD';
	request(endpoint, function (err, response, body) {
		var info = [];

		if (!err && response.statusCode === 200) {
			body = JSON.parse(body);
			info.push('Brexit, what Brexit? ' + body.GBP.symbol + body.GBP.last);
			info.push('Last 15min: ' + body.GBP.symbol + body.GBP['15m']);
			info.push('US OF A: ' + body.USD.symbol + body.USD.last);
			info.push('Last 15min: ' + body.USD['15m']);
		}
		else {
			info = ['Errr... something went wrong'];
		}

		util.postMessage(channel, info.join('\n\n'));
	});

};
module.exports = price;