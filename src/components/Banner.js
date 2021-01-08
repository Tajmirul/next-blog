import React from 'react';


const Banner = ({ children, title, writer, publishDate }) => {
    if (!title && !writer && !publishDate) {
        return (
            <div className='d-flex flex-column align-items-center justify-content-center text-center' style={{ height: '40rem' }}>
                <div className='w-100' style={{ maxWidth: '41rem' }}>{children}</div>
            </div>
        )
    }

    return (
        <div className='d-flex flex-column align-items-center justify-content-center text-center' style={{ height: '40rem' }}>
            <div style={{ maxWidth: '80rem' }}>
                <h2 className='heading-primary mb-4'>{title}</h2>
                <h5>{writer} {publishDate && `&nbsp;-&nbsp; ${publishDate}`}</h5>
            </div>
        </div>
    )
}

export default Banner
