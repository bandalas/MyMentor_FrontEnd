import React, {Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import './profilecard.css';
class ProfileCard extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <div className="review-card">
                    <h4 id="jumboh1" className="jumbo">Mi Perfil</h4>
                <div className="picture">
                    picture goes here
                </div>
            <div className="outer">
                <p>Nombre: {this.props.firstName} {this.props.lastName}</p>
                <p>Email: {this.props.email}</p>
                <p>Institucion: {this.props.institution}</p>
                <p>Semestre: {this.props.semester} Estrellas</p>
                <p>Descripcion: {this.props.description}</p>
            </div>
                {/* <div className="report">
                    <Button color="primary" onClick={this.reportReview}>Cambiar mi informacion</Button>
                </div> */}
            </div>
        );
    }
}
export default ProfileCard;
