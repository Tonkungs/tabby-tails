import React from 'react'

interface IProps {
  className?: string,
  value?: string | number,
  name?: string,
  onChange?: any
}
export default function Date(props: IProps) {
  const handleInputChange = (event: { target: { value: any; }; } ) => {
    props.onChange(event.target.value);
  };
  return (
    <input name={props.name}
        type="date"
      placeholder="Type here"
      className={`input input-bordered ${props.className}`}
      value={props.value} 
      onChange={handleInputChange}/>
  )
}
