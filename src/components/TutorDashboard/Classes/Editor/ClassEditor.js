import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './ClassCard.css'

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
            <Card className="tutor-class" id={this.props.id}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                  <p><b>Materia:</b> {this.props.subject}</p>
                  <p><b>Descripción:</b> {this.props.description}</p>
                  <p><b>Fecha:</b> {this.state.date}</p>
                  <p><b>Hora:</b> {this.state.time} hrs.</p>
                </Card.Text>
                <Button variant='info'>Editar</Button>
                <Button variant='danger' onClick={this.cancelCurrentClass}>Cancelar</Button>
              </Card.Body>
            </Card>
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
    cancelCurrentClass(event) {
        if(window.confirm("Está seguro que desea cancelar la clase?")) {
            const id = this.props.id;
            const url = 'https://young-fortress-54541.herokuapp.com/tutors/cancel-class/' + id
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'x-auth-token' : token 
            };
            // Since it's a put method, it expects a change in the second parameter
            axios.put(url, { } ,{headers})
                .then( response => {
                    this.props.deleteCard(this.props.id);
                    console.log(response);
                })
                .catch( error => {
                    console.log(error);
                });
        }
    }
}
export default ClassEditor;