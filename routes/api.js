const express = require('express');
const router = express.Router();

router.get('/users',function(request,response){
	response.send({
		type : 'GET request upadted'
	});
});

router.post('/users',function(request,response){
	response.send({
		type : 'POST request'
	});
});

router.put('/users/:id',function(request,response){
	response.send({
		type : 'PUT request'
	});
});

router.delete('/users/:id',function(request,response){
	response.send({
		type : 'PUT DELETE'
	});
});

module.exports = router;