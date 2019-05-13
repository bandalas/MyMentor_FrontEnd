import React, {Component} from 'react';
import './MentorCard.css'
class MentorCard extends Component {

    render() {
        return(
            <div className='mentor-card-container'>
                <div className='card'>
                {/* <img src={`data:image/png;base64,${this.props.image.data}`} /> */}
                <p className="card-p">{this.props.firstName +' ' + this.props.lastName}</p>
                <p> Estrellas: </p>
                <p>
                    {this.props.rating ? this.props.rating : 'Sin suficientes evaluaciones'}
                </p>
                <p>Descripcion: {this.props.description}</p>
            </div>
        </div>
        );
    }
}
export default MentorCard;