import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const Topic = ({ topic: { name, image } }) => {
    return (
        <Col className='mb-5'>
            <Link to={`/topics/${name}`}>
                <div className='topic' style={{backgroundColor: 'var(--placeholder-color)'}} >
                    <img src={image} alt={name} />
                    <div className='topic-name'>
                        <h4>{name}</h4>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default Topic
