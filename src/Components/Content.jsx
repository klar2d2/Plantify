import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontPage from './FrontPage';

class Content extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={FrontPage} />
        </Switch>
      </div>
    )
  }
}

export default Content;
