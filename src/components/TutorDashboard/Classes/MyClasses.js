import React, {Component} from 'react';
import { Button } from 'reactstrap';
import CreateClass from './Creation/CreateClass';
import ClassEditor from './Editor/ClassEditor';
import axios from 'axios';

class MyClasses extends Component {

    constructor(props){
        super(props);
        this.state = {
            token : this.props.token,
            id: this.props.id,
            classes: [],
            display: false,
        }
        this.getAllAvailableTutorClass = this.getAllAvailableTutorClass.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.displayAllClasses = this.displayAllClasses.bind(this);
    }

    componentDidMount() {
        this.getAllAvailableTutorClass();
    }

    render(){
        console.log(this.state.classes);
        return(
            <div> 
                <Button color="primary" onClick={this.displayModal}>Crea nueva asesoría</Button>
                {this.displayAllClasses()}
                {/*  
                *    Conditional rendering of modal that will contain the 
                *    necessary form for creating a new class
                */}
                {this.state.display ? <CreateClass token={this.state.token} 
                                                    id={this.state.id}
                                                    unload={this.unloadCreation}/> : null}
            </div>
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle API interactions
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Function that will fetch all available classes from the tutor
    getAllAvailableTutorClass() {
        const token = this.props.token;
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        const url ='http://localhost:3001/tutors/classes';
        axios.get(url, {headers})
            .then(response => {
                const classes = response.data;
                this.setState({
                    classes: classes
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle the view
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Function that will display the modal that contains the form for creating a class
    displayModal() {
        this.setState({
            display: true
        });
    }
    // Function passed to child, that will set the display to false so the modal is no lower showing
    unloadCreation = (value) => {
        this.setState({
            display: value
        });
    }
    // Function that will return the adequate view for loading each class
    displayAllClasses() {
        return(
            <div>
                {this.state.classes.map( current_class => {
                    return (<ClassEditor    key = {current_class._id}
                                            id = {current_class._id}
                                            token = {this.props.token}
                                            name = {current_class.name}
                                            subject = {current_class.subject}
                                            area = {current_class.area}
                                            description = {current_class.description}
                                            date = {current_class.date} />)
                })}
            </div>
        );
    }
}
export default MyClasses;