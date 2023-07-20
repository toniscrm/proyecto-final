import { memo } from "react";
import styles from "./styles.module.scss";
import { Cliente } from "../../../models";

const TableClientes = memo(({ clientes }: { clientes: Cliente[] }) => {
  if (!clientes || clientes.length === 0) return null;
  return (
    <div className={styles.TableClientes}>
      {clientes.map((cliente) => (
        <div
          key={cliente.id}
          className={`${styles.Cliente} ${
            cliente.id % 2 === 0 ? styles.Par : ""
          }`}
        >
          <span>{cliente.id}</span>
          <span>{cliente.nombre}</span>
          <span>{cliente.age}</span>
          <span>{cliente.email}</span>
        </div>
      ))}
    </div>
  );
});

export default TableClientes;
