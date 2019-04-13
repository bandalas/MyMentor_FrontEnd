import React, {Component} from 'react';
import { FormGroup, Form, Col } from 'react-bootstrap';
import { Button, Input } from 'reactstrap';
class SignupPartTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            didChange: false,
            profilePicture: '',
            areas: [],
            description: ''
        };
        this.doSomeTesting = this.doSomeTesting.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
    }
    
    render() {
        return(
            <FormGroup>
                <Form.Label>
                    Imagen de perfil
                </Form.Label><br/>
                <input  ref = {(ref) => {this.fileName = ref;}}
                        type="file"
                        name="profile-picture"
                        />
                

                <Col>
                    <Form.Label>Área de expertiz</Form.Label>
                </Col>
                <Col>
                    <Input  type = "select"
                            onChange = {this.handleAreaChange}
                            multiple>
                            <option value='Matematicas'>Matemáticas</option>
                            <option value="Quimica">Química</option>
                            <option value="Fisica">Física</option>
                            <option value="Programacion">Programación</option>
                            <option value="Electronica">Electrónica</option>
                            <option value="Economia">Economía</option>
                            <option value="Estadistica">Estadística</option>
                            <option value="Ingles">Inglés</option>
                            <option value="Aleman">Alemán</option>
                            <option value="Frances">Francés</option>
                    </Input>
                </Col>

                <Col>
                    <Form.Label>Descripción</Form.Label>
                </Col>
                <Col>
                    <Input type="textarea"/>
                </Col>
 
                <Button onClick={this.props.returnToFormOne}>Anterior</Button>
                <Button onClick={this.doSomeTesting}>Siguiente</Button>
            </FormGroup>
        );
    }

    /****************************************
    *
    *   Functions that will handle form input
    * 
    *****************************************/

    handleSignupSequence = () => {
        this.setState({
            didChange : true
        });
    }

    handleAreaChange(event) {
        const options = event.target.options;
        var selected = [];
        for(var i = 0 ; i < options.length; i++) {
            if(options[i].selected) {
                selected.push(options[i].value);
            }
        }
        this.setState({
            areas: selected
        });
        console.log(this.state.areas);
    }

    doSomeTesting() {
        const img = this.fileName;
        const aiuda = img.files[0];
        console.log(img);
        console.log(aiuda);
    }

}

export default SignupPartTwo;