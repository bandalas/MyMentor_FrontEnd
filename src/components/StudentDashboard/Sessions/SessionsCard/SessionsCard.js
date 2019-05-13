import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import url from '../../../../Url';
class SessionsCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
          date: '',
          time: '',
          cancel: false,
          review: false,
          stars: 0,
          comment: ''
        };
        //Logic
        this.convertDateTimeFormat = this.convertDateTimeFormat.bind(this);
        this.handleShowCancelModal = this.handleShowCancelModal.bind(this);
        this.handleHideCancelModal = this.handleHideCancelModal.bind(this);
        this.handleShowReviewModal = this.handleShowReviewModal.bind(this);
        this.handleHideReviewModal = this.handleHideReviewModal.bind(this);
        // Views
        this.renderButtons = this.renderButtons.bind(this);
        this.renderCancelModal = this.renderCancelModal.bind(this);
        this.renderReviewModal = this.renderReviewModal.bind(this);
        // API
        this.cancelBooking = this.cancelBooking.bind(this);
        this.createReview = this.createReview.bind(this);
        // Input
        this.changeRating = this.changeRating.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
    }

    componentDidMount() {
        this.convertDateTimeFormat();
    }

    render(){
        return(
            <div className="booking-card">
                {this.renderCancelModal()}
                {this.renderReviewModal()}
                <Row>
                    <Col sm={7}>
                        <p><b>Clase: </b>{this.props.name}</p>
                        <p><b>Materia: </b>{this.props.subject}</p>
                        <p><b>Fecha y hora: </b>{this.state.date} @ {this.state.time}</p>
                    </Col>
                    <Col sm={5} className="m-auto px-3">
                        {this.renderButtons()}
                    </Col>
                </Row>
                <hr></hr>
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
    // Open modal
    handleShowCancelModal() {
        this.setState({
            cancel: true
        })
    }
    // Hide modal
    handleHideCancelModal(){
        this.setState({
            cancel: false
        })
    }
    // Open review modal
    handleShowReviewModal() {
        this.setState({
            review: true
        })
    }
    // Hide reviw modal
    handleHideReviewModal(){
        this.setState({
            review: false
        })
    }
    changeRating(newRating) {
        this.setState({
          stars: newRating
        });
    }
    onCommentChange(e) {
        this.setState({
            comment: e.target.value
        })
    }
    
    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle view
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    renderButtons() {
        if(this.props.status === 'Upcoming') {
            return (
                <div>
                    <Button variant="outline-danger" onClick={this.handleShowCancelModal}>Cancelar</Button>
                </div>
            );
        }
        else if(this.props.status === 'Past') {
            return (
                <div>
                    <Button variant="outline-success" onClick={this.handleShowReviewModal}>Dejar Review</Button>
                </div>
            );
        }
    }
    
    renderCancelModal() {
        return(
            <Modal show={this.state.cancel} onHide={this.handleHideCancelModal}>
                <Modal.Header closeButton>
                <Modal.Title>Cancelar Reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body>Estas a punto de cancelar esta reservación.{<br/>}¿Estás seguro que deseas continuar?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleHideCancelModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={this.cancelBooking}>
                    Cancelar
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    renderReviewModal() {
        return(
            <Modal show={this.state.review} onHide={this.handleHideReviewModal}>
                <Modal.Header closeButton>
                <Modal.Title>Dejar Reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="average">
                        <Form.Label>Comentario</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.onCommentChange}/>
                        <Form.Label>Calificación general</Form.Label>
                        <Form.Text className="text-muted">
                            ¿Cómo calificarías tu experiencía?
                        </Form.Text>
                        <div className="d-flex justify-content-center">
                            <StarRatings
                                rating={this.state.stars}
                                starHoverColor='rgb(135,206,250)'
                                starRatedColor='rgb(255,223,0)'
                                starDimension="40px"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                            />
                        </div>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleHideReviewModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={this.createReview}>
                    Aceptar
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle API interactions
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    cancelBooking() {
        const token = localStorage.getItem('token');
        const config = {
            headers : {
                'x-auth-token' : token 
            }
        }
        const URL = url + '/students/booking/' + this.props.id;
        axios.put(URL, {}, config)
            .then(data => {
                this.handleHideCancelModal();
                this.props.refresh(true);
            })
            .catch(e => console.log(e))
    }

    createReview() {
        const token = localStorage.getItem('token');
        const config = {
            headers : {
                'x-auth-token' : token 
            }
        }
        const URL = url + '/students/new-review/' + this.props.class;
        const data = {
            comment: this.state.comment,
            stars: this.state.stars
        }
        axios.post(URL, data, config)
         .then(data => {
             this.handleHideReviewModal();
         })
         .catch(e =>{
             console.log(e);
         })
    }
}
export default SessionsCard;