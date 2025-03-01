// src/components/Button.tsx
import React from 'react'
import PulseLoader from "react-spinners/PulseLoader";

interface ButtonProps {
  label: string
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  className?: string,
  loading?: boolean,
  disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '', loading, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    className={` text-white py-2 px-4 rounded ${className}  focus:outline-none disabled:opacity-25`}
    disabled={disabled}
  >
    {loading ? <PulseLoader color='#fff' size={10}/> : label}
  </button>
)

export default Button
