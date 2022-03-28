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
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
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
  const { name: nameTouched, lastname: lastnameTouched, email: emailTouched } = touched;

  return (
    <form onSubmit={handleSubmit}>
      <Input onBlur={handleBlur} type='text' label='Nombre' onChange={handleChange} value={name} name='name'/>
      {nameTouched && errorName && <p>{errorName}</p>}
      <Input onBlur={handleBlur} type='text' label='Apellido' onChange={handleChange} value={lastname} name='lastname'/>
      <Input onBlur={handleBlur} type='email' label='Correo' onChange={handleChange} value={email} name='email'/>
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App
