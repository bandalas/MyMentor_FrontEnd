import React, {Component} from 'react';
import { Button } from 'reactstrap';
import SignupPartOne from './SignupForm/SignupPartOne';

class TutorSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayForm : false
        };
    }

    render() {
        if(!this.state.displayForm) {
            return(
                <div>
                    Aquí van las ventajas y descripción de ser Tutor<br/>
                    <Button color="info" onClick={this.shouldDisplaySignupForm}>Registrate!</Button>
                </div>
            );
        }
        else {
            return(
                <SignupPartOne handleForm={this.shouldDisplaySignupForm}/>
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