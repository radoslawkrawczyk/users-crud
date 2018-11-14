import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import User from './User';

class UsersList extends React.Component {
    componentDidMount() {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())

        .then(resp => {
            resp.forEach(key => {
                const data = {
                    id: key.id,
                    name: key.name,
                    surname: key.surname,
                    email: key.email,
                    phone: key.phone
                  }
                  this.props.dispatch({
                    type:'USERS_FETCH',
                    data});
            })
        })
    }
    render() {

        return (
            <Table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map((user) => <User id={user.id} name={user.name} surname={user.surname} email={user.email} phone={user.phone} />)}


                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}
export default connect(mapStateToProps)(UsersList);
