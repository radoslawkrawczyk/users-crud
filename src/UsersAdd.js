import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';


export default class UsersAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            surname: '',
            email: '',
            phone: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            'name': this.state.name,
            'surname': this.state.surname,
            'email': this.state.email,
            'phone': this.state.phone
        }

        this.setState({
            name: '',
            surname: '',
            email: '',
            phone: ''
        });

        fetch("http://localhost:3000/users", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())

    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Add User</h1>
                <FormGroup>
                    <label>Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} placeholder="Type user's name" />
                </FormGroup>
                <FormGroup>
                    <Label>Surname</Label>
                    <input type="text" className="form-control" value={this.state.surname} onChange={e => this.setState({ surname: e.target.value })} placeholder="Type user's surname" />
                </FormGroup>
                <FormGroup>
                    <Label>E-mail</Label>
                    <input type="email" className="form-control" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} placeholder="Type user's email" />
                </FormGroup>
                <FormGroup>
                    <Label>Phone</Label>
                    <input type="text" className="form-control" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} placeholder="Type user's phone number" />
                </FormGroup>
                <Button type="submit" color="primary">Save</Button>
            </Form>
        )
    }
}
