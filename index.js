import express from "express";
import dotenv from "dotenv";
import router from "./routes/user.router.js";
import dbConnection from "./config/db.connection.js";

const app = express();

// System Environment
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).send("<h1>Hello Rahul Jee!</h1>");
});

// Routes
app.use("/user", router);

app.listen(PORT, async () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	await dbConnection(username, password);
});
