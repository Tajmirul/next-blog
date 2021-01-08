import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap';


const NotFound = () => {
    window.scroll(0, 0);

    return (
        <div className='bg-dark'>
            <Container className='text-center pb-150 pt-200'>
                <p className='not-found-logo text-light mb-3 display-1'>¯\_(ツ)_/¯</p>
                <h3 className='display-3 text-danger'>404</h3>
                <p className='text-light'>Page not Found.</p>
                <Link to='/' className='button button-transparent'>Go To Home</Link>
            </Container>
        </div>
    )
}

export default NotFound
