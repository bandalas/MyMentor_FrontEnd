import React, { Component } from 'react';

import { fetchUtils, Admin, Resource, ShowGuesser, ListGuesser } from 'react-admin';
import { ClassList, TutorList, ReportList, StudentList, ReviewList } from './Lists/Lists';
import { ReportShow } from './Show/Show';
import jsonServerProvider from 'ra-data-json-server';
import url from '../../Url';

class AdminDashboard extends Component {
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
            
            const token = localStorage.getItem('token');
            options.headers.set('x-auth-token', token);
            return fetchUtils.fetchJson(url, options);
        }

        return jsonServerProvider(url, httpClient);
    }
}


export default AdminDashboard;