import React, {useState, useEffect} from 'react';
import InputItem, {props as propsInputItem} from '../input-item';
import Input, {props as propsInput} from '../input'

interface propsCpn {
    countItem: number;
    validFn(vl?: boolean): void;
    InputItem?: propsInputItem;
    Input?: propsInput
}

interface itemTypes {
    id: number;
    valid: boolean | undefined;
}

export default (props: propsCpn) => {
    let [itemArrValid, setItemArr] = useState<itemTypes[]>([]);
    useEffect(() => {
        setItemArr([...Array(props.countItem).keys()].map((i: number) => ({id: i, valid: undefined})));
    }, [props.countItem])
    const validItem = (id: number, vl: boolean) => {
        if(!props.validFn)
            return true;
        const item = itemArrValid?.find((i: itemTypes) => i.id.toString() == id.toString());
        if(item) {
            item.valid = vl;
        }
        if(itemArrValid?.filter((i: itemTypes) => i.valid).length == props.countItem) {
            props.validFn(true);
        } else {
            if(itemArrValid?.filter((i: itemTypes) => i.valid == false).length > 0) {
                props.validFn(false);
            } else {
                props.validFn();
            }
            
        }
    }
    return (
        <div>
            <ul>
                {itemArrValid?.map((item: itemTypes) => {
                    return (
                    <InputItem key={item.id} {...props.InputItem}>
                        <Input {...props.Input} idItem={item.id} validFn={validItem}/>
                    </InputItem>
                )})}
            </ul>
        </div>
)}