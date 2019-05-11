import React, {Component} from 'react';
import { Button } from 'reactstrap';
import SignupPartOne from './SignupForm/SignupPartOne';
import { Jumbotron } from 'react-bootstrap';
import './SignupForm/SignupStyle.css';

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
                    <div>                    
                        <Jumbotron id="jubmt">
                            <h1>Quieres ser parte de nuestra comunidad?<br/> Unete!</h1>
                            {/* <p>Aquí van las ventajas y descripción de ser Tutor</p> */}     
                        </Jumbotron>
                    </div>
                    <div id="text_tutor">
                        <p>El ayudar a sus estudiantes a tener éxito es la mejor parte de su trabajo. Al hacer que ellos se apoyen en usted como tutor, y al compartir sus conocimientos con ellos, está haciendo una diferencia en sus vidas y, a su vez, ayudándolos a crecer académicamente.</p>
                        <p>Beneficios de ser tutor:</p>
                        <ol>
                            <li>Mayor visibilidad y más alumnos.</li>
                            <li>Autoempleo e independencia.</li>
                            <li>Sólo te preocupas por enseñar, nosotros hacemos todo lo demás.</li>
                            <li>Incrementa tus ingresos.</li>
                            <li>Cobros seguros de tus clases y pagos cómodos.</li>
                            <li>Clases seguras en lugares seguros</li>
                        </ol>
                    </div>

                    <div className="wrapper">
                        <Button id="btn_register" color="info" onClick={this.shouldDisplaySignupForm}>Registrate</Button>             
                    </div>  
                </div>
            );
        }
        else {
            return(
                <div>
                    <div>                    
                        <Jumbotron id="jubmt">
                            <h1>Quieres ser parte de nuestra comunidad?<br/> Unete!</h1>
                            {/* <p>Aquí van las ventajas y descripción de ser Tutor</p> */}     
                        </Jumbotron>
                    </div>
                    <div id="text_tutor">
                        <p>El ayudar a sus estudiantes a tener éxito es la mejor parte de su trabajo. Al hacer que ellos se apoyen en usted como tutor, y al compartir sus conocimientos con ellos, está haciendo una diferencia en sus vidas y, a su vez, ayudándolos a crecer académicamente.</p>
                        <p>Beneficios de ser tutor:</p>
                        <ol>
                            <li>Mayor visibilidad y más alumnos.</li>
                            <li>Autoempleo e independencia.</li>
                            <li>Sólo te preocupas por enseñar, nosotros hacemos todo lo demás.</li>
                            <li>Incrementa tus ingresos.</li>
                            <li>Cobros seguros de tus clases y pagos cómodos.</li>
                            <li>Clases seguras en lugares seguros</li>
                        </ol>
                    </div>
                    <div className="wrapper">
                        <Button id="btn_register" color="info" onClick={this.shouldDisplaySignupForm}>Registrate</Button>             
                    </div>  
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