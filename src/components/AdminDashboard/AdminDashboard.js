import React, { Component } from 'react';

import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import { ClassList, TutorList, ReportList } from './Lists/Lists';
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
                    <Resource name="admins/reports" list={ReportList} options={{ label: 'Reportes' }}/>
                    <Resource name="admins/classes" list={ClassList} options={{ label: 'Clases' }}/>
                    <Resource name="admins/tutors" list={TutorList} options={{ label: 'Tutores' }}/>
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