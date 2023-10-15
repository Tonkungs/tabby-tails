import React from 'react'

export default function Radio() {
    return (
        <> 
        {/* checked */}
            <input type="radio" name="radio-1" className="radio" defaultChecked/>
            <input type="radio" name="radio-1" className="radio" />
        </>
    )
}
