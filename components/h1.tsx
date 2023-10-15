import React from 'react'

interface IProps {
    size :String,
    className:String
    color:string
}

export default function H1(props:IProps) {
    const text = 'text-'+props.size
    console.log('text',text);
    
    return (
        <h1 className={text+` font-bold underline`}>
            Hello world!
            <button className={`btn btn-${props.color} `}>
    Butston
    </button>
        </h1>
    )
}
