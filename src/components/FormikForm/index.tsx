import { Formik, validateYupSchema } from 'formik'
import { FC } from 'react'
import Input from '../Input';

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

const validate = (values: FormValues) => {
  const errors: FormValues = { ...initialValues };
  errors.name = 'Requerido abuelo';
  return errors;
}

const onSubmit = (values: FormValues) => {
  console.log(values)
}

const FormikForm: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, errors, touched, getFieldProps }) => {
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
      }}

    </Formik>
  )
}

export default FormikForm