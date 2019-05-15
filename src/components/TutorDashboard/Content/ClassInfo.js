import React, {Component} from 'react';
import axios from 'axios';
import url from '../../../Url';

class ClassInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: ''
        }
        this.convertDateTimeFormat = this.convertDateTimeFormat.bind(this);
    }

    componentDidMount() {
        this.convertDateTimeFormat();
    }

    render() {
        return(
            <div style={{backgroundColor:'white'}}>
                <h3>{this.props.name}</h3>
                <h5>{this.state.date} @ {this.state.time}</h5>
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
}
export default ClassInfo;
