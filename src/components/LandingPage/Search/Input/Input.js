import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onChange = this.onChange.bind(this);
    }

    render() {
      return(
        <input type="text" class="form-control" placeholder="Buscar clases..." onChange={this.onChange}/>
      );
    }

    onChange(event) {
      var input = {};
      input[this.props.name] = event.target.value;
      this.props.handleInputChange({name: this.props.name, value: event.target.value});
    }
}

export default Input;