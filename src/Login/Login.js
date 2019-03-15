import React, {Component}from 'react';
import axios from 'axios';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostRequest = this.handlePostRequest.bind(this);
    }

    render() {
        return(
            <div className='login-form'>
            <form onSubmit = {this.handleSubmit}>
                <label>Correo Electrónico
                    <input type='email' name='email' onChange={this.handleInputChange}></input>
                </label>
                <label>Contraseña
                    <input type='password' name='password' onChange={this.handleInputChange}></input>
                </label>
                <input type='submit' value='Submit'/>
            </form>
            </div>
        );
    }

    handleInputChange(event) {
        if(event.target.name === 'email') this.setState({email: event.target.value});
        else if(event.target.name === 'password') this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.password);
        console.log(this.state.email);
        this.handlePostRequest();
    }

    handlePostRequest() {
        const serverData = {
            email : this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:3001/auth', serverData, { headers: { 'Content-Type': 'application/json', } })
            .then(response => {
                console.log(response)
            })
            .catch(reason => {
                console.log(reason)
            });
    }
}

export default Login;