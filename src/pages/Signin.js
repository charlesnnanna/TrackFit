import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from '../components/Header';
import styles from '../styles/Signup.module.css';
import Footer from '../components/Footer';

const Signin = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const changeUsernameHandler = (e) => {
      setUsername(e.target.value)
    }

    const changePasswordHandler = (e) => {
      setPassword(e.target.value)
    }

    const submitForm = (e) => {
      e.preventDefault()
      const user = {
        username,
        password
      }
      console.log(user)
      axios.post('http://localhost:5000/users/login', user)
      .then(res => {
        console.log(document.cookie)
        console.log(res)
      })  
      .catch(err => console.log(err))
    }
  
  return (
<div>
    <Header/>
    <div className = {`${styles.formContainer} container-fluid`}>
     <div className = {styles.form}>  
            <Form>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input onChange = {changeUsernameHandler} type="text" name="text" placeholder="Enter Username" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input onChange = {changePasswordHandler} type="password" name="password"  placeholder="Enter Password" />
            </FormGroup>
            <FormText color="muted">
                Don't have an account? Click <Link to = '/register'>here</Link> to Create account.
                </FormText>
            
            <input type = 'submit' value = 'Submit'/>
            </Form>
    </div> 
    </div>
    <Footer/>
</div>
  );
}

export default Signin;

