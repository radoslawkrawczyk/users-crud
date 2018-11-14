import React from 'react';
import {Button, Form, FormGroup, Label, } from 'reactstrap';

export default class UsersEdit extends React.Component {
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

    handleChange = (e) => {
        if (this.getId.value < 0) {
            this.getId.value=0;
        }
        fetch("http://localhost:3000/users")
        .then((resp) => resp.json())
        .then(data => {
            data.forEach(element => {
                if (element.id == this.getId.value) {
                    this.setState({id: element.id});
                    this.setState({name: element.name});
                    this.setState({surname: element.surname});
                    this.setState({email: element.email});
                    this.setState({phone: element.phone});

                }

            });
        })
    }


        handleSubmit = (event) => {
            event.preventDefault();

            const data = {
                'name': this.state.name,
                'surname': this.state.surname,
                'email': this.state.email,
                'phone': this.state.phone
            }
    
            this.setState ({
                id: '',
                name: '',
                surname: '',
                email: '',
                phone: ''
            });
            

            const id = this.state.id;
    
            fetch(`http://localhost:3000/users/${id}`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(data)
            }).then(res => res.json())
            
            this.getId.value = '';

    }

    handleDelete = () => {
        const id = this.state.id;
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        }).then(() => {
            this.setState ({
                id: '',
                name: '',
                surname: '',
                email: '',
                phone: ''
            });
            this.getId.value = '';
        })
        
    }

    render() {

        return(
        <div>
            <FormGroup>
            <label>Type user ID</label>
            <input className="form-control" type="number" min="0" ref={(input)=>this.getId = input} onChange={this.handleChange} placeholder="0" />
            </FormGroup>
            <Form onSubmit={this.handleSubmit}>
                    <input type="hidden" value={this.state.id} />
                    <h1>Edit User</h1>
                    <FormGroup>
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={e => this.setState({name: e.target.value})} placeholder="Type user's name" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Surname</Label>
                        <input type="text" className="form-control" value={this.state.surname} onChange={e => this.setState({surname: e.target.value})} placeholder="Type user's surname" />
                    </FormGroup>
                    <FormGroup>
                        <Label>E-mail</Label>
                        <input type="email" className="form-control" value={this.state.email} onChange={e => this.setState({email: e.target.value})} placeholder="Type user's email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone</Label>
                        <input type="text" className="form-control" value={this.state.phone} onChange={e => this.setState({phone: e.target.value})} placeholder="Type user's phone number" />
                    </FormGroup>
                    <Button type="submit" color="primary">Save</Button>
                    <Button type="button" color="danger" onClick={this.handleDelete}>Delete</Button>
                </Form>
        </div>
        );
    }
}
