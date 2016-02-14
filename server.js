var express = require('express');
var conn=express();
var port=process.env.PORT || 3000;
var todo=[{
	id:1,
	discription : "eat chiken",
	completed :false,
},{
	id:2,
	description:"water roses",
	completed : false
},
{
	id:3,
	descripition : "want to fuck",
	completed : true
}];
conn.get('/todos',function(req,res){
	res.json(todo);
});
conn.get('/todos/:id',function(req,res){
	var rid=parseInt(req.params.id);
	var out;
	//console.log('wtf');
	//('the id is'+req.params.id);
	todo.forEach(function(to){
		//console.log('in 4each loop '+rid+'=='+to.id);
		if(to.id === rid)
		{
			//console.log('in loop');
			out=to;
		}
		
	});
	res.json(out);
});
conn.get('/',function(req,res){
	res.send('TO DO API ROOT');
});
conn.listen(port,function(){
		console.log('listningt to 3000  '+port);
		
	});