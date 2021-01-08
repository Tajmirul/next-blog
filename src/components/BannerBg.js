import styled from 'styled-components';

const BannerBg = styled.div`
    background-image: linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)), url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    & * {
        color: #f2f2f2;
    }
`

export default BannerBg;