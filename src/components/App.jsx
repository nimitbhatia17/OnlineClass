// Importing the basic React Model
import React from 'react';

import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import {Route} from 'react-router-dom';


// Defining the App component
function App(){
  
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />      
    </div>
  );
}

export default App;