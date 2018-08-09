const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err)
	{
		return console.log("Unable to connect to MongoDb server");
	}
	console.log("Connected to MongoDb server");

	const db=client.db('TodoApp');

	//find returns a cursor,actually a pointer of that documents.one cursormethod is toArray(fetch document in array)
	// db.collection('Todos').find().toArray().then((docs) => { //find All
	// db.collection('Todos').find({completed:false}).toArray().then((docs) => {  //find based on condition
	// db.collection('Todos').find({
	// 	_id:new ObjectID('5b6ab01343864c8b9cf8e3f5')
	// }).toArray().then((docs) => {  
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log("Unable to fetch todos",err);
	// });

	// db.collection('Todos').find().count().then((count) => {  
	// 	console.log(`Todo Count:${count}`);
	// },(err) => {
	// 	console.log("Unable to fetch todos",err);
	// });

	db.collection('Users').find({name:"Rima"}).toArray().then((docs) => {
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log("Not Found",err);
	});

	// client.close();
});












