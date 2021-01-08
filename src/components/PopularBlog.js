import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { FaRegUser, FaRegCalendarAlt} from 'react-icons/fa';

const PopularBlog = ({ blog }) => {
    const {title, writer, publishDate, heroImage, slug} = blog;

    return (
        <Col className='slider-item'>
            <div className='popular-blog'>
                <img src={heroImage} alt={title} />
                <div className='blog-content'>
                    <Link to={`/blogs/${slug}`}><h4 className='heading-tertiary' >{title}</h4></Link>
                    <p className='fz-small'>
                        <span className='d-inline-flex align-items-center mr-4'><FaRegUser className='mr-3' /> {writer}</span> 
                        <span className='d-inline-flex align-items-center mr-4'><FaRegCalendarAlt className='mr-3' /> {publishDate}</span> 
                    </p>
                </div>
            </div>
        </Col>
    );
};

export default PopularBlog;
