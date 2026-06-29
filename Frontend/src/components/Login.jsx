import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import suggestion from './suggestion.jsx'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data = await response.json();

    if (data.success) {
  alert(`${data.role} Login Successful`);
    navigate('/dashboard/index');
} else {
  alert("Invalid Credentials");
}

  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="home-page">
       
      <div className="login-container">

        <div className="logo-section">
          <img
            className="login-image"
            src="https://demo.amritaesolution.in/uploads/brand-logo.png"
            alt="logo"
          />

          <h1>Welcome Back!</h1>

          <p>Please login to your account</p>
        </div>

        <form className="login-form" onSubmit = {handleLogin}>
          
          <div className="input-group">
            <label>User Name</label>

            <input
              type="text"
              placeholder="Enter username"
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-options">

            <div>
              <input type="checkbox" />
              <span> Remember Me</span>
            </div>

            <a href="#">
              Forgot Password?
            </a>

          </div>

          <button className="login-btn" type="submit"> 
            Sign In
          </button>

        </form>
         <h2 className = "suggestion-line" >For Quick Demo Login Click Below...</h2>
          <div className="suggestion-container">
           {
  suggestion.map((item, index) => (
    <div key={index} className="suggestion-item">
      <button style={{ backgroundColor: item.color }} onClick= {()=>{
        setUsername(item.word.toLowerCase());
        setPassword(item.word.toLowerCase() + "123");
      }}>
        {item.word}
      </button>
    </div>
  ))
}
          </div>
      </div>

    </div>
  )
}