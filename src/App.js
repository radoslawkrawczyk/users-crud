import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';
import Navigation from './Navigation';
import UsersList from './UsersList';
import {Route} from 'react-router-dom';
import UsersAdd from './UsersAdd';
import UsersEdit from './UsersEdit';


class App extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Container>
                    <Route exact path="/" render={() => <UsersList users={this.props.users} />}  />
                    <Route path="/add" component={UsersAdd}/>
                    <Route path="/edit" component={UsersEdit}/>
                </Container>
            </div>
          );
      }
}

export default App;




