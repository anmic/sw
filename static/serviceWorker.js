importScripts("client.js");

self.addEventListener('install', event => {
	var airbrake = new airbrakeJs.Client({projectId: 1, projectKey: 'abc'});
	var promise = airbrake.notify(`Service worker test`);
	console.log("install event")
	promise.then(function(notice) {
		console.log('install event success');
	});
	promise.catch(function(err) {
		console.log('airbrake error', err);
	});
});