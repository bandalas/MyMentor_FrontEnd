import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Accepted from './Accepted/Accepted';
import Cancelled from './Cancelled/Cancelled';

class Bookings extends Component {
    
    render() {
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/tutor/bookings/accepted">Aceptadas</Link> 
                        </li>
                        <li>
                            <Link to="/tutor/bookings/cancelled">Canceladas</Link>
                         </li>
                    </ul>
                    <Switch> 
                        <Route  path="/tutor/bookings/accepted"
                                    render = {
                                        (props) => <Accepted {...props} token={this.props.token} />
                                    }
                                    exact/> 
                        <Route  path="/tutor/bookings/cancelled"
                                    render = {
                                        (props) => <Cancelled {...props} token={this.props.token} />
                                    }
                                    exact/> 
                    </Switch>
                    
                </div>
            </BrowserRouter>
            
        );
    }
}
export default Bookings;