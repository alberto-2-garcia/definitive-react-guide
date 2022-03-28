import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import UncontrolledForm from './components/UncontrolledForm'
import ControlledForm from './components/ControlledForm'
import { useFormik } from 'formik'
import Input from './components/Input'

interface FormValues {
  name: string;
  lastname: string;
  email: string;
}

const initialValues: FormValues = {
  name: '',
  lastname: '',
  email: ''
}

function App() {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validate: (values) => {
      const errors: FormValues = { ...initialValues };
      errors.name = 'Requerido';
      return errors;
    },
    onSubmit: (values) => {
      console.log(values)
    }
  });

  const { name, lastname, email } = values;
  const { name: errorName, lastname: errorLastname, email: errorEmail } = errors;

  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' label='Nombre' onChange={handleChange} value={name} name='name'/>
      {errorName && <p>{errorName}</p>}
      <Input type='text' label='Apellido' onChange={handleChange} value={lastname} name='lastname'/>
      <Input type='email' label='Correo' onChange={handleChange} value={email} name='email'/>
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App
