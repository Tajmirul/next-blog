import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import PopularBlog from './PopularBlog';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'

const PopularBlogs = ({ popularBlogs }) => {

    const settings = {
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        prevArrow: <PrevArrow className="slick-arrow slick-prev" />,
        nextArrow: <NextArrow className="slick-arrow slick-next" />,
        responsive: [
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    }

    return (
        <section className='popular-blogs pb-80'>
            <Container>
                <h2 className='section-heading mb-5'><span>Popular Blogs</span></h2>

                <Slider {...settings} className='row slider-3'>
                    {popularBlogs.map(blog => <PopularBlog key={blog.id} blog={blog} />)}
                </Slider>
            </Container>
        </section>
    );
};

export default PopularBlogs

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <button className={className} style={{ ...style }} onClick={onClick} ><BiRightArrow /></button>
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <button className={className} style={{ ...style }} onClick={onClick} ><BiLeftArrow /></button>
}
