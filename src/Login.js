import React, { useState } from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import {db, auth } from './Firebase'
import { signInWithEmailAndPassword} from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
   await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

 

  return (
    <div className='main-container'>
        <h1 className="title">Log in </h1>
        {error && <p className='errors'>{error}</p>}
      <div className="main-container__content">
  <div className="content__inputs">
    <form className="content__input--form" onSubmit={handleSubmit}>
      <label Htmlfor="email">
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label Htmlfor="password">
        <input type="password" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </label>
    </form>
  </div>

  <div class="content__submit">
    <button type="button"  onClick={ handleSubmit } class="button">Sign in</button>

    <div className="content__submit--line"></div>
    <p>
      Don't have an account? 
      <Link className="link" to="/signup">Sign up</Link>

    </p>
    <div className="content__footer">
      <p>
        By clicking "Sign up" button above you agree to our
        <a href="/">
          <strong>terms of use</strong>
        </a>
        </p>
    </div>
  </div>
</div>
       </div>
  )
}

export default Login 