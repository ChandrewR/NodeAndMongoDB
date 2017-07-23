const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/api');

const app = express();

app.use(router);
app.use(bodyparser.json());

app.listen(process.env.port || 4000, function(request,response) {
	console.log('Request listened by port 4000');
	//response.send({
		//name: 'Chandrew'
	//});
});

app.get('/', function(request,response) {
	//response.send('This is the response from server-localhost and port-4000');
	response.send([{
		id : 1,
		name : 'Chandrew'
	},
	{
		id : 1,
		name : 'Jai'
	}]);
});

