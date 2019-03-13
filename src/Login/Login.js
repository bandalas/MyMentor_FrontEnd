import React, {Component}from 'react';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        return(
            <div className='login-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Correo Electronico
                        <input type='email' name='email' onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Contraseña
                        <input type='password' name='password' onChange={this.handleInputChange}/>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }

    handleInputChange(event) {
        if(event.target.name == 'email') this.setState({email: event.target.value});
        if(event.target.name == 'password') this.setState({password: event.target.value});
        console.log(this.state.email, this.state.password);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.performPostAction()

    }

    performPostAction(){
        const data = {
            email : this.state.email,
            password : this.state.password
        };

        axios.post('http://localhost:3001/auth', data)
            .then(value => console.log(value))
            .catch(reason => console.log(reason));
    }
}

export default Login;