import React, {Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
class ReviewCard extends Component {



constructor (props){

super(props);

this.reportReview=this.reportReview.bind(this)
}


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
 <Button  color="danger" onClick={this.reportReview}>Reportar</Button>
</div>
</div>
        );
    }




reportReview()
{
        if(window.confirm("Review Reportada")) {
            const id = this.props.id;
            const token = localStorage.getItem('token');
            const headers = {
                headers:{
                    'Content-Type': 'application/json',
                    'x-auth-token' : token 
            }}
            const params = {description: "reeeeeee"} // Gonzalo no mames
            axios.post('http://localhost:3001/tutors/report-review/' + id, params, headers)
                .then(data => {
                    const report = data.data;
                    console.log(report)
                })
                .catch(error => console.log(error));
        }
    }

}
export default ReviewCard;
