import React from 'react'
import styles from '../styles/Story.module.css'
import { Button} from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Story = () => {
    const history = useHistory();
    axios.defaults.withCredentials = true
    const checkAuth = (e) => {
        e.preventDefault();
        axios.get('http://localhost:5000/exercises')
        .then(res => {console.log(res)
            
            history.push('/')
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        
        <div className = 'container-fluid'>
        <div className= {styles.container}>
            <div>
                <img alt = 'about' className = {`${styles.about} img-fluid`} src = "img/about-pic.jpg" />
                </div>
            <div className = {styles.story}>
                <h3>Story about us</h3>
                <p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.
                </p>
                <Button onClick = {checkAuth} color="primary" size="lg">Read More</Button>{' '}
            </div>
            
            </div>
            </div>

    )
}

export default Story;