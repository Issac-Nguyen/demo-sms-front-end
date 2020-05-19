import React, {useState} from 'react';
import styled from 'styled-components'

export interface props {
    maxLength?: number;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    border?: string;
    invalid?: boolean;
    borderRadius?: string;
    children?: React.ReactNode;
    rule?: string,
    idItem?: number,
    validFn?(id?: number, vl?: boolean): void;
}

const Input = styled.input.attrs((props: props) => ({
    maxLength: props.maxLength || 1
}))`
    width: 100%;
    padding-top: ${(props: props) => props.paddingTop || '0'};
    padding-bottom: ${(props: props) => props.paddingBottom || '0'};
    padding-left: ${(props: props) => props.paddingLeft || '0'};
    padding-right: ${(props: props) => props.paddingRight || '0'};
    border: ${(props: props) => props.border ? props.border ? props.border : '1px solid #DBDCEE' : 'none'};
    border-color: ${(props: props) => props.invalid ? '#FF7165' : ''};
    border-width: ${(props: props) => props.invalid ? '2px' : '1px'};
    max-width: 50px;
    box-sizing: border-box;
    border-radius: ${(props: props) => props.borderRadius || '5px'};
    text-align: center;
`;

export default (props: props) => {
    const {rule, ...rest} = props;
    let [valid, setValid] = useState(true);
    let [value, setValue] = useState('');
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    const validFn = (e: React.FormEvent<HTMLInputElement>) => {
        if(!rule) {
            setValid(true);
            return;
        }
        const regEx = new RegExp(rule);
        const result = regEx.test(value);
        setValid(result);
        if(props.validFn) {
            props.validFn(props.idItem, result);
        }
    }
    return (
        <Input {...rest} invalid={!valid} onKeyUp={validFn} value={value} onChange={onChange}/>
    )
}