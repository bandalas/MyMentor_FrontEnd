import React, {Component} from 'react';
import { Modal, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import url from '../../../../Url';
class ReviewCard extends Component {

    constructor (props){
        super(props);
        this.reportReview=this.reportReview.bind(this)
        this.state = {
            date: '',
            time: '',
            report: false,
            comment: 'report'
        };
        //Logic
        this.convertDateTimeFormat = this.convertDateTimeFormat.bind(this);
        this.renderReportModal = this.renderReportModal.bind(this);
        this.handleShowReport = this.handleShowReport.bind(this);
        this.handleHideReport = this.handleHideReport.bind(this);
    }

    componentDidMount(){
        this.convertDateTimeFormat();
    }
    render(){
        return(
            <div className="review-card">
            {this.renderReportModal()}
            <div className="outer">
                <p>Review por: {this.props.student}</p>
                <p>Clase: {this.props.class}</p>
                <p>Comentario: {this.props.comment}</p>
                <p>Rating: {this.props.stars} Estrellas</p>
                <p>Fecha: {this.state.date}</p>
            </div>
                <div className="report">
                <Button variant="danger" onClick={this.handleShowReport}>Reportar</Button>
                </div>
            </div>
        );
    }

    renderReportModal() {
        return(
            <Modal show={this.state.report} onHide={this.handleHideReport}>
                <Modal.Header closeButton>
                <Modal.Title>Reportar Reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="average">
                        <Form.Label>Motivo de reporte</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.onCommentChange}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleHideReport}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={this.reportReview}>
                    Reportar
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
     // Open review modal
     handleShowReport() {
        this.setState({
            report: true
        })
    }
    // Hide reviw modal
    handleHideReport(){
        this.setState({
            report: false
        })
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
    *   API
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    reportReview()
    {
        
            const id = this.props.id;
            const token = localStorage.getItem('token');
            const headers = {
                headers:{
                    'Content-Type': 'application/json',
                    'x-auth-token' : token 
            }}
            const params = {description: this.state.comment};
            const URL = url + '/tutors/report-review/' + id;
            axios.post(URL, params, headers)
                .then(data => {
                    const report = data.data;
                    this.handleHideReport();
                    window.alert('Reseña reportada con éxito');
                })
                .catch(error => console.log(error));
        
    }

}
export default ReviewCard;
