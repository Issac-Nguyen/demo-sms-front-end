import React from 'react';
import styled from 'styled-components'

interface props {
    width?: string;
    height?: string;
    width360?: string;
    height360?: string;
}

const LogoDiv = styled.div`
    width: ${(props: props) => props.width || '100px'};
    height: ${(props: props) => props.height || '100px'};
    position: absolute;
    left: calc(50% - 50px);
    top: -50px;

    @media only screen and (max-width: 360px) {
        width: ${(props: props) => props.width360 || '100px'};
		height: ${(props: props) => props.height360 || '100px'};
		left: calc(50% - 40px);
		top: -40px;
    }
`;

const logoCpn = (props: props) => (
    <LogoDiv>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FF7165"/><path fillRule="evenodd" clipRule="evenodd" d="M42 41H58V39C58 34.5817 54.4183 31 50 31C45.5817 31 42 34.5817 42 39V41ZM38 41H34C31.7909 41 30 42.7909 30 45V69C30 71.2091 31.7909 73 34 73H66C68.2091 73 70 71.2091 70 69V45C70 42.7909 68.2091 41 66 41H62V39C62 32.3726 56.6274 27 50 27C43.3726 27 38 32.3726 38 39V41ZM52 55.4649C53.1956 54.7733 54 53.4806 54 52C54 49.7909 52.2091 48 50 48C47.7909 48 46 49.7909 46 52C46 53.4806 46.8044 54.7733 48 55.4649V64C48 65.1046 48.8954 66 50 66C51.1046 66 52 65.1046 52 64V55.4649Z" fill="white"/></svg>
    </LogoDiv>
);

export default logoCpn;