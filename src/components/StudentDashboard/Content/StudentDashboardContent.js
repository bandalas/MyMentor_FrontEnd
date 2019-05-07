import React, {Component} from 'react';
import MentorSection from '../Mentor/MentorSection/MentorSection';
import ClassSection from '../Classes/ClassSection/ClassSection';

class StudentDashboardContent extends Component {
    render(){
        return(
            <div>
                <MentorSection/>
                <ClassSection/>
            </div>
        );
    }
}
export default StudentDashboardContent;