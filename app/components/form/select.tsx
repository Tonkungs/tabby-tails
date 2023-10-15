import React from 'react'

interface IOption {
    name: string,
    value: string
}

interface IProps {
    className?: string,
    lists?: IOption[]
    value?: string | number,
    name?: string,
    onChange?: any
}

export default function Select(props: IProps) {
    const handleInputChange = (event: { target: { value: any; }; } ) => {
        props.onChange(event.target.value);
      };
    return (
        <select
            className={`select select-bordered ${props.className}`}
            defaultValue={props.value}
            onChange={handleInputChange} >
            <option disabled value="" >ชนิด?</option>
            {props.lists ? props.lists.map(list => {
                return <option key={list.value} value={list.value} >{list.name}</option>
            }) : ''}
        </select>
    )
}
