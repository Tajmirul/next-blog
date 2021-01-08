import React, { Component } from 'react';
import { Col, Input } from 'reactstrap';
import axios from 'axios';
import { Preloader } from '../images/iconComponents';


class ContactForm extends Component {
    state = {
        data: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        status: '',
        statusMessage: '',
        loading: false,
    };

    changeHandler = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const url = `https://jsonplaceholder.typicode.com/users`;
        this.setState({
            status: null,
            loading: true,
        })

        axios.post(url, this.state.data)
            .then(res => {
                this.setState({
                    status: 'success',
                    statusMessage: 'Message has been send.',
                    data: {
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    },
                    loading: false,
                });
            })
            .catch(error => {
                this.setState({
                    status: 'danger',
                    statusMessage: 'Could not send message.',
                    loading: false,
                });
            })
    }

    toastToggle = () => {
        this.setState({
            toast: true,
        })
    }

    render() {
        const { data: { name, email, subject, message }, status, statusMessage, loading } = this.state;

        return (
            <>
                {status && <p className={`alert alert-${status}`}>{statusMessage}</p>}

                <form className='contact-form row'>
                    <Col className='mb-20' md={6}><Input type='text' name='name' className='fz-normal h-auto shadow-none' placeholder='Name' value={name} onChange={this.changeHandler} /></Col>
                    <Col className='mb-20' md={6}><Input type='email' name='email' className='fz-normal h-auto shadow-none' placeholder='Email' value={email} onChange={this.changeHandler} /></Col>
                    <Col className='mb-20' md={12}><Input type='text' name='subject' className='fz-normal h-auto shadow-none' placeholder='Subject' value={subject} onChange={this.changeHandler} /></Col>
                    <Col className='mb-20' md={12}><Input type='textarea' name='message' className='fz-normal h-auto shadow-none' placeholder='Message' value={message} onChange={this.changeHandler} rows='5' ></Input></Col>
                    <Col md={12} >
                        <button type='submit' className='button button-transparent py-0 d-flex align-items-center' style={{height: '4.3rem'}} data-color='white' onClick={this.submitHandler} >
                            <span className=''>Send Message</span> {loading && <Preloader className='ml-3 fz-large' />}
                        </button>
                    </Col>
                </form>
            </>
        )
    }
}

export default ContactForm;
