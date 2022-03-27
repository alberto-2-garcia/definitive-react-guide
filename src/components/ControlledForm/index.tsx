import React, { ChangeEvent, useState } from 'react'

const ControlledForm = () => {
  const [formValues, setFormValues] = useState({
    input: '',
    area: '',
    select: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const { input, area, select } = formValues;

  return (
    <div>
      <input type='text' name='input' value={input} onChange={handleChange} />
      <textarea name="area" value={area} onChange={handleChange} ></textarea>
      <select name='select' value={select} onChange={handleChange}>
        <option value=''>--- Selecciona ---</option>
        <option value='hola'>hola</option>
        <option value='adios'>adios</option>
      </select>
    </div>
  )
}

export default ControlledForm