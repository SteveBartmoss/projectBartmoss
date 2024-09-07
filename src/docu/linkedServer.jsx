import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function LinkedServer() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"El hook Context en react"} text={"Por Steve 05/09/2024"} />

      <DivSection>
        <DivArticle>
          <p>
            Cuando configuras un Linked Server, estás creando una conexión persistente entre el servidor SQL y otro servidor o base de datos. Esto te permite ejecutar consultas que cruzan servidores, como si los datos estuvieran en el mismo servidor.
          </p>

          <p>
            Centralización de datos: Permite acceder a datos distribuidos en varios servidores desde un solo punto.

            Interoperabilidad: Puedes consultar bases de datos que no están en el mismo motor, por ejemplo, SQL Server con MySQL.

            Consultas distribuidas: Ejecutas consultas que combinan datos de múltiples servidores.
          </p>

          <p>
            Aunque los linked solo existen en sql server otro sistemas de bases de datos tienen sistemas similares
            como Federated Storage Engine o MySQL Replication para consultar datos de otros servidores remotos. Para motores como PostgreSQL u Oracle, existen funcionalidades similares a través de DBLinks (Database Links) o servicios de integración de datos.
          </p>

          <p>
            Un Linked Server (servidor vinculado) es una funcionalidad en sistemas de bases de datos como SQL Server que permite conectar y consultar datos de bases de datos remotas o externas desde el servidor actual. En esencia, crea un "enlace" entre dos bases de datos que pueden estar en servidores diferentes, incluso si utilizan diferentes motores de bases de datos (SQL Server, MySQL, Oracle, etc.).
          </p>

          <p>
            En SQL Server, un Linked Server permite:

            Ejecutar consultas distribuidas que involucren múltiples bases de datos en diferentes servidores.

            Ejecutar comandos SQL en la base de datos vinculada como si fuera una tabla local.

            Usar procedimientos almacenados y otros objetos de la base de datos remota.

            Interactuar con bases de datos heterogéneas (por ejemplo, SQL Server a MySQL o SQL Server a Oracle).
          </p>
        </DivArticle>
      </DivSection>
    </>
  )
}

