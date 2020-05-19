import React from 'react';
import styled from 'styled-components'

interface props {
    margin?: string;
    children?: React.ReactNode;
}

const FooterDiv = styled.div`
    margin: ${(props: props) => props.margin || '1rem'}
`;

export default (props: props) => (
    <FooterDiv>
        {props.children}
    </FooterDiv>
    
)