import { Formik, Form, Field, ErrorMessage, FormikErrors } from 'formik'
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
  const errors: FormikErrors<FormValues> = {};
  // errors.name = 'Requerido abuelo';
  // errors.lastname = 'Requerido abuela';
  // errors.email = 'Requerido aaaa';
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
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Input label='Nombre' name='name' type='text' />
        <Input label='Apellido' name='lastname' type='text' />
        <Input label='Correo' name='email' type='email' />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}

export default FormikForm