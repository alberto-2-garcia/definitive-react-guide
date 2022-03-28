import { ChangeEvent, FC, useState } from 'react'

interface UserFormInterface {
  nombre: string;
  apellido: string;
  correo: string;
}

const initialState: UserFormInterface = {
  nombre: '',
  apellido: '',
  correo: ''
}

const useForm = (initial: UserFormInterface) => {
  const [formValue, setFormValue] = useState(initial);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const resetFormValue = () => {
    setFormValue(initialState);
  }

  return { formValue, handleChange, resetFormValue };
}

const UserForm: FC = () => {
  const { formValue, handleChange, resetFormValue } = useForm(initialState);

  const [usuarios, setUsuarios] = useState<UserFormInterface[]>([])

  const { nombre, apellido, correo } = formValue;

  const agregarUsuario = () => {
    if (nombre && apellido && correo) {
      setUsuarios([...usuarios, { nombre, apellido, correo }]);
      resetFormValue();
    }
  }

  return (
    <div>
      <div>
        <label>Nombre</label>
        <input name='nombre' value={nombre} onChange={handleChange} />
      </div>
      <div>
        <label>Apellido</label>
        <input name='apellido' value={apellido} onChange={handleChange} />
      </div>
      <div>
        <label>Correo</label>
        <input name='correo' value={correo} onChange={handleChange} />
      </div>
      <button onClick={agregarUsuario}> Enviar </button>

      <ul>
        {usuarios.map(({ nombre, apellido, correo }) => (
          <li key={correo}> {nombre} {apellido} - {correo} </li>
        ))}
      </ul>
    </div>
  )
}

export default UserForm;
