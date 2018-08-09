const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err)
	{
		return console.log("Unable to connect to MongoDb server");
	}
	console.log("Connected to MongoDb server");

	const db=client.db('TodoApp');

	//deleteMany
	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name:'Rima'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id:new ObjectID('5b6bcc39690e92f2fed46e6c')}).then((result)=>{
		console.log(JSON.stringify(results,undefined,2));
	})

	// client.close();
});












