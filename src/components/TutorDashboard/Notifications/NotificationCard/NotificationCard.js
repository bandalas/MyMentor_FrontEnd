import React, {Component} from 'react';
import '../notifications.css';

class NotificationCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="class-notification">
                <p>{this.props.class_name}</p>
                <p>${this.props.class_price}</p>
                <p>Fecha: {this.props.class_schedule}</p>
            </div>
        );
    }
}
export default NotificationCard;