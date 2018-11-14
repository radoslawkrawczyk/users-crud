import React, {Component} from "react";

class User extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.surname}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
            </tr>
        )
    }
}

export default User;
