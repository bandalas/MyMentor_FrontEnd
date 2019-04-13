import React, {Component} from 'react';
import './MentorCard.css'
class MentorCard extends Component {

    render() {
        return(
            <div className='mentor-card-container'>
                <div className='card'>
                <p className="card-p">{this.props.firstName +' ' + this.props.lastName}</p>
                <p>Estrellas: {this.props.stars}</p>
                <p>Descripcion: {this.props.description}</p>
            </div>
        </div>
            
        );
    }
}
export default MentorCard;