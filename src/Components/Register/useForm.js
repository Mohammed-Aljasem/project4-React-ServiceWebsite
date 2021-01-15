import{useState, useEffect} from 'react';
import validation from './valdition';


 
const useForm = (valdition) => {
  // const [values, setValues] = useLocalStorage('username',"mohammed");
  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })
  const [vallog, setVallog] = useState({
    emails:'',
    passwords:''
  })

  const [errors, setErrors] =useState({})

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values, [name]: value
    })
    setVallog({
      ...vallog, [name]: value
    })
    
  }
  const handleSubmit = e =>{
    e.preventDefault();
    
      if (document.getElementById('checked').checked) {
        
        sessionStorage.setItem('firstName', (values.firstName))
        sessionStorage.setItem('lastName', (values.lastName))
        sessionStorage.setItem('email', (values.email))
        sessionStorage.setItem('password', (values.password))
        setErrors(validation(values));
        //   setValues({
          //   firstName:'',
          //   lastName:'',
          //   email:'',
          //   password:''
          document.getElementById("error-info").className = "mystyle";
          document.getElementById('error-info').innerHTML = "You are created account go to log in";
          // })
        }else {
          document.getElementById("error-info").className = "mystyle-erorr";
          document.getElementById('error-info').innerHTML = "please agree to the Terms and Privacy Policy";
        }
  }

  const submitLogin = e => {
     e.preventDefault();
    
    
    
    setErrors(validation(values));
    //  --------------------------------------


     

  }
  return {handleChange, values, handleSubmit, errors , vallog, submitLogin}
}

export default useForm
