import React from 'react';
import { Container } from 'reactstrap';
import Topic from './Topic';
import Slider from 'react-slick';


export const Topics = ({ topics }) => {

    // xs={6} sm={3} md={4}
    const settings = {
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 4000,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    }

    return (
        <>
            <section className='topics mb-50'>
                <Container>
                    <h2 className='section-heading mb-5'><span>Popular Topics</span></h2>
                    <Slider {...settings} className='row slider-3'>
                        {topics.map(topic => <Topic key={topic.name} topic={topic} />)}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Topics;