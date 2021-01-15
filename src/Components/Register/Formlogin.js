import React,{useState} from 'react'
import '../../Styles/StyleForm.css'
import IMG from "../../img/1.svg"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormRegister from './FormRegister';
import useForm from './useForm';
import auth from "./auth";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { getElementError } from '@testing-library/react';


function FormLogin(props) {
  
  const { handleChange, handleSubmit, errors, vallog, values, submitLogin} = useForm()

  

   function login(params) {
     const ok = () => {auth.login(() => {props.history.push("/profile") ; }); }
     const erorrEmail = () => {
       document.getElementById("Erorrs").innerHTML = "Your Email is not define";
      }
     const erorrPass = () => {
       document.getElementById("Erorrs").innerHTML = "The password you’ve entered is incorrect";
      }
      let date= window.sessionStorage.getItem('email');
      date == values.emails ? sessionStorage.getItem('password') == values.passwords ? ok() : erorrPass() : erorrEmail()

     
  }

  return (

    <div >

    <Header />

    <Router>
      <switch>
         
           <div className="container-pr">
            
          <section className="container-ch">
            <div className="form-background">
            <i><img src={IMG} width="100%" height="100%" alt=""/></i>
            </div>
            <div className="form-count">
              <div className="form-box">
                <h2>login</h2>
                <form  className="container-form" onSubmit={submitLogin}
                >
                  <div className="input-user form-style-input">
                    <span>Email: </span>
                    <input 
                    type="text" 
                    name='emails' 
                    value={vallog.emails} 
                    onChange={handleChange}
                    />
                    {errors.emails && <p id="Erorr">{errors.emails}</p>}
                  </div>
                  <div className="input-password form-style-input">
                    <span>Password: </span>
                    <input 
                    type="password" 
                    name='passwords' 
                    value={vallog.passwords} 
                    onChange={handleChange}
                    />
                    {errors.passwords && <p id="Erorr">{errors.passwords}</p>}

                  </div>
                  <div className="remember-me ">
                    
                  </div>
                  
                  <div className="input-log form-style-input">
                    <p id="Erorrs"></p>
                  <button 
                  className="btn-login"
                  type="submit" 
                   onClick={ login}
                    >
                    Login
                  </button>
                    
                  </div>
                  <div className="input-dont">
                    <p>Don't have account? <Link onClick={ () => {auth.login(() => {props.history.push("/register") ; }); } } >register</Link> </p>
                  </div>

                </form>
              </div>
            </div>
          </section>
        </div>
        <Footer />
    </switch>
  </Router>
    </div>
  )
}

 export default FormLogin
