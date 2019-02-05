import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './layout/Header.js'
import AdminContainer from './containers/AdminContainer.js'
import BookingsContainer from './containers/BookingsContainer.js'
import CustomersContainer from './containers/CustomersContainer.js'
import ReportsContainer from './containers/ReportsContainer.js'
import TablesContainer from './containers/TablesContainer.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      links: [
        {
          url: '/bookings',
          name: 'Bookings'
        },
        {
          url: '/customers',
          name: 'Customers'
        },
        {
          url: '/tables',
          name: 'Tables'
        },
        {
          url: '/reports',
          name: 'Reports'
        },
        {
          url: '/admin',
          name: 'Admin'
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header links={this.state.links}/>
            <Switch>
              <Route exact path="/bookings" component={BookingsContainer} />
              <Route exact path="/customers" component={CustomersContainer} />
              <Route exact path="/tables" component={TablesContainer} />
              <Route exact path="/reports" component={ReportsContainer} />
              <Route exact path="/admin" component={AdminContainer} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
