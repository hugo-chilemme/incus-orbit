import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

(async () => {
	await client.connect();
	console.log('Database is running on port');
})();

const init = () => client.db(process.env.DB_NAME || 'test');

export default init;
