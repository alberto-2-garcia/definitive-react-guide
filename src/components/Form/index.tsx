import { FC, FormEvent} from 'react'

const Form: FC = () => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(Object.fromEntries(Array.from(new FormData(event.currentTarget))));
  }

  return (
    <form onSubmit={submit}>
      <div>
        <span>lala</span>
        <input name='campo' />
      </div>
      <input name='campo2' />
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default Form