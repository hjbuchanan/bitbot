var request = require('request'),
	util 	= require('../util');

module.exports = function (param) {

	var	channel		= param.channel,
		amount = param.args ? param.args[0] : '100';
		currency = param.args ? param.args[1] : 'USD',
		endpoint	= param.commandConfig.endpoint.replace('{exchange}') + "?currency=" + currency.toUpperCase()
		+ "&value=" + amount;

	request(endpoint, function (err, response, body) {
		var info = [];

		if (!err && response.statusCode === 200) {
			body = JSON.parse(body);
			info.push(amount + ' ' + currency + ' is ' + body + 'BTC');
		}
		else {
			info = ["Sorry Charlie--looks like you don't have the right arguments"];
		}

		util.postMessage(channel, info.join('\n\n'));
	});

};