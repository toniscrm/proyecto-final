import { useState, useEffect } from "react";
import { clientsInstance } from "../../assets/axiosInstances";
import styles from "./Clientes.module.scss"
import { Cliente } from "../../models";
import TableClientes from "./components/TableClientes";
import FormularioNuevoCliente from "./components/FormularioNuevoCliente"

const Clientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    buscaClientes();
  }, []);

  const buscaClientes = () => {
    clientsInstance
      .post<Cliente[]>("/clients", {
        action: "get",
      })
      .then((res) => setClientes(res.data))
      .catch(console.error);
  };

  return (
    <div className={styles.ClientesView}>
      <h1>Clientes</h1>
      <FormularioNuevoCliente buscaClientes={buscaClientes}/>
      <button onClick={buscaClientes}>Busca clientes</button>
      <TableClientes clientes={clientes} />
    </div>
  );
};

export default Clientes;
