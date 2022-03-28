import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import UncontrolledForm from './components/UncontrolledForm'
import ControlledForm from './components/ControlledForm'
import { useFormik } from 'formik'
import Input from './components/Input'


function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  });

  const { name, lastname, email } = values;

  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' label='Nombre' onChange={handleChange} value={name} name='name'/>
      <Input type='text' label='Apellido' onChange={handleChange} value={lastname} name='lastname'/>
      <Input type='email' label='Correo' onChange={handleChange} value={email} name='email'/>
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App
