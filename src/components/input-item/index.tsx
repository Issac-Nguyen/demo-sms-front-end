import React from 'react';
import styled from 'styled-components';

export interface props {
    width?: string;
    margin?: string;
    width360?: string;
    children?: React.ReactNode;
}

export default styled.li`
    display: inline-block;
    width: ${(props: props) => props.width || '10%'};
    margin: ${(props: props) => props.margin || '0 0.5rem'};

    @media only screen and (max-width: 360px) {
        width: ${(props: props) => props.width360 || '15%'};
    }
`;