import React from 'react'

function InputField({
  placeholder,
  value,
  type,
  onChange
}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  )
}
export default InputField 