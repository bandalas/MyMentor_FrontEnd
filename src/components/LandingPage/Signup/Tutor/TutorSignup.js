import React, {Component} from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignupPartOne from './SignupForm/SignupPartOne';

class TutorSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayForm : false,
            modal: false
        };
    }

    render() {
        if(!this.state.displayForm) {
            return(
                <div>
                    Aquí van las ventajas y descripción de ser Tutor<br/>
                    <Button color="info" onClick={this.shouldDisplaySignupForm}>Registrate</Button>
                </div>
            );
        }
        else {
            return(
                <div>
                    Aquí van las ventajas y descripción de ser Tutor<br/>
                    <Button color="info" onClick={this.shouldDisplaySignupForm}>Registrate</Button>
                    <SignupPartOne/>
                </div>
            );
        }
    }

    shouldDisplaySignupForm = () => {
        this.setState({
            displayForm : !this.state.displayForm
        })
    };
}
export default TutorSignup;