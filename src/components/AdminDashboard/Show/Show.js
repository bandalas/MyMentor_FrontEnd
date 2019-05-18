import React from 'react';
import axios from 'axios';
import { Show, SimpleShowLayout, TextField, DeleteButton, ReferenceField } from 'react-admin';
import Button from '@material-ui/core/Button';
import { FullNameField } from '../Fields/Fields';
import url from '../../../Url';
import CardActions from '@material-ui/core/CardActions';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const ReportShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <DeleteButton basePath={basePath} record={data}/>
        <Button color="primary" onClick={() => censorReview(data)} record={data}>Censurar Review</Button>
    </CardActions>
);

export const ReportShow = (props) => (
    <Show actions={<ReportShowActions/>} {...props}>
        <SimpleShowLayout>
            <ReferenceField source="review" reference="admins/reviews">
                <TextField source="comment" />
            </ReferenceField>
            <ReferenceField source="tutor" reference="admins/tutors">
                <FullNameField />
            </ReferenceField>
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

function censorReview(data) {
        console.log(data)
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token
        }
        const URL = url + '/admins/new-review/' + data.review;
        axios.put(URL, {}, {headers})
            .then(response => {
                console.log(response);
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error);
            })

}
