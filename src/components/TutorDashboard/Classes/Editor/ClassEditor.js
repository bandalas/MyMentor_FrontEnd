import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class ClassEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: ''
        }
        this.convertDateTimeFormat = this.convertDateTimeFormat.bind(this);
            // Function that cancels the current selected class
        this.cancelCurrentClass = this.cancelCurrentClass.bind(this);
    }

    componentDidMount() {
        this.convertDateTimeFormat();
    }

    render() {
        return(
            <div className='editor-container'>
                <div className='left'>
                    <h1>{this.props.name}</h1>
                    <p>Materia: {this.props.subject}</p>
                    <p>Descripción: {this.props.description}</p>
                    <p>Fecha: {this.state.date}</p>
                    <p>Hora: {this.state.time} hrs.</p>
                </div>
                <div className='right'>
                    <Button color='info'>Editar</Button>
                    <Button     color='danger'
                        // Function that cancels the current selected class
                                onClick={this.cancelCurrentClass}>Cancelar</Button>
                </div>
            </div>
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle logic 
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Function that will turn the date into readable data
    convertDateTimeFormat() {
        const months_es = ['Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
        'Octubre', 'Noviembre', 'Diciembre'];
        let date = this.props.date;
        date = new Date(date);
        // Setting the date
        const final_date = date.getUTCDate() + ' ' + months_es[date.getUTCMonth()] + ' '+ date.getUTCFullYear();
        // Setting the time
        let minutes = this.appendZerosToTime(date.getMinutes());
        let hour = this.appendZerosToTime(date.getHours());
        const final_time = hour + ':' + minutes;
        // Setting the states with the gotten values
        this.setState({
            date: final_date,
            time: final_time
        });
    }
    // Function that will receive an hour or minute and change its format
    appendZerosToTime = (time) => {
        time = time.toString();
        if(time.length < 2) {
            time = '0' + time;
        }
        return time;
    }
    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle API interactions
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Function that cancels the current selected class
    cancelCurrentClass() {
        const id = this.props.id;
        const url = 'http://localhost:3001/tutors/cancel-class/'+id
        const token = this.props.token;
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        };
        // Since it's a put method, it expects a change in the second parameter
        axios.put(url, { } ,{headers})
            .then( response => {
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            });
    }
}
export default ClassEditor;