import React, {Component} from 'react';
import { Button } from 'reactstrap';
import CreateClass from './Creation/CreateClass';
import ClassEditor from './Editor/ClassEditor';
import axios from 'axios';
import url from '../../../Url';
import { throws } from 'assert';
import './myclasses.css';

class MyClasses extends Component {

    constructor(props){
        super(props);
        this.state = {
            classes: [],
            display: false,
            reload: false,
           userInfo: ''
}

        this.getuserInfo = this.getuserInfo.bind(this);
        this.getAllAvailableTutorClass = this.getAllAvailableTutorClass.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.displayAllClasses = this.displayAllClasses.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.shouldReload = this.shouldReload.bind(this);
    }

    componentDidMount() {
        this.getAllAvailableTutorClass();
        this.getuserInfo();
    }

    render() {
        return( 
            <div>
            <div class ="header1">
                    <h1 id="jumboh" className="jumbo">Hola {this.state.userInfo.firstName} ! Estas son tus clases...</h1></div>
            <div class ="createbutton"> 

                <Button color="primary" onClick={this.displayModal}>Crea nueva asesoría</Button>
                

<div class="mx-auto">
{ this.state.classes.length == 0 ? <div class="emptymsg"><h7><p>Nuevo? Crea una clase!</p></h7></div>: <div class="flex-container"> {this.displayAllClasses()} </div>} </div>
                {/*  
                *    Conditional rendering of modal that will contain the 
                *    necessary form for creating a new class
                */}
                {this.state.display ? <CreateClass  unload={this.unloadCreation}
                                                    shouldReload={this.shouldReload}/> : null}
            </div></div>
        );
    }

    /*  *   *   *   *   *   *   *   *   *   *   *   *   *   
    *
    *   Functions that will handle API interactions
    * 
    *   *   *   *   *   *   *   *   *   *   *   *   *   */
    // Function that will fetch all available classes from the tutor
    getAllAvailableTutorClass() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        const URL = url + '/tutors/classes';
        axios.get(URL, {headers})
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
                                            name = {current_class.name}
                                            subject = {current_class.subject}
                                            area = {current_class.area}
                                            description = {current_class.description}
                                            date = {current_class.date}
                                            deleteCard = {this.deleteCard} 
                    />)})
                }
            </div>
        );
    }

    // Removes card element from array
    deleteCard(id) {
        // let array = [...this.state.classes];
        // let index = this.state.classes.findIndex(tutorClass => tutorClass._id === id);
        // array.splice(index, 1)
        // this.setState({
        //     classes: array
        // })
    }

    shouldReload(value) {
        this.setState({
            reload: value
        }, () => {
            if(this.state.reload){ 
                this.getAllAvailableTutorClass();
                this.unloadCreation(false);
            }
        })
    }


    getuserInfo() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
        
        const URL = url + '/tutors/userInfo';
        axios.get(URL, {headers})
            .then(response => {
                const userInfo = response.data[0];
                this.setState({
                    userInfo: userInfo
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

}
export default MyClasses;
