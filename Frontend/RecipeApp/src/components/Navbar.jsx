import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const Navbar = () => {
  const {isAuthenticated, setisAuthenticated,logOut} = useContext(AppContext)
   
  return (
    <>
      <div className="nav bg-dark p-2">
        <Link
          to={"/"}
          className="left"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2> Recipe</h2>
        </Link>
        <div className="right">
          {isAuthenticated && (
            <>
              
             
              <div className="btn btn-danger mx-2" onClick={logOut}>LogOut</div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="btn btn-primary mx-2">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-warning mx-2">
                Register
              </Link>
            </>
          )}

          <Link to={"/"} className="btn btn-light mx-2">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
