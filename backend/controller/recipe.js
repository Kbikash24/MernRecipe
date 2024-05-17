// recipe.js (Controller)

import { SavedRecipe } from "../Models/SaveRecipe.js";

export const savedRecipeById = async (req,res) =>{
    const {recipe}= req.body

    // let Savedrecipe = await SavedRecipe.findOne({recipe})

    // if(Savedrecipe) return res.json({message:"recipe already saved"})

  const  Savedrecipe = await SavedRecipe.create({recipe})
    
    res.json({message:"Recipe saved Successfully..!",Savedrecipe})
}

export const getSavedRecipe  = async (req,res) =>{
    const recipe = await SavedRecipe.find()
    res.json({recipe})
}
