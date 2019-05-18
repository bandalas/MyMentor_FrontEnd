import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField, BooleanField, EmailField, ReferenceField, ChipField } from 'react-admin';
import { FullNameField, NameField, ReviewCommentField, StarField } from '../Fields/Fields';

export const ClassList = props => (
    <List {...props} title="Lista de Clases">
        <Datagrid rowClick="show">
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
        <Datagrid rowClick="show">
            <FullNameField/>
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

export const ReviewList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="student" reference="admins/students" label="Estudiante">
                <FullNameField/>
            </ReferenceField>
            <ReferenceField source="tutor" reference="admins/tutors">
                <FullNameField/>
            </ReferenceField>
            <ReferenceField source="class" reference="admins/classes" label="Clase">
                <NameField/>
            </ReferenceField>
            <TextField source="comment" label="Descripción"/>
            <StarField source="stars" label="Rating" />
            <DateField source="date" />
        </Datagrid>
    </List>
);

export const ReportList = props => (
    <List {...props} title="Reportes">
        <Datagrid rowClick="show">
            <ReferenceField source="review" reference="admins/reviews" label="Reseña">
                <ReviewCommentField/>
            </ReferenceField>
            <ReferenceField source="tutor" reference="admins/tutors">
                <FullNameField/>
            </ReferenceField>
            <TextField source="description" label="Descripción"/>
        </Datagrid>
    </List>
);

export const StudentList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <FullNameField/>
            <EmailField source="email" />
            <TextField source="institution" />
            <NumberField source="semester" />
        </Datagrid>
    </List>
);