import { useRef } from "react";
import "./login.css";

export default function Login() {

  const email =useRef(); 
  const password =useRef(); 

  const handleClick = (e)=>{
    e.preventDefault();
    console.log(email.current.value);
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chat App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Chat App.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input type="email"  placeholder="Email" required className="loginInput" ref={email} />
            <input type="password"  placeholder="Password" minLength={6} required className="loginInput" ref={password} />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}