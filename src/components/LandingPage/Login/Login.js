import React, {Component}from 'react';
import {Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import './login.css';
import { NavLink} from 'react-router-dom';
import NormalForm from './NormalForm.js/NormalForm';
import ErrorForm from './ErrorForm/ErrorForm';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Data for request
            email : '',
            password: '',
            // Data for view
            wrong_data: false,
            isAuthenticated: false,
            // Data for authentication
            type: '',
            token: '',
            id: ''
        };
        // Functions that handle the view
        this.renderFormBody = this.renderFormBody.bind(this);
        // Functions that will handle the input
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // Functions that will handle API communication
        this.performPostAction = this.performPostAction.bind(this);
    }

    render() {
        if(this.state.isAuthenticated) {
            // If the user is authenticated, we tell the parent so the new view is loaded
            this.props.handleLogin({
                authenticated: true,
                token: this.state.token,
                id: this.state.id,
                type: this.state.type
            });
        }
        return(
            <div id="login-card">
                <h2>Iniciar sesión</h2>
                {this.renderFormBody()}
            </div>
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle the view
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    renderFormBody() {
        const hasError = this.state.wrong_data;
        return(
            <Form onSubmit = {this.handleSubmit}>

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
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle user input
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Sets value of state according to the input
    handleInputChange(event) {
        if(event.target.name === 'email') this.setState({email: event.target.value});
        if(event.target.name === 'password') this.setState({password: event.target.value});
    }
    // Function that will be performed when the form is submitted
    handleSubmit(event) {
        event.preventDefault();
        this.performPostAction()
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle API interactions
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    performPostAction(){
        // Data that will be sent to the request
        let data = {
            'email' : this.state.email,
            'password' : this.state.password
        };
        
        axios.post('http://localhost:3001/auth', data)
            .then(value => {
                // Sets wrong data to true if a record with the data was not found
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
                            isAuthenticated: true,
                            token: token,
                            id: id
                        });
                    }
                }
            })
            .catch(reason => {
                console.log(reason);
            });
    }
}

export default Login;
