import React from 'react'

function Button({
    children,
    type = 'button',
    onClick,
    disabled = false,
    fontSize = 16,
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-sm ${bgColor} ${textColor} ${className}`}{...props}>{children}</button>
  )
}

export default Button