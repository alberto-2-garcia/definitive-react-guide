import React, { ChangeEvent, useState } from 'react'

const ControlledForm = () => {
  const [formValues, setFormValues] = useState({
    input: '',
    area: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const { input, area } = formValues;

  return (
    <div>
      <input type='text' name='input' value={input} onChange={handleChange} />
      <textarea name="area" value={area} onChange={handleChange} ></textarea>
    </div>
  )
}

export default ControlledForm