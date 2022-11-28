const mongoose = require("mongoose");

const chatMondel = mongoose.Schema(
	{
		chatName: { type: String, trim: true },
		isGroupChat: { type: Boolean, default: false },
		user: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		latestMessage: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
		groupAdmin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timeStamps: true,
	}
);

const Chat = mongoose.model("Chat", chatMondel);

module.exports = Chat;

// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin
