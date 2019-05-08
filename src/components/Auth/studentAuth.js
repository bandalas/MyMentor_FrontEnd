import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function studentAuth(ComponentToProtect, tokenAuth) {

    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount(){
            const token = tokenAuth
            if(token) {
                this.setState({
                    loading: false
                });
            }
            else {
                this.setState({
                    loading: false,
                    redirect: true
                });
            }
        }

        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" />;
            }
            return (
                <ComponentToProtect {...this.props} />
            );
        }
    }
}