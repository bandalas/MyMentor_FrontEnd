import React, {Component}from 'react';
import {Form, Button, Col } from 'react-bootstrap';
import {Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { NavLink} from 'react-router-dom';
import NormalForm from './NormalForm.js/NormalForm';
import ErrorForm from './ErrorForm/ErrorForm';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
            wrong_data: false,
            isAuthenticated: false,
            redirect: false,
            type: '',
            token: '',
            id: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.performPostAction = this.performPostAction.bind(this);
    }

    render() {
        const hasError = this.state.wrong_data;
        if(this.state.redirect) {
            if(this.state.type === 'Tutor') {
                this.props.handleLogin({
                    authenticated: true,
                    token: this.state.token,
                    id: this.state.id
                });
            }
            else if (this.state.type === 'Student') {
                return <Redirect to='/student/dashboard' />
            }
        }
        return(
            <div id="login-card">
                <h2>Iniciar sesión</h2>
                <Form onSubmit={this.handleSubmit}>
                        {!hasError ? <NormalForm onInputChange = {this.handleInputChange}/> 
                        : <ErrorForm onInputChange = {this.handleInputChange}/>}
                    
                    <div className="login-buttons">
                        <Col xs="10" className="reset">
                            <NavLink to="/reset">¿Olvidaste tu contraseña?</NavLink>
                        </Col>
                        <Col xs="10">
                            <Button variant="primary" type="submit" className="bttn-full-size">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </div>
                </Form>


            </div>
        );
    }

    handleInputChange(event) {
        if(event.target.name === 'email') this.setState({email: event.target.value});
        if(event.target.name === 'password') this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.performPostAction()
    }

    performPostAction(){
        let data = {
            'email' : this.state.email,
            'password' : this.state.password
        };
        
        axios.post('http://localhost:3001/auth', data)
            .then(value => {
                if(value.data.record_not_found) {
                    this.setState({wrong_data: true})
                }
                else {
                    this.setState({wrong_data: false})
                    const user_type = value.data.type;
                    const token = value.data.token;
                    const id = value.data.user._id;

                    if (user_type === 'Student' || user_type === 'Tutor') {
                        this.setState({
                            type: user_type,
                            redirect: true,
                            isAuthenticated: true,
                            token: token,
                            id: id
                        });
                    }
                }
            })
            .catch(reason => {
            });
    }
}

export default Login;
