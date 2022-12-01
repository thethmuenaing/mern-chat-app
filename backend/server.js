const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRouters = require("./routes/userRouters");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept JSON Data

app.get("/", (req, res) => {
	res.send("API is Running");
});

app.use("/api/user", userRouters);

// app.get("/api/chat", (req, res) => {
// 	res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
// 	// console.log(req.params.id);
// 	const singleChat = chats.find((c) => c._id === req.params.id);
// 	res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
