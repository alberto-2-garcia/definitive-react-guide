import React, { ChangeEvent, useState } from 'react'

const ControlledForm = () => {
  const [formValues, setFormValues] = useState({
    input: '',
    area: '',
    select: '',
    check: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  }

  const { input, area, select, check } = formValues;

  return (
    <div>
      <input type='text' name='input' value={input} onChange={handleChange} />
      <textarea name="area" value={area} onChange={handleChange} ></textarea>
      <select name='select' value={select} onChange={handleChange}>
        <option value=''>--- Selecciona ---</option>
        <option value='hola'>hola</option>
        <option value='adios'>adios</option>
      </select>
      <input type='checkbox' onChange={handleChange} name='check' checked={check} />
    </div>
  )
}

export default ControlledForm