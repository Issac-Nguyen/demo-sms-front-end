import React from 'react'
import styled from 'styled-components'

interface props {
    backgroundColor?: string;
    justifyContent?: string;
    width?: string;
    margin?: string;
    padding?: string;
    position?: string
}

const Container = styled.div`
    background-color: ${(props: props) => props.backgroundColor || '#FFF'};
    display: flex;
    justify-content: ${(props: props) => props.justifyContent || 'center'};
    width: ${(props: props) => props.width || '45%'};
    margin: ${(props: props) => props.margin || '10rem auto'};
    padding: ${(props: props) => props.padding || '3rem 2rem'};
    text-align: center;
    border-radius: 1rem;
    position: ${(props: props) => props.position || 'relative'};

    @media only screen and (max-width: 360px) {
        width: 75%;
    }
`;

export default Container;