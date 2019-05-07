import React from 'react';
import { withRouter } from 'react-router';

export function requireAuth(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      if (!localStorage.getItem('token')) {
        //const location = this.props.location;
        //const redirect = location.pathname + location.search;

        this.props.router.push(`/`);
      }
    }

    render() {
      return localStorage.getItem('token') ? <Component { ...this.props } /> : null;
    }

  }

  return withRouter(AuthenticatedComponent);
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    localStorage.removeItem('id');
    window.location.reload();
}