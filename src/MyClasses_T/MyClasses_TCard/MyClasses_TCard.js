import React, {Component} from 'react';
class MyClasses_TCard extends Component {
    render(){
        return(
            <div className="classes-card">
                <p>Nombre:{this.props.name}</p>
                <p>Area:{this.props.area}</p>
                <p>Subject:{this.props.subject}</p>
                <p>Description:{this.props.description}</p>
                <p>Fecha:{this.props.date}</p>
                <p>Costo:{this.props.cost}</p>

            </div>
        );
    }
}
export default MyClasses_TCard;
