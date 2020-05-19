import React from 'react'
import styled from 'styled-components'

interface props {
    fontSize?: string;
    children?: React.ReactNode;
}

const H4 = styled.h4`
    font-family: Nunito Sans;
    font-size: ${(props: props) => props.fontSize || '1rem'};
`;

export default (props: props) => (
    <H4>{props.children}</H4>
)