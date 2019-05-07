import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

class ClassCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes : []
        }
        this.queryAllClasses = this.queryAllClasses.bind(this);
    }

    componentDidMount(){
        this.queryAllClasses();
    }

    render(){
        console.log(this.state.classes);
        return(
            <div className='carousel-section'>
                <Carousel>
                    {this.state.classes.map(elem => (
                        <Carousel.Item key={elem._id}>
                            <img />
                            <Carousel.Caption>
                                <h3>{elem.name}</h3>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    }

    queryAllClasses() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
         axios.get('https://young-fortress-54541.herokuapp.com/students/classes', {headers})
            .then(data => {
                const arr = data.data;
                this.setState({
                    classes : arr
                })
            })
            .catch(reason =>{
                console.log(reason);
            });
    }
}
export default ClassCarousel;