import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, DeleteButton, RichTextField } from 'react-admin';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const ReportShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <Button color="primary" onClick={deleteReview}>Regresar</Button>
        <EditButton basePath={basePath} record={data}/>
        <DeleteButton basePath={basePath} record={data}/>
    </CardActions>
);

export const ReportShow = (props) => (
    <Show actions={<ReportShowActions/>} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="review" />
            <TextField source="tutor" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

function deleteReview() {

}