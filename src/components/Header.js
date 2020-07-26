import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import styles from '../styles/Header.module.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';


const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(

        <Navbar className = {styles.container} sticky='top'color="white" light expand="md">
          <NavbarBrand href="/" style = {{fontFamily : `piedra, cursive`}}>
              <img alt = "logo" src = "img/services/service-icon-3.png" />
               TrackFit
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem active>
                <NavLink activeClassname = {styles.active} className = {styles.navlink} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className = {styles.navlink} to ="/about">About</NavLink>
              </NavItem>

              <NavItem>
                  <NavLink to = '/register' className = {styles.register}>Sign Up</NavLink>
              </NavItem>
            </Nav>
           
          </Collapse>
        </Navbar>

               
    )
}

export default Header;