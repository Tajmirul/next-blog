import React from 'react';
import { Container } from 'reactstrap';


const Error = ({error}) => {
    document.title = 'Request Timeout!';
    console.log(error)

    return (
        <Container className='my-5 text-center'>
            <h3 className='display-4'>{error.message}</h3>
            <p className='fz-large'>Unable to fetch Data</p>
            <button onClick={() => window.location.reload()} className='button button-transparent mt-4' data-color='theme'>Reload the Page</button>
        </Container>
    )
}

export default Error
