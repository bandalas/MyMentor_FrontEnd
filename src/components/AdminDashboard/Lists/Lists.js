import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField, BooleanField, EmailField, ReferenceField, ChipField } from 'react-admin';

//Custom field to display tutor name in hyperlink
const FullNameField = ({ record = {} }) => <span>{record.firstName} {record.lastName}</span>;
FullNameField.defaultProps = { label: 'Nombre' };

export const ClassList = props => (
    <List {...props} title="Lista de Clases">
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <ReferenceField source="tutor" reference="admins/tutors">
                <FullNameField/>
            </ReferenceField>
            <NumberField source="tutor_rating" label="Rating"/>
            <BooleanField source="availability" label="Disponibilidad"/>
            <NumberField source="cost" label="Precio"/>
            <TextField source="subject" label="Tema"/>
            <ChipField source="area"/>
            <DateField source="date" label="Fecha"/>
            <TextField source="description" label="Descripción"/>
        </Datagrid>
    </List>
);

export const TutorList = props => (
    <List {...props} title="Lista de Tutores">
        <Datagrid rowClick="edit">
            <TextField source="firstName" label="Nombres"/>
            <TextField source="lastName" label="Apellidos"/>
            <EmailField source="email" />
            <NumberField source="rating"/>
            <TextField source="institution" label="Institución"/>
            <ChipField source="category" label="Categoría"/>
            <NumberField source="semester" label="Semestre"/>
            <NumberField source="gpa" label="Promedio"/>
            <TextField source="description" label="Descripción"/>
            <TextField source="id" />
        </Datagrid>
    </List>
);

export const ReportList = props => (
    <List {...props} title="Reseñas">
        <Datagrid rowClick="edit">
            <TextField source="review" label="Reseña"/>
            <ReferenceField source="tutor" reference="admins/tutors">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="description" label="Descripción"/>
            <TextField source="id" />
        </Datagrid>
    </List>
);