import React from 'react'
interface IProps {
  className?:string,
  value?: string | number,
  name?: string,
  onChange?: any
}
export default function TextArea(props:IProps) {
  const handleInputChange = (event: { target: { value: any; }; } ) => {
    props.onChange(event.target.value);
  };
  return (
    <textarea 
    name={props.name}
    className={`textarea textarea-bordered ${props.className}`} 
    placeholder="Bio"
    value={props.value}
    onChange={handleInputChange}></textarea>
  )
}
