import { DivArticle, DivCol, DivContent, DivRow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { TreeMap } from "../componentes/treeMap/TreeMap";
import { LayoutPost } from "../layouts/layoutPost";


export function FkAndIndex() {

    const pageMap = [
        {
            id: 1,
            section: 'Llaves foraneas',
            childs: [
                {
                    titulo: 'Idices',
                    id: 'indices',
                },
                {
                    titulo: 'Integridad referencial',
                    id: 'integridad',
                },
                {
                    titulo: 'Optimización de consultas',
                    id: 'optimizacion',
                },
                {
                    titulo: 'Cache y almacenamiento',
                    id: 'cache',
                }
            ]
        },
        {
            id: 2,
            section: 'Indices',
            childs: [
                {
                    titulo: 'Índice simple',
                    id: 'simpleIdice',
                },
                {
                    titulo: 'Índice compuesto',
                    id: 'indiceCompuesto',
                },
                {
                    titulo: 'Índice único',
                    id: 'indiceUnico',
                },
                {
                    titulo: 'Índice no único',
                    id: 'noUnico',
                },
                {
                    titulo: 'B-Tree',
                    id: 'btree',
                },
                {
                    titulo: 'Hash',
                    id: 'indiceHash',
                },
                {
                    titulo: 'Ventajas',
                    id: 'indicesVentajas',
                },
                {
                    titulo: 'Desventajas',
                    id: 'indicesDesventajas',
                },
                {
                    titulo: 'Mejores prácticas',
                    id: 'mejoresPracticas',
                },
            ]
        }
    ]
    return (
        <>
            <LayoutPost titlePortada={"Llaves e Indices sql"} textPortada={"Por Steve 17/08/2024"} titleMap={'Mapa del sitio'} elementsMap={pageMap}>

                <h1>Llaves foraneas e Indices en sql</h1>

                <p>
                    Si alguna vez tomaste clases de bases de datos o trabajas con ellas,
                    seguramente recordarás que siempre te insistieron en la importancia
                    de relacionar tus tablas, y por lo tanto, tener claves foráneas para
                    establecer esas relaciones.
                </p>

                <p>
                    Una de las preguntas que siempre hacía, pero que nunca me respondían
                    del todo bien, era por qué tenía que poner claves foráneas para relacionar
                    las tablas. Su única respuesta era que las claves foráneas son necesarias
                    porque forman la relación, pero fuera de eso, no había más explicación.
                </p>

                <p>
                    Resulta que existe una mejor explicación que simplemente formar una relación:
                    la creación de claves foráneas también hace más rápida una consulta con joins.
                </p>

                <h2>Llaves Foraneas y velocidad</h2>

                <p>
                    Una llave foránea puede hacer que una consulta con joins sea más rápida
                    por varias razones relacionadas con cómo las bases de datos están estructuradas y optimizadas.
                    Aquí hay algunas razones clave:
                </p>

                <h3 id="indices">Índices</h3>

                <p>
                    Cuando se define una llave foránea, generalmente se crea un índice en la columna de la llave foránea.
                    Este índice permite que la base de datos localice rápidamente las filas relacionadas en la tabla referenciada.
                    Los índices aceleran las búsquedas y las uniones (joins) porque reducen el número de filas que la base de datos necesita escanear.
                </p>

                <h3 id="integridad">Integridad referencial</h3>

                <p>
                    Las llaves foráneas garantizan que los valores en una columna de una
                    tabla coincidan con los valores en la columna referenciada de otra tabla. Esto permite que la
                    base de datos optimice las consultas, ya que puede hacer ciertas suposiciones sobre la integridad y
                    la estructura de los datos.
                </p>

                <h3 id="optimizacion">Optimización de consultas</h3>

                <p>
                    Los motores de bases de datos utilizan información sobre las llaves
                    foráneas para optimizar los planes de ejecución de las consultas. Saben que ciertas columnas
                    están relacionadas y pueden usar esta información para elegir el mejor método de unión y
                    orden de operaciones.
                </p>

                <h3 id="cache">Cache y almacenamiento</h3>

                <p>
                    Los sistemas de bases de datos modernos utilizan estrategias avanzadas
                    de almacenamiento en caché y distribución de datos que pueden beneficiarse del uso de llaves foráneas.
                    La información referencial permite a la base de datos almacenar y acceder a los datos de manera más eficiente.
                </p>

                <p>
                    Por esta razon es una muy buena practica hacer relaciones entre las tablas mediante el uso de una llave
                    foranea ya que esta crea al mismo tiempo un indice que mejorara el tiempo de consulta en caso de tener
                    sentencias join, el rendimiento puede ser tan considerable como bajar una consulta de minutos a segundos si
                    se utiliza de forma eficiente los indices o las llaves foraneas.
                </p>

                <p>
                    En el caso de no tener una llave foranea que relacione las tablas se puede mejorar el tiempo de
                    la consulta si hacemos indices los campos que estan siendo utilizados por la sentencia join
                </p>

                <h2>Indices la clave de la velocidad</h2>

                <p>
                    Un índice es una estructura que almacena el valor de una o más columnas de
                    una tabla en un orden específico, junto con punteros que apuntan a las filas
                    correspondientes en la tabla. Esto permite a la base de datos encontrar y
                    acceder a los datos de manera más eficiente.
                </p>

                <h2>Tipos de indices</h2>

                <h3 id='simpleIdice'>Índice simple</h3>

                <p>
                    Un índice basado en una sola columna.
                </p>

                <h3 id='indiceCompuesto'>Índice compuesto</h3>

                <p>
                    Un índice basado en múltiples columnas.
                </p>

                <h3 id="indiceUnico">Índice único</h3>

                <p>
                    Asegura que todos los valores en la columna indexada sean distintos.
                </p>

                <h3 id='noUnico'>Índice no único</h3>

                <p>
                    Permite valores duplicados en la columna indexada.
                </p>

                <h3 id='btree'>B-Tree (Árbol-B)</h3>

                <p>
                    El tipo de índice más común, adecuado para una amplia gama de consultas.
                </p>

                <h3 id='indiceHash'>Hash</h3>

                <p>
                    Adecuado para búsquedas de igualdad, como = y IN. No es eficiente para búsquedas de rango.
                </p>

                <h2 id="indicesVentajas">Ventajas de los índices</h2>

                <p>
                    Mejora en el rendimiento de las consultas: Los índices permiten a la base
                    de datos encontrar datos rápidamente sin tener que escanear toda la tabla.
                </p>

                <p>
                    Eficiencia en la búsqueda: Almacenar datos en un orden específico facilita
                    las búsquedas y las operaciones de ordenamiento.
                </p>

                <p>
                    Facilita la ejecución de operaciones JOIN y ORDER BY: Los índices pueden
                    acelerar la ejecución de estas operaciones al proporcionar un acceso rápido
                    a las filas relevantes.
                </p>

                <h2 id="indicesDesventajas">Desventajas de los índices</h2>

                <p>
                    Espacio adicional: Los índices requieren espacio adicional en disco para almacenarse.
                </p>

                <p>
                    Coste de mantenimiento: Cada vez que se inserta, actualiza o elimina un registro en
                    la tabla, los índices deben actualizarse, lo que puede ralentizar estas operaciones.
                </p>

                <p>
                    Selección inadecuada de índices: Crear índices en columnas que no se usan frecuentemente
                    en las consultas puede resultar en un uso ineficiente de recursos.
                </p>

                <h2 id="mejoresPracticas">Mejores prácticas</h2>

                <p>
                    Seleccionar columnas adecuadas: Crea índices en columnas que se utilizan
                    frecuentemente en condiciones de búsqueda (WHERE), ordenamiento (ORDER BY),
                    y en condiciones de unión (JOIN).
                </p>

                <p>
                    Evitar índices innecesarios: No crees índices en columnas con datos altamente
                    repetitivos o en columnas que no se utilizan frecuentemente en consultas.
                </p>

                <p>
                    Monitorizar y ajustar: Utiliza herramientas de monitoreo y analítica de bases
                    de datos para identificar índices que no se están utilizando o que están causando
                    problemas de rendimiento.
                </p>

            </LayoutPost>

        </>
    )
}
