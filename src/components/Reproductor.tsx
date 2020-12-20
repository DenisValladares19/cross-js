import React from 'react';
import Controls from './Controls';
import styled from 'styled-components';
import Icon from '../icon.svg';

const Reproductor = () => {

    // https://www.youtube.com/watch?v=nWF6gmcatNQ&pbjreload=101
    return (
        <WrapperReproductor>
            <h1 className='titulo'><img src={Icon} alt=""/> CROSS JS</h1>
            <div>
            <h1>Reproductor</h1>
            </div>
            <Controls />
        </WrapperReproductor>
    )
}

const WrapperReproductor = styled.div`
    width: 50%;
    height: 75%;

    margin: auto 0;
    padding: 50px;
    background-color: #2C2C2C;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 40px;

    .titulo {
        width: 100%;
        display: flex;
        align-items: flex-end;

        img {
            margin-right: 5px;
        }
    }
`;

export default Reproductor;