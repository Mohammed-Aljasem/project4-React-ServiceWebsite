import React,{useState} from 'react'
import '../../Styles/StyleForm.css'
import useForm from './useForm'
import IMG2 from "../../img/2.svg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormLogin from './Formlogin'
import auth from './auth'
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

function FormRegister(props) {

  
  
  const { handleChange, values, handleSubmit,  errors, vallog} = useForm()
  
  
    return (
      <Router>
        <switch>
        <Header />
            
            <div>
            <div className="container-pr">
            
            <section className="container-ch">
            <div className="form-background">
            <i><img src={IMG2} width="100%" height="100%" alt=""/></i>
            </div>
            <div className="form-count">
              <div className="form-box">
                <h2>Register</h2>
                <form  className="container-form" onSubmit={handleSubmit}>
  
                  <div className="input-name">
                    <div className="input-user-f form-style-input">
                      <span>First name</span>
                      <input 
                      type="text"
                      name='firstName' 
                      value={values.firstName} 
                      onChange={handleChange}
                      />
                        {errors.firstName && <p style={{color:"red"}}>{errors.firstName}</p>}
                    </div>
                    <div className="input-user-l form-style-input">
                      <span>Last name</span>
                      <input 
                      type="text"
                      name='lastName' 
                      value={values.lastName} 
                      onChange={handleChange}
                      />
                        {errors.lastName && <p style={{color:"red"}}>{errors.lastName}</p>}
                    </div>
  
                  </div>
                  <div className="input-user form-style-input">
                    <span>Email: </span>
                    <input 
                    type="text"
                    name='email' 
                    value={values.email} 
                    onChange={handleChange}
                    />
                      {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                  </div>
                  <div className="input-password form-style-input">
                    <span>Password: </span>
                    <input 
                    type="password"
                    name='password' 
                    value={values.password} 
                    onChange={handleChange}
                    />
                      {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                  </div>
                  
                  
                  <div className="remember-me policy">
                    <label> <input type="checkbox" id="checked"/>agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a> </label>
                  </div>
                  <div className="input-log form-style-input">
                    <p 
                    // style={{color:"red"}}
                     id="error-info" ></p>
                    <input type="submit" value="Sign up"/>
                  </div>
                  <div className="input-dont">
                  <p>You have account? <Link onClick={ () => {auth.login(() => {props.history.push("/login") ; }); } } >Login</Link> </p>
                  </div>
                </form>
                </div>
              </div>
            </section>  
           </div>
         </div>
         <Footer />
       </switch>
     </Router>
    )
  }




export default FormRegister
