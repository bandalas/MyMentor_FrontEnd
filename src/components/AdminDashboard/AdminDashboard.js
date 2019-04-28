import React, { Component } from 'react';

import { fetchUtils, Admin, Resource, ShowGuesser, ListGuesser } from 'react-admin';
import { ClassList, TutorList, ReportList, StudentList, ReviewList } from './Lists/Lists';
import { ReportShow } from './Show/Show';
import jsonServerProvider from 'ra-data-json-server';

class AdminDashboard extends Component {
    
    constructor(props) {
       super(props);

       console.log(props.token);
    }

    render() {
        return (
            <div>
                <Admin dataProvider={this.api()}>
                    <Resource name="admins/classes" list={ClassList} options={{ label: 'Clases' }}/>
                    <Resource name="admins/tutors" list={TutorList} options={{ label: 'Tutores' }}/>
                    <Resource name="admins/students" list={StudentList} options={{ label: 'Estudiantes' }}/>
                    <Resource name="admins/reports" list={ReportList} show={ReportShow} options={{ label: 'Reportes' }}/>
                    <Resource name="admins/reviews" list={ReviewList} options={{ label: 'Reseñas' }}/>
                </Admin>
            </div>
        );
    }

    api() {
        const httpClient = (url, options = {}) => {
            if (!options.headers) {
                options.headers = new Headers({ Accept: 'application/json' });
            }
            // add your own headers here
            options.headers.set('x-auth-token', this.props.token);
            return fetchUtils.fetchJson(url, options);
        }

        return jsonServerProvider('http://localhost:3001', httpClient);
    }
}


export default AdminDashboard;