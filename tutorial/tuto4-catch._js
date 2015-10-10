"use strict";
var ez = require('ez-streams');
var url = require('url');
var qs = require('querystring');

var begPage = '<html><head><title>My Search</title></head></body>' + //
'<form action="/">Search: ' + //
'<input name="q" value="{q}"/>' + //
'<input type="submit"/>' + //
'</form><hr/>';
var endPage = '<hr/>generated in {ms}ms</body></html>';

ez.devices.http.server(function(request, response, _) {
	var query = qs.parse(url.parse(request.url).query),
		t0 = new Date();
	response.writeHead(200, {
		'Content-Type': 'text/html; charset=utf8'
	});
	response.write(_, begPage.replace('{q}', query.q || ''));
	response.write(_, search(_, query.q));
	response.write(_, endPage.replace('{ms}', new Date() - t0));
	response.end();
}).listen(_, 1337);
console.log('Server running at http://127.0.0.1:1337/');

function search(_, q) {
	if (!q || /^\s*$/.test(q)) return "Please enter a text to search";
	// pass it to Wikipedia
	try {
		var json = ez.devices.http.client({
			url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + q,
			proxy: process.env.http_proxy
		}).proxyConnect(_).end().response(_).checkStatus(200).readAll(_);
		// parse JSON response
		var parsed = JSON.parse(json);
		// format result in HTML
		return '<ul>' + parsed[1].map(function(entry, i) {
			return '<li><a href="' + parsed[3][i] + '"><b>' + entry + '</b></a>: ' + parsed[2][i] + '</li>';
		}).join('') + '</ul>';
	} catch (ex) {
		return 'an error occured. Retry or contact the site admin: ' + ex.message;
	}
}