import React from 'react'
import styled from 'styled-components'
import Button, {propsButton} from '../button'

interface props{
    position?: string;
    top?: string;
    right?: string;
    width?: string;
    height?: string;
    children?: React.ReactNode;
    closeBtn?: propsButton;
}

const CloseDiv = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    box-sizing: border-box;
    width: 48px;
    height: 48px;
`;

export default (props: props) => (
    <CloseDiv>
        <Button {...props.closeBtn}>{props.children}</Button>
    </CloseDiv>
)