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
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
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

  const { name: errorName, lastname: errorLastname, email: errorEmail } = errors;
  const { name: nameTouched, lastname: lastnameTouched, email: emailTouched } = touched;

  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' label='Nombre' {...getFieldProps('name')}/>
      {nameTouched && errorName && <p>{errorName}</p>}
      <Input type='text' label='Apellido' {...getFieldProps('lastname')}/>
      <Input type='email' label='Correo' {...getFieldProps('email')}/>
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App
