import React from 'react'
import styled from 'styled-components';

interface props {
    color?: string;
    fontWeight?: number;
    children: React.ReactNode;
}

const Span = styled.span`
    color: ${(props: props) => props.color || 'inherit'};
    font-weight: ${(props: props) => props.fontWeight || 500}
`

export default (props: props) => (
    <Span {...props}>{props.children}</Span>
)