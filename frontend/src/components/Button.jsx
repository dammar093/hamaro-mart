import React from 'react'

const Button = ({ children, type = "button", classname = "", ...props }, ref) => {
  return (
    <button
      type={type}
      ref={ref}
      className={`${classname}`}
      {...props}
    >{children}</button>
  )
}

export default React.forwardRef(Button)