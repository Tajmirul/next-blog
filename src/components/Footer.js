import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Col, Container, Row } from 'reactstrap'
import SearchBox from './SearchBox';
import footerSeparator from '../images/bg-divider.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='position-relative'>
                <img src={footerSeparator} alt='' className='footer-separator d-none d-md-block' />
                <Row>
                    <Col md={4}>

                        <h3 className='heading-secondary mb-4'>About Me</h3>

                        <p>An effective short Tinder profile captures her imagination in just a few words, then lets her get back to appreciating your photos. But it is deceptively hard to pull off – fewer words does not equal less work.</p>
                        <div className='social-links' data-align='left'>
                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaFacebookF /></a>
                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaTwitter /></a>
                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><BiWorld /></a>
                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaGithub /></a>
                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaYoutube /></a>
                        </div>
                    </Col>
                    <Col md={4}>
                    </Col>
                    <Col md={4} className='mt-5 mt-md-0'>
                        <h3 className='heading-secondary mb-4'>Subscribe Newsletter</h3>
                        <SearchBox placeholder='Email' inputType='email'>Submit</SearchBox>
                        <p>Dolor eros cubilia velit fusce. Porttitor molestie leo quisque placeat, netus bhger hryyu.</p>
                    </Col>
                </Row>
            </Container>
            <div className='copyright'>
                <p className='mb-0'>Copyright - 2017 Next Blog - HTML Template. Designed by Tajmirul</p>
            </div>
        </footer>
    )
}

export default Footer
