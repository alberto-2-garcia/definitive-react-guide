import { Formik, Form } from 'formik';
import React, { FC } from 'react'
import InterestInput from '../InterestInput';
import { InterestFormProps } from './interface';

interface FormValues {
  initialDeposit: string;
  annualContribution: string;
  years: string;
  estimatedInterest: string;
}

const initial: FormValues = {
  initialDeposit: '',
  annualContribution: '',
  years: '',
  estimatedInterest: ''
}

const compoundInterest = (deposit: number, contribution: number, years: number, rate: number) => {
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const InterestForm: FC<InterestFormProps> = ({ setInterest, showInterest }) => {
  return (
    <Formik
      initialValues={initial}
      onSubmit={values => {
        console.log(values)
        const {
          initialDeposit,
          annualContribution,
          years,
          estimatedInterest
        } = values;
        setInterest(compoundInterest(parseInt(initialDeposit), parseInt(annualContribution), parseInt(years), parseInt(estimatedInterest)))
        showInterest(true);
      }}
    >
      <Form>
        <InterestInput label='Deposito inicial' name='initialDeposit' type='number'/>
        <InterestInput label='Contribucion anual' name='annualContribution' type='number'/>
        <InterestInput label='Años' name='years' type='number'/>
        <InterestInput label='Interes estimado' name='estimatedInterest' type='number'/>
        <button type='submit'>Enviar</button>
      </Form>
      
    </Formik>
  )
}

export default InterestForm;
