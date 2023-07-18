import { User } from "../model/user.schema.js";

// UserRegister
export const userRegister = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const user = await User.create({ name, email, password });
		res.status(201).json({
			success: true,
			msg: "User registered successfully",
			user: user,
		});
	} catch (err) {
		res.status(404).json({
			success: false,
			msg: "User registration failed",
		});
		console.log("User registration failed ", err);
	}
};

// UserLogin
export const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (user) {
			if (user.password == password) {
				res.json({
					msg: `${user.name}! Login Successfully`,
				});
			} else {
				res.json({
					msg: `You entered wrong password`,
				});
			}
		} else {
			res.json({
				msg: "No account associate with this email",
			});
		}
	} catch (err) {
		res.status(404).json({
			msg: "Server error",
		});
		console.log("Server error ", err);
	}
};
