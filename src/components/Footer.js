import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return(
        <div className = {styles.footer}>
            <div className = {styles.address}>
                <div>
                    <h4>Phone</h4>
                    <p>(123) 118 9999 - (123) 118 9999</p>
                </div>

                <div>
                    <h4>Address</h4>
                    <p>72 Kangnam, 45 Opal Point Suite 391</p>
                </div>

                <div>
                    <h4>Email</h4>
                    <p>contactcompany@charlie.com</p>
                </div>
            </div>

            <div className = {styles.newsletter}
                style = {{
                    background : `url('img/footer.jpg')`
                }}
            >
                <div>
                    <h1 style ={{fontFamily : `piedra`}}>Description of Mailing list</h1>
                    <p>Small Description</p>
                </div>
                <div>
                <form>
                    <input type = 'text' placeholder = "Enter your mail" /> 
                    <button type = 'submit'>Click here</button>
                </form>
                </div>
            </div>

            <div className = {styles.credits}>
                <p>©Copyright ©2020 All rights reserved | This template was made by Charles Uthulor</p>
            </div>
        </div>
    )
}

export default Footer;