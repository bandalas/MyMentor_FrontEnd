import React, { Component } from 'react';
import Search from '../LandingPage/Search/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Navigation/NavBar';
import MentorByRating from './Mentor/MentorSearch/MentorByRating';
import StudentDashboardContent from './Content/StudentDashboardContent';
import { logout } from '../Auth/Auth';
import SessionsSection from './Sessions/SessionsSection';
import logo from '../../img/logo.png'
import Carousel from 'react-bootstrap/Carousel'
import Car1 from '../../img/testimonio/armando.jpg'
import Car2 from '../../img/testimonio/david.jpeg'
import Car3 from '../../img/testimonio/diego.jpg'
import Car4 from '../../img/testimonio/mariana.jpg'
import '../StudentDashboard/StudentDashboard.css'
import { Jumbotron } from 'react-bootstrap';

class StudentDashboard extends Component{
    
    constructor(props) {
       super(props);
       // Functions that will handle the view
       this.renderNavigation = this.renderNavigation.bind(this);
    }

    render() {
        return(
            <div>
                <div id='student-navigation'> 
                   {this.renderNavigation()}
                </div>
                
                <div>
                    <div className="head_intro_dashboard">
                        <img id="log_dashboard" src={logo} alt="imagen del logotipo"></img>
                        <h4>Aprende con </h4>
                        <h4 id="slogan_1">alguien como tu</h4>
                    </div>

                    {/* <Jumbotron id="jmb">
                        <h5>Lo que nuestros alumnos opinan</h5>
                        <p>Tambien puedes ser parte de uestra comunidad</p>
                    </Jumbotron> */}

                    {/* <ClassCarousel/> */}
                    {/* <div className="car-student"> */}
                        {/* <Carousel> */}
                            {/* <Carousel.Item> */}
                                {/* Imagen */}
                                {/* <img className="d-block w-100" src={Car1} alt="First slide"/> */}
                                {/* <Carousel.Caption> */}
                                    {/* Parrafo */}
                                    {/* <h5>Diego Juárez Gómez</h5> */}
                                    {/* <p>“Es una gran plataforma con la que puedes aprender todo eso que no entiendes con tus maestros en el salón de clases, sin duda aprendes con alguien como tú y que te entiende. Si quieres pasar tus exámenes esta es la opción!!”</p> */}
                                {/* </Carousel.Caption> */}
                            {/* </Carousel.Item> */}

                            {/* <Carousel.Item> */}
                                {/* Imagen */}
                                {/* <img className="d-block w-100" src={Car2} alt="Second slide"/> */}
                                {/* <Carousel.Caption> */}
                                    {/* Parrafo */}
                                    {/* <h5>David Radamés</h5> */}
                                    {/* <p>“Uno de sus mentores me ayudó a aprobar mi examen final de estadística, me explicó muy bien con ejercicios. Recomiendo mucho MyMentor y sus mentores.”</p> */}
                                {/* </Carousel.Caption> */}
                            {/* </Carousel.Item> */}

                            {/* <Carousel.Item> */}
                                {/* Imagen */}
                                {/* <img className="d-block w-100" src={Car3} alt="Third slide"/> */}
                                {/* <Carousel.Caption> */}
                                    {/* Parrafo */}
                                    {/* <h5>Armando Gomez</h5> */}
                                    {/* <p>“Tomé clases de inglés con uno de sus mentores y aprendí muchísimo, me ayudó más tomar una clase con un alumno que ir a cursos de inglés en una escuela.”</p> */}
                                {/* </Carousel.Caption> */}
                            {/* </Carousel.Item> */}

                            {/* <Carousel.Item> */}
                                {/* Imagen */}
                                {/* <img className="d-block w-100" src={Car4} alt="Fourth slide"/> */}
                                {/* <Carousel.Caption> */}
                                    {/* Parrafo */}
                                    {/* <h5>Mariana Ruiz</h5> */}
                                    {/* <p>“Me dio mucha seguridad y confianza tomar asesorías con alguien de mi universiad ya que fue dentro de las intalaciones y definitivamente aprendí ya que aprobé mi examen de programación."</p> */}
                                {/* </Carousel.Caption> */}
                            {/* </Carousel.Item> */}
                        {/* </Carousel> */}
                    {/* </div> */}
    
                </div>
               
            </div>
        );
    }

    renderNavigation() {
        return(
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route path="/student/search/mentor" component={MentorByRating}/>
                        <Route path="/student/dashboard" component={StudentDashboardContent}/>
                        <Route path="/student/sessions" component={SessionsSection}/>
                        <Route path="/logout" render={logout}/>
                        <Route path="/search" component={Search} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default StudentDashboard;
