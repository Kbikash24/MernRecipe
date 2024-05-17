import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const RegisterHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
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

    if (result.data.message != "User already registered") {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }

    console.log(result.data);
  };
  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-3"
        style={{
          width: "500px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Register
        </h2>
        <form
          onSubmit={RegisterHandler}
          style={{
            width: "420px",
            margin: "auto",
          }}
          className="my-4 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="container d-grid col-6">
            {" "}
            <button type="submit" className="btn btn-primary my-3">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
