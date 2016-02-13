var express = require('express');
var conn=express();
var port=process.env.PORT || 3000;
conn.get('/',function(req,res){
	res.send('TO DO API ROOT');
});
conn.listen(port,function(){
		console.log('listningt to 3000  '+port);
		
	});