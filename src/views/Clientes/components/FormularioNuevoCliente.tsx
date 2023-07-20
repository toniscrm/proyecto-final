import { useState } from "react";
import styles from "./styles.module.scss";
import { Cliente } from "../../../models";
import { clientsInstance } from "../../../assets/axiosInstances";

const emptyClient: Cliente = {
  id: 0,
  age: 0,
  email: "",
  nombre: "",
};

const FormularioNuevoCliente = ({
  buscaClientes,
}: {
  buscaClientes: () => void;
}) => {
  const [nuevoCliente, setNuevoCliente] = useState<Cliente>(emptyClient);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNuevoCliente((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const creaCliente = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clientsInstance
      .post("/clients", {
        action: "create",
        client: nuevoCliente,
      })
      .then(console.log)
      .catch(console.error)
      .finally(buscaClientes);
  };

  return (
    <form onSubmit={creaCliente} className={styles.FormularioNuevoCliente}>
      <input
        type="text"
        placeholder="nombre"
        name="nombre"
        value={nuevoCliente?.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="edad"
        name="age"
        value={nuevoCliente?.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={nuevoCliente?.email}
        onChange={handleChange}
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default FormularioNuevoCliente;
