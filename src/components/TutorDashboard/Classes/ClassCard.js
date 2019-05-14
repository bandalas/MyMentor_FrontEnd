import React, {Component} from 'react';
import '../classcard.css';
class ClassesCard extends Component {
    render(){
        return(
            <div className="class-card">
                <p>{this.props.name}</p>
                <p>Materia:{this.props.subject}</p>
                <p>Área:{this.props.area}</p>
                <p>{this.props.description}</p>
                <p>Fecha:{this.props.date}</p>
            </div>
        );
    }
}
export default ClassesCard;
