// const MongoClient=require('mongodb').MongoClient;
// const {MongoClient}=require('mongodb');//Identical to the above line

const {MongoClient,ObjectID}=require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

// var user={name:"Rima",age:28};
// //Object destructuring(es6 distructuring)
// var {name}=user;
// console.log(name);

// MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,db)=>{
// 	if(err)
// 	{
// 		return console.log("Unable to connect to MongoDb server");
// 	}
// 	console.log("Connected to to MongoDb server");

// 	db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err)
	{
		return console.log("Unable to connect to MongoDb server");
	}
	console.log("Connected to MongoDb server");

	const db=client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// },(err,result)=>{
	// 	if(err)
	// 	{
	// 		return console.log("Unable to insert todo",err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });

	// db.collection('Users').insertOne({
	// 	// _id:123,
	// 	name:"Rima",
	// 	age:28,
	// 	location:"Kolkata"
	// },(err,result)=>{
	// 	if(err)
	// 	{
	// 		return console.log("Unable to insert user",err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));

	// 	console.log(result.ops[0]._id.getTimestamp()); //get timestamp when data is created from the id
	// });

	client.close();
});












