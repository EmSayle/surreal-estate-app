import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/app.css';
import NavBar from './navBar';
import Properties from '../components/properties';
import AddProperties from '../components/addProperties';


const App = () => (
  <div className="body">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperties} />
    </Switch>
  </div>
);

export default App;
