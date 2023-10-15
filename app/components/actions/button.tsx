'use client'
import React from 'react'

interface IProp {
  disabled?: boolean,
  loading?:boolean,
  // outline?: string//'' | 'outline',
  // size?: string//'xs' | 'sm' | '' | 'lg'
  // color?:  string
  // '' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'info' |
  // 'success' | 'warning' | 'error'
  className? : string
  // test? :string
  // color?:string
  children?:any
  onClick?:any
}
export default function Button(props: IProp) {
  return (
    <button className={`btn ${props.className} `} disabled={props.disabled} 
    onClick={props.onClick}>
     {(props.loading? <span className="loading loading-spinner"></span>:'')}
      {props.children}
    </button>
  )
}

// สำหรับ server component
// Button.defaultProps = {
//   outline: '',
//   disabled: false,
//   loading:false,
//   size: '',
//   color: '',
//   className:''
// } 
