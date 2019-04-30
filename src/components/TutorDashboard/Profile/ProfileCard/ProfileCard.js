import React, {Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
class ProfileCard extends Component {



 render(){
        return(
            <div className="review-card">
            <div class="picture">
            picture goes here
</div>
            <div class="outer">
                <p>Nombre: {this.props.fistname} {this.props.ln}</p>
                <p>Email: {this.props.email}</p>
                <p>Institucion: {this.props.institution}</p>
                <p>Semestre: {this.props.semester} Estrellas</p>
                <p>Descripcion: {this.props.description}</p>

</div>
<div class="report">
 <Button  color="primary" onClick={this.reportReview}>Cambiar mi informacion</Button>
</div>
</div>
        );
    }


}
export default ProfileCard;
