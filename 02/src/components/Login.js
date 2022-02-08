import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { Link, useNavigate } from 'react-router-dom';

// 0, null, NaN, '', undefined, false === false

const initailValues = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
  user: false
}

function Login() {

  const navigate = useNavigate();

  const [formState, updateState] = useState(initailValues);

  const handleChange = (event) => {
    const {name, value} = event.target;
    updateState((prevState) => ({...prevState, [name]: value}));
  }

  const validate = () => {
    let {email, password, emailError, passwordError} = formState;

    // email
    if(!email.includes('@')) {
      emailError = '@ is missing';
    } else {
      emailError = '';
    }

    // password
    if(password.length<8) {
      passwordError = 'length should be atleast 8';
    } else {
      passwordError = '';
    }

    if(emailError || passwordError) {
      updateState((prevState) => ({...prevState, emailError: emailError, passwordError: passwordError}));
      return false;
    }

    updateState((prevState) => ({...prevState, emailError: emailError, passwordError: passwordError}));
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = validate();

    if(isValid) {
      updateState((prevState) => ({...prevState, user: true}));
      navigate('/blogs');
    } else {
      console.log('Data is not valid');
    }

  }

    return (
      <div className='login-form'>
          <h2 className='title'>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={handleSubmit}>
            
            <FormInput label={'Email'} type={'text'} name={'email'} placeholder={'Email'} value={formState.email} handleChange={handleChange} />
            <span className='error-message'>{formState.emailError}</span>

            <FormInput label={'Password'} type={'password'} name={'password'} placeholder={'Password'} value={formState.password} handleChange={handleChange} />
            <span className='error-message'>{formState.passwordError}</span>

            <CustomButton type={'submit'}>Login</CustomButton>
          </form>
          <h4>Don't have an account? 
            <Link to='/signup' >Signup</Link>
          </h4>
      </div>
    )
  
}

export default Login;