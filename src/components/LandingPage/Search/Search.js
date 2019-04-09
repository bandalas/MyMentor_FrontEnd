import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import StarRatings from 'react-star-ratings';
import Input from './Input/Input'

import './searches.css'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: false,
          name: '',
          area: '',
          subject: '',
          cost: '',
          average: '',
          results: [],
          showModal: false,
          stars: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }

    render() {
      return (
        <div class="search-form">
          <div class="row">
            <div class="col-md-12">
              <div class="input-group" id="adv-search">
                  <Input name="name" handleInputChange={this.handleInputChange}></Input>
                  <div class="input-group-btn">
                      <Button variant="outline-info" onClick={this.handleShowModal}>
                        Filtros
                      </Button>

                      <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>Filtros de Búsqueda</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group controlId="name">
                              <Form.Label>Nombre de Clase</Form.Label>
                              <InputGroup>
                                <InputGroup.Prepend>
                                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <Form.Control placeholder="Alemán 1" onInput={this.handleFormInput}/>
                              </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="area">
                              <Form.Label>Area</Form.Label>
                              <InputGroup>
                                <InputGroup.Prepend>
                                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <Form.Control placeholder="Lenguas" onInput={this.handleFormInput}/>
                              </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="subject">
                              <Form.Label>Tema</Form.Label>
                              <InputGroup>
                                <InputGroup.Prepend>
                                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <Form.Control placeholder="Idiomas" onInput={this.handleFormInput}/>
                              </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="cost">
                              <Form.Label>Precio</Form.Label>
                              <InputGroup>
                                <InputGroup.Prepend>
                                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                  <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="number" placeholder="50" onInput={this.handleFormInput}/>
                                <InputGroup.Append>
                                  <InputGroup.Text>por hora</InputGroup.Text>
                                </InputGroup.Append>
                              </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="average">
                              <Form.Label>Promedio de reseñas</Form.Label>
                              <div className="d-flex justify-content-center">
                                <StarRatings
                                  rating={this.state.stars}
                                  starHoverColor='rgb(135,206,250)'
                                  starRatedColor='rgb(255,223,0)'
                                  starDimension="40px"
                                  changeRating={this.changeRating}
                                  numberOfStars={5}
                                  name='rating'
                                />
                              </div>
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button id="dismiss-filters" variant="secondary" onClick={this.handleCloseModal}>
                            Nvm
                          </Button>
                          <Button id="update-filters" variant="primary" onClick={this.handleCloseModal}>
                            Buscar
                          </Button>
                        </Modal.Footer>
                      </Modal>
                  </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
              <div class="col-lg-12">
                  <table class="table" id="table">
                      <thead>
                          <tr>
                              <th>Nombre</th>
                              <th>Tema</th>
                              <th>Precio</th>
                              <th>Tutor</th>
                          </tr>
                      </thead>
                      <tbody>
                        {this.state.results.map((result) =>
                          <tr>
                              <td>{result.name}</td>
                              <td>{result.subject}</td>
                              <td>$ {result.cost}</td>
                              <td>{result.tutor}</td>
                          </tr>
                        )}
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
      );
    }

    handleCloseModal(event) {
      if(event && event.target.id === "update-filters") {
        let inputs = document.getElementsByClassName("input-group");
        let anyChecked = false;
        // Get text filters
        for (var i = 1; i < inputs.length; i++) {
          let isChecked = inputs[i].getElementsByClassName("input-group-text")[0].children[0].checked;
          let input = inputs[i].children[1];
          if(isChecked) {
            anyChecked = true;
            this.state[input.id] = input.value;
          }
          else {
            this.state[input.id] = "";
          }
        }
        // Get star filter
        let stars = parseInt(document.getElementsByClassName("star-ratings")[0].title);
        if(stars > 0) {
          anyChecked = true;
          this.state["average"] = stars;
        }
        else {
          this.state["average"] = "";
        }

        if(anyChecked) {
          this.performPostAction();
        }
      }
      this.setState({ showModal: false });
    }

    handleShowModal() {
      this.setState({ showModal: true, stars: 0 });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.performPostAction();
    }

    handleInputChange(input) {
      console.log(input)
        this.state[input.name] = input.value; // setState doesnt work until second search :/
        console.log(this.state.name)
        if (this.state.name.length !== "") {
          this.performPostAction();
        }
        console.log(this.state.results);
    }

    handleFormInput(event) {
      let input = event.target.parentElement.getElementsByClassName("input-group-text")[0];
      let checkbox = input.children[0];
      checkbox.checked = event.target.value.length != ""
    }

    changeRating( newRating, name ) {
      this.setState({
        stars: newRating
      });
    }

    performPostAction(){
        let data = {
            'name' : this.state.name,
            'area' : this.state.area,
            'subject' : this.state.subject,
            'cost' : this.state.cost,
            'average' : this.state.average
        };

        axios.post('http://localhost:3001/search/class', data)
        .then((data) => {
          this.setState({
            results: data.data
          })
        })
        .catch(() => this.setState({ error: true }))
    }

}

export default Search;