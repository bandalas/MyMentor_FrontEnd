import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import StarRatings from 'react-star-ratings';
import Input from './Input/Input'

import './searches.css'
import url from '../../../Url';


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
        // Views
        this.renderFiltersModal = this.renderFiltersModal.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        // Input
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormInput = this.handleFormInput.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }

    render() {
      return (
        <div className="search-form">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group" id="adv-search">
                  <Input name="name" handleInputChange={this.handleInputChange}></Input>
                  <div className="input-group-btn">
                      <Button variant="outline-info" onClick={this.handleShowModal}>
                        Filtros
                      </Button>
                      {this.renderFiltersModal()}
                  </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
              <div className="col-lg-12">
                  <table className="table" id="table">
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

    renderFiltersModal() {
      return(
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
                  Cancelar
                </Button>
                <Button id="update-filters" variant="primary" onClick={this.handleCloseModal}>
                  Buscar
                </Button>
              </Modal.Footer>
            </Modal>
      );
    }


    handleCloseModal(event) {
      if(event && event.target.id === "update-filters") {
        let inputs = document.getElementsByClassName("input-group");
        // Get text filters
        for (var i = 1; i < inputs.length; i++) {
          let isChecked = inputs[i].getElementsByClassName("input-group-text")[0].children[0].checked;
          let input = inputs[i].children[1];

          this.setState({ [input.id] : input.value }, () => {
            if(isChecked) {
              this.performPostAction();
            }
          })
        }

        // Get star filter
        let stars = parseInt(document.getElementsByClassName("star-ratings")[0].title);
        this.setState({ "average" : stars }, () => {
          if(stars > 0) {
            this.performPostAction();
          }
        })
      }
      this.setState({ showModal: false });
    }

    handleShowModal() {
      this.setState({ showModal: true, stars: 0 });
    }

    handleInputChange(input) {
      this.setState({ [input.name] : input.value }, () => {
        if (this.state.name.length !== "") {
          this.performPostAction();
        }
      })
    }

    handleFormInput(event) {
      let input = event.target.parentElement.getElementsByClassName("input-group-text")[0];
      let checkbox = input.children[0];
      checkbox.checked = event.target.value !== ""
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
        axios.post( url +'/api/class', data )
        .then((data) => {
          console.log(data);
          this.setState({
            results: data.data
          })
        })
        .catch(() => this.setState({ error: true }))
    }
}

export default Search;