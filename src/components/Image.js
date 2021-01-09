import React, {useState} from 'react'

const Image = ({children, src, alt, className, style}) => {

    return (
        <div className='image-container'>
            <img src={src} alt={alt} className={className} style={style} />
        </div>
    )
}

export default Image
