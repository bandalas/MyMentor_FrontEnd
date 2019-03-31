import React, {Component} from 'react';
class MentorCard extends Component {

    render() {
        return(
            <div className='mentor-card'>
                <p>{this.props.firstName +' ' + this.props.lastName}</p>
                <p>Estrellas: {this.props.stars}</p>
                <p>Descripcion: {this.props.description}</p>
            </div>
        );
    }
}
export default MentorCard;