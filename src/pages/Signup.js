import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from '../components/Header';
import styles from '../styles/Signup.module.css';
import Footer from '../components/Footer';

const SignUp = (props) => {
    
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    

    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const changeUsernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        
        const user = {
            email,
            username,
            password
        }
        console.log(user);
        axios.post('http://localhost:5000/users/register', user)
        .then(res => {
            console.log(res)
            history.push('/login')
        
        })
        .catch(err => console.log(err))
    }

  return (
            <div>
                <Header/>
                <div className = {`${styles.formContainer} container-fluid`}>
                <div className = {styles.form}>  
                        <Form method = 'POST'>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input onChange = {changeEmailHandler} type="email" name="email"  placeholder="Enter Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input onChange = {changeUsernameHandler} type="text" name="username" placeholder="Enter Username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input onChange = {changePasswordHandler} type="password" name="password"  placeholder="Enter Password" />
                        </FormGroup>
                        <FormText color="muted">
                            Already have an account? Click <Link to = '/login'>here</Link>  to Sign in.
                            </FormText>
                        

                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" />{' '}
                            I Agree to TrackFit Terms and Conditions
                            </Label>
                        </FormGroup>
                        <Input type = 'submit' value = 'Submit'/>
                        </Form>
                </div> 
                </div>
                <Footer/>
            </div>
  );
}

export default SignUp;
