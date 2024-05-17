import { User } from "../Models/user.js";
import jwt from "jsonwebtoken"; // Correct import statement for jwt

export const Auth = async (req, res, next) => {
    const token = req.header("Auth");
    try {
        if (!token) return res.json({ message: "Login required" });

        const decoded = jwt.verify(token, "YOUR_SECRET_KEY");
        const id= decoded.userId
        let user= await User.findById(id)
        if(!user) return res.json({message:"user does not exist"}) 
            req.user=user;
        next();
    } catch (error) {
        console.error(error); 
        return res.status(401).json({ message: "Invalid token" }); 
    }
};
