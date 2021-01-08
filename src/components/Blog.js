import React from 'react'
import { Col, Row } from 'reactstrap'
import { FaRegUser, FaRegCalendarAlt } from 'react-icons/fa';
import marked from 'marked';
import { Link } from 'react-router-dom';


const Blog = ({ blog }) => {

    const { title, slug, writer, heroImage, description, tags, publishDate } = blog;
    let markedText = marked(description);
    let dots;
    if (markedText.length > 200) {
        dots = '...';
    } else {
        dots = '';
    }
    markedText = markedText.substring(0, 200);

    return (
        <div className='blog mb-5'>
            <Row>
                <Col md={4}>
                    <Link to={`/blogs/${slug}`} className='h-100'>
                        <img src={heroImage} alt={title} className='w-100 h-100' style={{ objectFit: 'cover' }} />
                    </Link>
                </Col>
                <Col md={8} className='d-flex align-items-center'>
                    <div className='mt-3 mt-md-0'>
                        <h6 className='text-uppercase font-weight-medium'><Link to={`/topics/${tags[0]}`}>{tags[0]}</Link> </h6>
                        <h3 className='heading-secondary mb-4 mt-2'><Link to={`/blogs/${slug}`} >{title}</Link></h3>
                        <p className='fz-small'>
                            <span className='d-inline-flex align-items-center'><FaRegUser className='mr-3 fz-large' />{writer}&nbsp; - &nbsp; </span>
                            <span className='d-inline-flex align-items-center'><FaRegCalendarAlt className='mr-3 fz-large' />{publishDate}</span>
                        </p>
                        <p className='fz-normal' dangerouslySetInnerHTML={{ __html: `${markedText} ${dots}` }}></p>
                        <Link to={`/blogs/${slug}`} className='button button-link'>Read More</Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Blog
