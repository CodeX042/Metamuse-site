// src/components/FormInput.tsx
import React from 'react'

interface FormInputProps {
  label: string
  type?: string
  required?: boolean
  value?: any,
  name?: string,
  disabled?: boolean,
  handleChange?: any
}

const FormInput: React.FC<FormInputProps> = ({ label, type = 'text', required = false, value, disabled,handleChange, name }) => (
  <div className="flex flex-col mb-4">
    <label className="font-medium mb-1 text-black">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"
      required={required}
      value={value}
      disabled={disabled}
      onChange={handleChange}
      name={name}
    />
  </div>
)

export default FormInput
