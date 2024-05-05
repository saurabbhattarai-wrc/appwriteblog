import React, { useId } from 'react'

function Select({
    options = [],
    className = '',
    lable,
    ...props
}, ref) {
    const id = useId()
    return (
        <div>
            {lable && <lable htmlFor={id}></lable>}
            <select
                id={id}
                className={` ${className}`}
                {...props} 
                ref={ref}
            >
                {options?.map((option)=> (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)