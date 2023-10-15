import React from 'react'

interface IProps {
  className?: string,
  value?: string | number,
  name?: string,
  onChange?: any
}
export default function Input(props: IProps) {
  const handleInputChange = (event: { target: { value: any; }; } ) => {
    props.onChange(event.target.value);
  };
  return (
    <input name={props.name}
      type="text"
      placeholder="Type here"
      className={`input input-bordered ${props.className}`}
      // className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

      value={props.value} 
      onChange={handleInputChange}/>
  )
}
