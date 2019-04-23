import React, {Component} from 'react';
import { Button } from 'reactstrap';
class ReviewCard extends Component {
    render(){
        return(
            <div className="review-card">
            <div class="picture">
            picture goes here
</div>
            <div class="outer">
                <p>Review por: {this.props.student}</p>
                <p>Materia: {this.props.class}</p>
                <p>Comentario: {this.props.comment}</p>
                <p>Rating: {this.props.stars} Estrellas</p>
                <p>Fecha: {this.props.date}</p>

</div>
<div class="report">
 <Button  color="danger" >Reportar</Button>
</div>
</div>
        );
    }
}
export default ReviewCard;
