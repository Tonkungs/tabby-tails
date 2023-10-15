'use client'
import React, { useState } from 'react'

interface IProp {
    checked? :boolean
    className? :string
    onChange?: any
}
export default function CheckBox(props:IProp) {
    // const [isChecked, setIsChecked] = useState(true);

  const handleInputChange = (event: { target: { checked: boolean; }; }) => {
    props.onChange(event.target.checked);
  };
    return (
        <input type="checkbox" 
        checked={props.checked} 
        className={`checkbox ${props.className}`} 
        onChange={handleInputChange}/>
    )
}
