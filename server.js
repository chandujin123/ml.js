var express = require('express');
var bodyparser =require('body-parser');
var _ = require('underscore');
var conn=express();
var port=process.env.PORT || 3000;
var todos=[];
var idi=1;
conn.use(bodyparser.json());
conn.get('/todos',function(req,res){
	res.json(todos);
});	
conn.post('/todos',function(req,res){
	var bd = req.body;
	var picked = _.pick(bd,'description','completed');
	console.log(!_.isBoolean(bd.completed)+'  ds');
	if(!_.isBoolean(bd.completed) || !_.isString(bd.description))
	{
		return res.status(404).send();
	}
	bd.id=idi;
	picked.id=idi;
	idi=idi+1;
	todos.push(picked);

	console.log('in post'+JSON.stringify(todos));
	res.json(bd);
});
conn.delete('/todos/:id' , function(req,res){
	var rid=parseInt(req.params.id);
	console.log('this in delete'+rid);
	var mached=_.findWhere(todos,{id:rid});
	if(!mached)
	{
		res.status(404).json({"error":"this is error msg"});
		
	}
	else
	{
		todos = _.without(todos,mached);
		res.json(mached);
	}
	
});
conn.get('/todos/:id',function(req,res){
	//colsole.log("in id get request")
	var rid=parseInt(req.params.id);
	var out=_.findWhere(todos,{id:rid});
	//console.log('wtf');
	//('the id is'+req.params.id);
	//todos.forEach(function(to){
		//console.log('in 4each loop '+rid+'=='+to.id);
		//if(to.id === rid)
		//{
			//console.log('in loop');
			//out=to;
		//}
		
	//);
	res.json(out);
});
conn.get('/',function(req,res){
	res.send('TO DO API ROOT');
});

conn.listen(port,function(){
		console.log('listningt to 3000  '+port);
		
	});