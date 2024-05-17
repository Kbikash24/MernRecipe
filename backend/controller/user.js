import { User } from "../Models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.json({ message: "User already registered" });
        }
        const hashPass = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashPass });
        res.json({ message: "User registered successfully", user });
    } catch (error) {
        res.json({ message: "Error registering user", error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User doesn't exist" });
        }
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
            return res.json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, "YOUR_SECRET_KEY", { expiresIn: "30d" });
        res.json({ message: `Welcome ${user.name}`, token });
    } catch (error) {
        res.json({ message: error.message });
    }
};


export const  Profile =async (req,res)=>{
    res.json({user:req.user})
}