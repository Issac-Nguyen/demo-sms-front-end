import React from 'react'
import styled from 'styled-components'

interface props {
    fontSize?: string;
    children?: React.ReactNode;
}

const H3 = styled.h3`
    font-family: Nunito Sans;
    font-size: ${(props: props) => props.fontSize || '1.5rem'};
`;

export default (props: props) => (
    <H3>{props.children}</H3>
)