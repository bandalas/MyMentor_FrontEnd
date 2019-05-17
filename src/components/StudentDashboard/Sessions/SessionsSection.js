import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Upcoming from './Upcoming/Upcoming';
import Past from './Past/Past';
class SessionsSection extends Component {
    render() {
        return(
            <div className="booking-tabs">
   <div class ="header1">
                    <h4 id="jumboh1" className="jumbo">Mis Reservas</h4></div>
                <Tabs defaultActiveKey="upcoming" id="booking-tabs">
                    <Tab eventKey="upcoming" title="Futuras" className="tab">
                        <Upcoming/>
                    </Tab>
                    <Tab eventKey="past" title="Pasadas" className="tab">
                        <Past/>
                    </Tab>
                </Tabs>                    
            </div>
        );
    }
}

export default SessionsSection;
