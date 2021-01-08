import React from 'react'
// import Banner from './Banner';
import PropTypes from 'prop-types';


const Hero = ({children, hero}) => {
    return (
        <div className={`${hero}`}>
            {children}
        </div>
    );
};

Hero.propTypes = {
    hero: PropTypes.string
}

export default Hero
