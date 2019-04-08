import React, {Component} from 'react';

class NotificationCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>{this.props.class_name}</p>
                <p>{this.props.class_price}</p>
                <p>{this.props.class_schedule}</p>
            </div>
        );
    }
}
export default NotificationCard;