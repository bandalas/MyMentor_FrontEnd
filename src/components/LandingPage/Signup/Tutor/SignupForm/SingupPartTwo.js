import React, {Component} from 'react';
import { FormGroup, Form, Col } from 'react-bootstrap';
import { Button, Input } from 'reactstrap';
class SignupPartTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            didChange: false
        };
        this.doSomeTesting = this.doSomeTesting.bind(this);
    }

    render() {
        console.log(this.state.didChange);
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
                    <Form.Label>Área de expertis</Form.Label>
                </Col>
                <Col>
                    <Input  type = "select"
                            multiple>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
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

    handleSignupSequence = () => {
        this.setState({
            didChange : true
        });
        console.log('change!');
    }

    doSomeTesting() {
        const img = this.fileName;
        const aiuda = img.files[0];
        console.log(img);
        console.log(aiuda);
    }



}

export default SignupPartTwo;