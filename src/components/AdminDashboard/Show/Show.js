import React from 'react';

import { Show, SimpleShowLayout, TextField, DateField, EditButton, DeleteButton, ReferenceField } from 'react-admin';
import { FullNameField } from '../Fields/Fields';

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
        <EditButton basePath={basePath} onClick={censorReview} record={data}/>
        <DeleteButton basePath={basePath} record={data}/>
    </CardActions>
);

export const ReportShow = (props) => (
    <Show actions={<ReportShowActions/>} {...props}>
        <SimpleShowLayout>
            <ReferenceField source="review" reference="admins/reviews">
                <TextField source="description" />
            </ReferenceField>
            <ReferenceField source="tutor" reference="admins/tutors">
                <FullNameField />
            </ReferenceField>
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

    
}

