import React from 'react'
import './login.css'
function login() {
  return (
    <div className="main-container">
    <section className = "login">
      <div className="login-group">
         <div className="login-content">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <center>
                  <img style = {{maxWidth:"80px"}} src="https://demo.amritaesolution.in/uploads/images/5519c3fd0ce55775013fe7c5863b65a2fbd8d90c7be8bb5f87eed67b838907db53d0b71150a2b19504c0e7a662802e5e416e08e27f604613eb31b750baf2c48d.png" alt="" />
                </center>
                <h4>School ERP AIV</h4>
              </div>
              <h3>Welcome Back!</h3>
              <p>Please login to your account</p>
            </div>
         <div className="login-banner">
         <img src="https://demo.amritaesolution.in/uploads/brand-logo.png" alt="login" />
      </div>
      </div>
    </section>
    </div>
  )
}

export default login;
