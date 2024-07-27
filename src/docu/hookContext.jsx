import { DivArticle } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function HookContext() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en react"} text={"Por Steve 21/07/2024"} />

            <DivArticle>
                <DivArticle>
                    <h1>El hook Context en react</h1>

                    <p>
                        Si has trabajado con react entonces sabras
                        que mantener el estado en los componentes
                        no suele ser tan trivial pero aun pero es
                        la comunicacion que existe entre componentes
                        padres e hijos
                    </p>

                    <h2>Props</h2>

                    <p>
                        Si bien las props es una manera simple de mandar
                        informacion de padre a hijo e incluso se puede
                        hacer de forma inversa hijo a padre (esto ya no es
                        tan trivial pero se puede) existe cierto inconveniente
                        con esto y es lo que se llama prop drilling lo que puede
                        tener problemas a futuro
                    </p>

                    <h2>Prop Drilling</h2>

                    <p>
                        Es el proceso de pasar datos de un componente padre a un componente hijo y
                        luego a otros componentes más profundos en la jerarquía, incluso si algunos
                        componentes intermedios no necesitan esos datos. Este enfoque puede llevar a
                        código difícil de mantener y comprender.
                    </p>

                    <p>
                        Tomemos como ejemplo una aplicacion que tiene el manejo de productos y
                        por lo tanto podemos hacer el crud basico para un producto (crear producto,
                        listar prodcutos, borrar o actualizar un producto)
                    </p>
                    <p>
                        En este caso tenemos las vistas separadas para cada accion del crud
                        y como somos un poco flojos en cada vista se maneja un estado diferentes
                        algo como esto
                    </p>

                    <code>
                        Ejemplo XD
                    </code>

                    <p>
                        Aqui podemos ver uno de los problemas de trabajar propiedades o estados
                        separados para cada aplicacion ya que cada una es un entidad independiente
                        y por ejemplo si actualizamos un producto, componente updateComponent tendra
                        el cambio reflejado pero los otros componente no, ya que cada uno mantiene
                        su estado propio
                    </p>

                    <p>
                        Una solucion seria manejar el estado desde un componente superior, en este
                        caso el padre pero esto tiene un pequeno inconveniente, pues pasar datos
                        del padre es facil pero emitir un evento en el hijo y que el padre lo reciba
                        no es tan facil o al menos no es tan intituitivo como uno pensaria
                    </p>

                    <p>
                        Se podria definir una propiedad en los hijos, que reciba como parametro una funcion
                        y con esta se actualice el estado en el padre, de esta forma cuando que queremos modificar
                        el estado podemos llamar a esta funcion. Seria como pasar un callback a nuestro componente que
                        que podemos llamar cada que queremos afectar al padre
                    </p>

                    <p>
                        Esto podría mejorar el problema de tener un estado para cada componente
                        pero la gente de react ha pensado en una  mejora y justamente esto es lo que mejora
                        el hook usecontext que permite manejar un estado desde otro componente de una
                        mejor manera
                    </p>

                    <h1>hook context</h1>

                    <p>
                        Es una función que te permite suscribirte a un contexto en un componente funcional.
                        Los contextos en React se utilizan para compartir datos entre componentes sin necesidad de
                        pasar explícitamente props a través de múltiples niveles de la jerarquía de componentes. Esto
                        es especialmente útil para datos que deben ser accesibles globalmente, como el tema (claro/oscuro),
                        el usuario autenticado, o la configuración de la aplicación.
                    </p>
                </DivArticle>
            </DivArticle>

        </>
    )
}
