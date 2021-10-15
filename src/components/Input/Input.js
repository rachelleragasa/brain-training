import React from "react"

import styles from "./Input.module.css"

const Input = ({ handleChange, value, id, label, name, placeholder, className }) => (
    <>
        <label htmlFor={id} className={styles.visuallyhidden}>{label}</label>
        <input
            type="text"
            onChange={handleChange}
            value={value}
            name={name}
            id={id}
            placeholder={placeholder}
            className={`w-full border-gray-200 border-2 rounded p-2 mb-5 text-lg focus:border-blue-300 ${className}`} />
    </>
)

export default Input