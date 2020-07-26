import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
  <Router>
   <div>
     <Switch>
       <Route exact path = '/' component = {Home}/>
       <Route path = '/about' component = {About}/>
       <Route path = '/register' component = {Signup}/>
       <Route path = '/login' component = {Signin}/>
     </Switch>
   </div>
   </Router>
  );
}

export default App;
