import React from 'react';
import styled from 'styled-components';
import Reproductor from './Reproductor';

const index = () => {

    return (
        <Wrapper>
            <Reproductor />
            <div className="copyright"><p>&copy; DENIS VALLADARES 2020</p></div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #202020;
    color: #FFF;

    display: flex;
    flex-direction: column;
    align-items: center;

    .copyright {
        padding: 10px 0;
    }
`;

export default index;