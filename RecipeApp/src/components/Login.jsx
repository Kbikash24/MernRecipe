import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate()
  const {login}=useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginHandler= async (e)=>{
    e.preventDefault()
    const result= await login(email,password)
    toast.info(result.data.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
      });
      setTimeout(()=>{
        navigate('/')
      },1500)
    console.log(result.data)
  }
  return (
    <><ToastContainer/>
      <div className="container my-5 p-3" style={{
        width:"500px",
        border:"2px solid yellow",
        borderRadius:"10px",
        
      }}>
        <h2 style={{
          textAlign:"center"
        }}>Login</h2>
        <form onSubmit={loginHandler} style={{
          width:"420px",
          margin:"auto"
        }} className="my-4 p-3">
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
<div className="container d-grid col-6" > <button type="submit" className="btn btn-primary my-3">
            Login
          </button></div>
         
        </form>
      </div>
    </>
  );
};

export default Login;
