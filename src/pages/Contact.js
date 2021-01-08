import React, {useEffect} from 'react';
import { Col, Container, Row } from 'reactstrap';
import Banner from '../components/Banner';
import BannerBg from '../components/BannerBg';
import Hero from '../components/Hero';
import SidebarItem from '../components/SidebarItem';
import SidebarContact from '../components/SidebarContact';
import { BlogConsumer } from '../context';
import commonBg from '../images/title-section.jpg';
import ContactForm from '../components/ContactForm';


const Contact = () => {
    useEffect(() => {
        window.scroll(0,0);
    }, [])

    return (
        <>
            <Hero hero='single-blog-banner'>
                <BannerBg image={commonBg}><Banner title='Contact Me' /></BannerBg>
            </Hero>
            <div className='py-80'>
                <Container>
                    <Row className='contact'>
                        <Col lg={8}>
                            <div className='google-map mb-5'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.9342255456186!2d90.76713856482314!3d24.136079484400632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375427f478247fb9%3A0x292140c3404f1ca4!2z4Kas4Ka44KeB4Kaw4KeB4Kam4KeN4Kam4Ka_IOCmquCmvuCmsOCmvg!5e1!3m2!1sen!2sbd!4v1609991145938!5m2!1sen!2sbd" width="100%" height="450" aria-hidden="false" title='Google Map'></iframe>
                            </div>
                            <div className='bg-white p-4'><ContactForm /></div>
                        </Col>
                        <Col lg={4}>
                            <div className=''>
                                <div className='side-bar'>
                                    <BlogConsumer>
                                        {({ contacts, socialContacts }) => {
                                            return (
                                                <>
                                                    <SidebarItem title='Contact Info'>
                                                        {contacts.map(contact => <SidebarContact key={contact.title} contact={contact} />)}
                                                    </SidebarItem>
                                                    <SidebarItem title='Social Contacts'>
                                                        {socialContacts.map(contact => <SidebarContact key={contact.title} contact={contact} />)}
                                                    </SidebarItem>
                                                </>
                                            )
                                        }}
                                    </BlogConsumer>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact;
