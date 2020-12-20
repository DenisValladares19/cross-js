import React, { useState } from 'react';
import styled from 'styled-components';
import { 
    PauseCircleOutlined, 
    PlayCircleOutlined, 
    StepBackwardOutlined, 
    StepForwardOutlined 
} from '@ant-design/icons';

const Controls = () => {
    const [isPayed, setIsPayed] = useState<Boolean>(true);

    return (
        <WrapperControls>
            <StepBackwardOutlined className='icon' />
            {
                isPayed ? <PlayCircleOutlined className='icon' /> : <PauseCircleOutlined className='icon' />
            }
            <StepForwardOutlined className='icon' />
        </WrapperControls>
    )
}

const WrapperControls = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    
    .icon {
        font-size: 60px;
        cursor: pointer;
        margin: 0px 5px;

        :hover {
            color: #a8a4a4;
        }
    }
`;

export default Controls;