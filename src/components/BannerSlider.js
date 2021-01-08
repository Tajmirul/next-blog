import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import BannerBg from './BannerBg';


const BannerSlider = ({ recentBlogs }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings} className='banner-slider' >
                {recentBlogs.map(blog => {
                    const {id, title, writer, heroImage, publishDate, slug} = blog;

                    return (
                        <BannerBg key={id} image={heroImage} className='slider-item'>
                            <Container className='h-100 d-flex align-items-center '>
                                <div className='text-center mx-auto' style={{maxWidth: '80rem'}}>
                                    <p className='fz-normal font-weight-medium'>{writer}</p>
                                    <h2 className='heading-primary my-3'>{title}</h2>
                                    <p className='fz-normal'>{publishDate}</p>

                                    <Link to={`/blogs/${slug}`} className='button button-transparent mt-3'>CONTINUE READING</Link>
                                </div>
                            </Container>
                        </BannerBg>
                    );
                })}
            </Slider>
        </>
    );
};

export default BannerSlider;
