import React from 'react'
import styled from 'styled-components';

export interface propsButton {
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    color?: string;
    border?: string;
    backgroundColor?: string;
    fontWeight?: number;
    backgroundDisabled?: string;
    disabledColor?: string;
    children?: React.ReactNode;
    className?: string
}

const Button = styled.button`
    border-radius: 5px;
    padding-top: ${(props: propsButton) => props.paddingTop || '0.5rem'};
    padding-bottom: ${(props: propsButton) => props.paddingBottom || '0.5rem'};
    padding-left: ${(props: propsButton) => props.paddingLeft || '0.7rem'};
    padding-right: ${(props: propsButton) => props.paddingRight || '0.7rem' };
    color: ${(props: propsButton) => props.color || 'inherit'};
    box-shadow: none;
    border: ${(props: propsButton) => props.border ? (props.border || '1px solid #DBDCEE') : 'none'};
    background-color: ${(props: propsButton) => props.backgroundColor || '#FFFFFF'};
    box-sizing: border-box;
    font-weight: ${(props: propsButton) => props.fontWeight || '600'};

    &.disabled {
        background: ${(props: propsButton) => props.backgroundDisabled || 'rgba(141, 142, 161, 0.1)'};
		color: ${(props: propsButton) => props.disabledColor || '#211965'};
		pointer-events: none;
    }
`;



export default (props: propsButton) => (
    <Button {...props}>{props.children}</Button>
)