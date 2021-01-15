import React from 'react'

export default function validateInfo(values) {
  let errors ={};

    if(!values.firstName){
      errors.firstName ='Your name field'
    }
    if(!values.lastName){
      errors.lastName ='Your name field'
    }
    if(!values.email) {
      errors.email = 'Email required'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)) {
      errors.password = 'Password needs to be mix characters and Numbers';
    }
    if(!values.emails) {
      errors.emails = 'Email required'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.emails)) {
      errors.emails = 'Email address is invalid';
    }
    if (!values.passwords) {
      errors.passwords = 'Password is required';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.passwords)) {
      errors.passwords = 'Password is invalid';
    }
    return errors;
}


