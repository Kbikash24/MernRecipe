import express from 'express';
import { getSavedRecipe, savedRecipeById  } from '../controller/recipe.js';
import { Auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/user',Auth, getSavedRecipe);
router.post('/user',savedRecipeById,async(req,res)=>{console.log("endpoint hit")} );

export default router;
