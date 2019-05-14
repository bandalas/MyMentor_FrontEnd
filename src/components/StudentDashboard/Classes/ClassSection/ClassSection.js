import React, {Component} from 'react';
import axios from 'axios';
import ClassesCard from '../ClassCard/ClassCard';
import '../style.css';
import url from '../../../../Url';

class ClassSection extends Component {

    constructor(props) {
        super(props);
        this.queryNewestClasses = this.queryNewestClasses.bind(this);
        this.state = {
            newestClasses : []
        }
    }

    componentDidMount() {
        this.queryNewestClasses();
    }

    render(){
        return(
            <div className='newest-classes-section'>
                <h1 id="jumboh1" className="jumbo_class">Clases más recientes</h1>
                {this.state.newestClasses.map(new_class => (
                    <ClassesCard    key={new_class._id}
                                    name={new_class.name}
                                    subject={new_class.subject}
                                    area={new_class.area}
                                    description={new_class.description}
                                    date={new_class.date}
                                    cost={new_class.cost}
                                    id = {new_class._id}
                    />
                ))}
            </div>
        );
    }

    queryNewestClasses() {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token' : token 
        }
         axios.get(url + '/students/new-classes', {headers})
            .then(data => {
                const arr = data.data;
                this.setState({
                    newestClasses : arr
                })
            })
            .catch(reason =>{
                console.log(reason);
            });
    }
    
}
export default ClassSection;