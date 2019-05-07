import React, {Component} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Pending from './Pending/Pending';
import Accepted from './Accepted/Accepted';
import Cancelled from './Cancelled/Cancelled';
import './Bookings.css'

class Bookings extends Component {
    
    render() {
        return(
            <div className="booking-tabs">
                <Tabs defaultActiveKey="pending" id="booking-tabs">
                    <Tab eventKey="pending" title="Pendientes" className="tab">
                        <Pending/>
                    </Tab>
                    <Tab eventKey="accepted" title="Acceptadas" className="tab">
                        <Accepted/>
                    </Tab>
                    <Tab eventKey="cancelled" title="Canceladas" className="tab">
                        <Cancelled/>
                    </Tab>
                </Tabs>                    
            </div>
        );
    }
}
export default Bookings;