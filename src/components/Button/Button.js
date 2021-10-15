import React from "react"

const Button = ({ text, handleClick, className }) => (
    <button type="button" onClick={handleClick} className={`rounded-full p-4 w-full text-lg ${className}`}>{text}</button>
)

export default Button