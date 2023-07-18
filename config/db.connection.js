import mongoose from "mongoose";

const dbConnection = async (username, password) => {
	try {
		const DB_URI = `mongodb+srv://${username}:${password}@rahulpw.f4afdkp.mongodb.net/DB_Rohan?retryWrites=true&w=majority`;
		await mongoose.connect(DB_URI);
		console.log("Database Connected Successfully");
	} catch (err) {
		console.log("Error while connecting to Database", err);
	}
};

export default dbConnection;
