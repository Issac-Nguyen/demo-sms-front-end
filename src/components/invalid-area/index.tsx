import React from 'react';
import styled from 'styled-components';

interface props {
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    width?: string;
    backgroundColor?: string;
    color?: string;
    show?: boolean;
    children?: React.ReactNode;
}

const MsgArea = styled.div`
    margin-top: ${(props: props) => props.marginTop || '1rem'};
    margin-bottom: ${(props: props) => props.marginBottom || '1rem'};
    margin-left: ${(props: props) => props.marginLeft || '1rem'};
    margin-right: ${(props: props) => props.marginRight || '1rem'};
    width: ${(props: props) => props.width || '100%'};
    background-color: ${(props: props) => props.backgroundColor || 'black'};
    color: ${(props: props) => props.color || '#fff'};
    display: ${(props: props) => props.show ? '' : 'none'};
    padding: 0.5rem;
`;

export default (props: props) => (
    <MsgArea {...props}>{props.children}</MsgArea>
)