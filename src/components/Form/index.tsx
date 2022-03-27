import { FC, FormEvent, useRef} from 'react'

const Form: FC = () => {
  // const submit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(Object.fromEntries(Array.from(new FormData(event.currentTarget))));
  // }

  const input = useRef<HTMLInputElement | null>(null);
  const file = useRef<HTMLInputElement | null>(null);
  const submit = () => {
    console.log(input.current?.value)
    console.log(file.current?.files)
    const form = new FormData();
    const blob = file.current?.files?.length ? file.current?.files[0] : ''
    form.append('archivo', blob || '');
    form.append('campo', input.current?.value || '');
    fetch('/lala', { method: 'POST', body: form });
  }

  return (
    // <form onSubmit={submit}>
    //   <div>
    //     <span>lala</span>
    //     <input name='campo' />
    //   </div>
    //   <input name='campo2' />
    //   <input type='submit' value='Enviar' />
    // </form>
    <div>
      <div>
        <span>lala</span>
        <input type='text' name='campo' ref={input}/>
        <input type='file' ref={file}/>
      </div>
      <input type='submit' value='Enviar' onClick={submit} />
    </div>
  )
}

export default Form