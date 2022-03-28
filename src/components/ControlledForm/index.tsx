import React, { ChangeEvent, FormEventHandler, useState } from 'react'

const ControlledForm = () => {
  const [formValues, setFormValues] = useState({
    input: '',
    area: '',
    select: '',
    check: false,
    estado: 'adios'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  }

  const { input, area, select, check, estado } = formValues;

  console.log();

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
      <div>
        <input onChange={handleChange} checked={estado == 'hola'} type='radio' value='hola' name='estado' /> hola
        <input onChange={handleChange} checked={estado == 'adios'} type='radio' value='adios' name='estado' /> adios
      </div>
    </div>
  )
}

export default ControlledForm