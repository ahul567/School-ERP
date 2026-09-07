import React, { useState } from 'react'

import './login.css'

function login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

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
                    username: username,
                    password: password
                })
            }
        );

        const data = await response.json();

        console.log("LOGIN RESPONSE:", data);

        if (!response.ok) {
            alert(data.message || "Login failed");
            return;
        }

        // Check response data
        if (!data.token) {
            console.error("Token missing:", data);
            alert("Login successful but token is missing");
            return;
        }

        if (!data.data) {
            console.error("User data missing:", data);
            alert("Login successful but user data is missing");
            return;
        }

        // Save login information
        localStorage.setItem("token", data.token);
        localStorage.setItem(
            "user",
            JSON.stringify(data.data)
        );

        console.log("USER DATA:", data.data);
        console.log("ROLE:", data.data.role);

        alert("Login successful");

        // Role based navigation
        if (data.data.role === "Admin") {

            window.location.href = "/admin";

        } else if (data.data.role === "Teacher") {

            window.location.href = "/teacher";

        } else if (data.data.role === "Student") {

            window.location.href = "/student";

        } else if (data.data.role === "Parent") {

            window.location.href = "/parent";

        } else if (data.data.role === "Accountant") {

            window.location.href = "/accountant";

        } else if (data.data.role === "Librarian") {

            window.location.href = "/librarian";

        } else if (data.data.role === "Receptionist") {

            window.location.href = "/receptionist";

        } else {

            alert("Invalid role: " + data.data.role);
        }

    } catch (error) {

        console.error("LOGIN ERROR:", error);

        alert("Something went wrong. Check Console.");
    }
};
  return (

    <div className="main-container">

    <section className = "login">

      <div className="login-group">

         <div className="login-content">

              <div className="d-flex flex-column justify-content-center align-items-center">

                <center>

                  <img
                    style = {{maxWidth:"80px"}}
                    src="https://demo.amritaesolution.in/uploads/images/5519c3fd0ce55775013fe7c5863b65a2fbd8d90c7be8bb5f87eed67b838907db53d0b71150a2b19504c0e7a662802e5e416e08e27f604613eb31b750baf2c48d.png"
                    alt=""
                  />

                </center>

                <h4>School ERP AIV</h4>

              </div>

              <h3>Welcome Back!</h3>

              <p>Please login to your account</p>

              <form
                className="login-form"
                onSubmit={handleLogin}
              >

                <div className="form-group">

                  <label className="form-label required">
                    User Name
                  </label>

                  <input
                    className="form-control"
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />

                  <label className="form-label required">
                    password
                  </label>

                  <input
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                    <div className="checkbox d-flex align-items-center justify-content-between">

                       <label className="mt-2 d-flex gap-2">

                         <input
                           className=""
                           type="checkbox"
                           id="remember"
                           name="remember"
                           value="remember"
                         />

                          <span htmlFor="remember-me">
                            Remember Me
                          </span>

                    </label>

                    <a
                      className="mt-2 forgotPass text-dark"
                      href="https://demo.amritaesolution.in/reset/index"
                    >
                      Forgot Password?
                    </a>

                    </div>

                  <button
                    type="submit"
                    className="btn btn-inline text-white border mt-4 border-warning bg-warning d-flex justify-content-center align-items-center"
                  >
                    Sign In
                  </button>

                </div>

              </form>

              <h4
                className = "mt-3"
                style={{
                  width : "100%",
                  textAlign : "center"
                }}
              >
                For Quick Demo Login Click Below...
              </h4>

              <nav>

                <button
                  style={{backgroundColor:"#008BF0"}}
                  id="admin"
                  onClick={() => {
                    setUsername("rahulraj");
                    setPassword("rahuladmin@2002");
                  }
                }
                >
                  Admin
                </button>

                <button
                  style={{backgroundColor:"#00B2D9"}}
                  id="teacher"
                  onClick={() => {
                    setUsername("rahulteacher123");
                    setPassword("rahulteacher@2002");
                  }}
                >
                  Teacher
                </button>

                <button
                  style={{backgroundColor:"#7A4BFF"}}
                  id="student"
                   onClick={() => {
                    setUsername("rahulstudentr123");
                    setPassword("rahulstudent@2002");
                  }}
                >
                  student
                </button>

                <button
                  style={{backgroundColor:"#00BC29"}}
                  id="parent"
                   onClick={() => {
                    setUsername("rahulparent123");
                    setPassword("rahulparent@2002");
                  }}
                >
                  parent
                </button>

                <button
                  style={{backgroundColor:"#FF7624"}}
                  id="accountant"
                   onClick={() => {
                    setUsername("rahulaccountant123");
                    setPassword("rahulaccountant@2002");
                  }}
                >
                  accountant
                </button>

                <button
                  style={{backgroundColor:"#A55FFF"}}
                  id="liberarian"
                   onClick={() => {
                    setUsername("rahulliberarian123");
                    setPassword("rahulliberarian@2002");
                  }}
                  
                >
                  Librarian
                </button>

                <button
                  style={{backgroundColor:"#FF5391"}}
                  id="receptionist"
                   onClick={() => {
                    setUsername("rahulrecptionist123");
                    setPassword("rahulreceptionist@2002");
                  }}
                >
                  Receptionist
                </button>

              </nav>

              <div
                style={{
                  width:"100%",
                  textAlign:"center",
                  fontWeight:"bolder",
                  marginTop:"7%"
                }}
              >
                <strong>
                  Copyright © Amrita Infovision Pvt. Ltd.
                </strong>
              </div>

            </div>

         <div className="login-banner">

         <img
           src="https://demo.amritaesolution.in/uploads/brand-logo.png"
           alt="login"
         />

          <div>

        <blockquote>

          "Education is the most powerful weapon which can use to change the world."

        </blockquote>

        <label>
          -- Nelson Mandela
        </label>

       </div>

      </div>

      </div>
        
    </section>

    </div>

  )

}

export default login;