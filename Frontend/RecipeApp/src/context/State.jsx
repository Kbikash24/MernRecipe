import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

const ContextProvider = (props) => {
  const APP_ID = "b3972793";
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0";
  
  const url "mern-recipe-api.vercel.app";
  const [token, setToken] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('food');
  const [reload, setReload] = useState(false);
  const [isAuthenticated, setisAuthenticated] = useState(false)

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      setRecipe(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [search]); // Fetch recipes when the search term changes

  useEffect(() => {
    if(token){
      localStorage.setItem("token",token)
    }
    const tokenFromLocalStorage = localStorage.getItem("token",token)
    if(tokenFromLocalStorage)
    {
      setToken(tokenFromLocalStorage);
      setisAuthenticated(true)
    }
    }, [token,reload])
    

  // Register
  const register = async (name, email, password) => {
    try {
      const api = await axios.post(
        `${url}/register`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return api;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setToken(api.data.token);
      setisAuthenticated(true)
      return api;
    } catch (error) {
      console.error('Error logging in:', error);
      
    }
  };

  const logOut = () =>{
    localStorage.removeItem("token",token)
    setToken("")
    setisAuthenticated(false)
  }

  



  return (
    <AppContext.Provider value={{ login, register, recipe, search, setSearch, fetchRecipe,isAuthenticated,setisAuthenticated,logOut}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
