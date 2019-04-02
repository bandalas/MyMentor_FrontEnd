// import React, {Component} from 'react';
// import MentorSection from '../Mentor/MentorSection/MentorSection';
// import ClassSection from '../Classes/ClassSection/ClassSection';

// class StudentDashboardContent extends Component {
//     render(){
//         return(
//             <div>
//                 <MentorSection token={this.props.token} />
//                 <ClassSection token={this.props.token} />
//             </div>
//         );
//     }
// }
// export default StudentDashboardContent;

import React, {Component} from 'react';
import MyClasses from '../MyClasses/MyClasses'


class TutorDashboardContent extends Component {
    render(){
        return(
            <div>
                <MyClasses token={this.props.token}/>
            </div>
        );
    }
}
export default TutorDashboardContent;