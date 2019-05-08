import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col, Button, ButtonToolbar} from 'react-bootstrap';
import '../landing.css'
import imgApp from '../../../img/app.png'
import imgNosotros from '../../../img/nosotros.png'
import paso1 from '../../../img/paso1.png'
import paso2 from '../../../img/paso2.png'
import paso3 from '../../../img/paso3.png'
import paso4 from '../../../img/paso4.png'
import paso5 from '../../../img/paso5.png'
import paso6 from '../../../img/paso6.png'
import imgApple from '../../../img/apple.png'
import imgAndroid from '../../../img/android.png'
import imgLogo from '../../../img/logo.png'


class Content extends Component {
    render() {
        return(
            <div className="conts">
                {/* This is the content of the landing page. */}
                <Container>
                    <Row id="intro">
                        <Col>
                            <div className="head_intro">
                                <img id="log" src={imgLogo} alt="imagen del logotipo"></img>
                                <h2>Aprende con </h2>
                                <h2>alguien como tu</h2>
                                <p>Aprende con alguien que te entiende.</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img id="img_App" src={imgApp} alt="imagen de la app"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Seccion 2 */}
                <Jumbotron id="jmb">
                    <h2>¿Por qué somos la mejor opción?</h2>
                </Jumbotron>
               <Container>
                   <Row id="intro">
                       <Col>
                            <div>
                                <h4>Seguridad</h4>
                                <p>Todos nuestros mentores son alumnos de tu universidad, no te debes de preocupar por traslados y mentores desconocidos.</p>
                            </div>
                       </Col>
                       <Col>
                            <div>
                                <h4>Aprendes porque aprendes</h4>
                                <p>Estudios demuestran que el mejor método de aprendizaje es con otro alumno.</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4>Precios accesibles</h4>
                                <p>La forma más sencilla y rentable de aprender con alumnos sobresalientes de tu universidad.</p>
                            </div>
                        </Col>
                   </Row>
               </Container>

               {/* Seccion 3 */}
               <Container>
                   <Row id="intro">
                        <Col>
                            <div>
                                <img id="description_img" src={imgNosotros} alt="Imagen especial descriptiva"></img>
                            </div>
                        </Col>
                        <Col id="pad_col">
                            <div class="description_content">
                                <h2>Clases que se adaptan a tu forma de aprender</h2>
                                <p>Nuestra principal misión es que seas un alumno de excelencia, es por eso que decidimos crear MyMentor, una plataforma que te ayuda a mejorar tu rendimiento académico con ayuda de <b>alumnos sobresalientes</b> en sus campos, para que así puedas tener un apoyo académico de todo tipo, desde resolver dudas con tareas, preparación para exámenes y regularizaciones.</p>
                            </div>
                        </Col>
                   </Row>
               </Container>

               {/* Seccion 4 */}
               <Container>
                   <Row id="intro2">
                        <div className="head1">
                            <h2>¿Cómo funciona?</h2>
                        </div>
                   </Row>
                   <Row id="intro">
                       <Col>
                            <div>
                                <img className="single-feature" src={paso1}></img>
                                <p>Manda un mensaje solicitando la clase que buscas.</p>
                            </div>
                       </Col>
                       <Col>
                            <div>
                                <img className="single-feature" src={paso2}></img>
                                <p>Escoge al mentor que prefieras de nuestra lista de mentores.</p>
                            </div>
                       </Col>
                       <Col>
                            <div>
                                <img className="single-feature" src={paso3}></img>
                                <p>Confirma la clase, acordando fecha y horario.</p>
                            </div>
                       </Col>
                       <Col>
                            <div>
                                <img className="single-feature" src={paso4}></img>
                                <p>Recibe tu clase.</p>
                            </div>
                       </Col>
                       <Col>
                            <div>
                                <img className="single-feature" src={paso5}></img>
                                <p>Realiza tu pago al mentor.</p>
                            </div>
                       </Col>
                       <Col>
                            <div>
                                <img className="single-feature" src={paso6}></img>
                                <p>Evalúa a tu mentor para ayudar a próximos alumnos.</p>
                            </div>
                       </Col>
                   </Row>
               </Container>

               {/* Seccion 5 */}
               <Jumbotron id="jmb_2">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="jh2">¿Necesitas un mentor?</h2>
                                <p className="jh2">Descubre el poder de buscar. Escríbenos en WhatsApp: +5215611705906.</p>
                            </Col>
                            <Col>
                                <Button variant="outline-light" href="https://api.whatsapp.com/send?phone=5215611705906&text=Me%20interesa%20tomar%20una%20clase"> Abrir chat </Button>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <br/>
                <Jumbotron id="jmb_3">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="jh2">¿Quieres ser mentor?</h2>
                                <p className="jh2">Con MyMentor solo te preocupas por enseñar, nosotros encontramos a los alumnos.</p>
                            </Col>
                            <Col>
                                <Button variant="outline-primary" href="/tutors">Registrate</Button>
                            </Col>
                        </Row>
                    </Container>
                        {/* Boton para ir a registro de mentores */}
                </Jumbotron>

                {/* Seccion 6 */}
                <Container>
                    <Row id="intro">
                        <div className="head1">
                            <h2>Próximamente en</h2>
                            <div class="line-shape"></div>
                        </div>
                    </Row>
                    <Row id="intro">
                        <Col>
                            <img className="imgPhones" src={imgApple}alt=""></img>
                            <h4>App Store</h4>
                        </Col>
                        <Col>
                            <img className="imgPhones" src={imgAndroid} alt=""></img>
                            <h4>Google Play</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Content;