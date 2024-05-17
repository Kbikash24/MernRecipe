import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";
import bodyParser from "body-parser";
import recipeRouter from "./Routes/recipe.js";
import cors from 'cors'
const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use('/api', userRouter);
app.use('/api', recipeRouter);

mongoose
  .connect(
    "mongodb+srv://bikashk11:h1jxVAv3qTvct8Bw@cluster0.gxwkzwx.mongodb.net/",
    {
      dbName: "RecipeApp",
    }
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
app.get("/",(req,res)=>{res.json("hello")})
const port = 5000;

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
