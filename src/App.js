import React from 'react';
import './App.css';
import './globalscss.scss';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import User_list from './user_list';
import User_details from './user_details';
import User_info from './user_info';
import User_marks from './user_marks';

class App extends React.Component{
  render(){
    return(
      <div className="container1">
      <BrowserRouter>
        <Switch>
          <Route exact path="/user" component={User_list} />
          <Route exact path="/user/:id/info" component={User_info} />
          <Route path="/user/:id/info" component={User_info} />
          <Route path="/user/:id/marks" component={User_marks} />
          <Redirect to="/user"/>
        </Switch>

        {/* <User_details /> */}

      </BrowserRouter>
      </div>
    )
  }
}

export default App;
