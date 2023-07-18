import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is mandatory"],
	},
	email: {
		type: String,
		required: [true, "Email is mandatory"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Password is mandatory"],
	},
});

export const User = mongoose.model("user", userSchema);
