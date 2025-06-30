import { CodeSpaceV3 } from "../componentes/codeSpace/CodeSpaceV3";
import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { TreeMap } from "../componentes/treeMap/TreeMap";


export function FirstStepRedux() {

    const pageMap = [
        {
            id: 1,
            section: 'Preparar ambiente',
            childs: [
                {
                    titulo: 'Instalacion',
                    id: 'install',
                }
            ],
        }
    ]

    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en redux"} text={"Por Steve 30/11/2024"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Mapa del sitio'} elementos={pageMap} />
                </DivCol>

                <DivCol>
                    <DivArticle>
                        <DivContent>

                            <p>
                                La libreria de redux es una buena opcion para manejar el estado
                                global de una aplicacion al momento de tener que manejar de una
                                forma mas eficiente y potente la informacion entre componentes
                            </p>

                            <h1>Instalacion de reduxtoolkit</h1>

                            <p>
                                Para instalar reduxtoolkit en nuestra aplicacion podemos dirigirnos
                                a la pagina oficial en el siguiente enlace
                            </p>

                            <a id="linkto" href="https://redux-toolkit.js.org/tutorials/quick-start" rel="noreferrer" target="_blank">Sitio de Node</a>

                            <p>
                                Aqui podremos encontrar el siguiente comando que nos permite instalar reduxtoolkit para nuestra
                                aplicacion de react
                            </p>

                            <CodeSpaceV3 title={'Comando instalar reduxtoolkit'} rawCode={'npm install @reduxjs/toolkit react-redux'} />

                            <h2>Configurar el Store</h2>

                            <p>
                                Ahora que se tiene instalado redux toolkit, debemos configurar
                                es store que sera el lugar donde almacenaremos todos los estados
                                que queremos usar en nuestro proyecto.
                            </p>

                            <p>
                                Para esto podemos seguir la estructura que nos ofrece la
                                documentacion de reduxtoolkit
                            </p>

                            <CodeSpaceV3 title={'estructura'} rawCode={'src/app/store.js'} />

                            <p>
                                El archivo store.js deberia tener la siguiente configuracion basica
                            </p>

                            <CodeSpaceV3 title={'store.js'} rawCode={`import { configureStore } from '@reduxjs/toolkit'\n export const store = configureStore ( {\n reducer: { }\n } )\n`} />

                            <p>
                                Dentro de este estore almacenameremos un objeto gigante, que es donde
                                mantendremos los estados de nuestra aplacacion, pensemos en en el store
                                como un disco duro, dentro de el podemos almacenar lo que queremos y
                                tambien podemos recuperar la informacion desde el mismo
                            </p>

                            <h2>Proveer el estado global</h2>

                            <p>
                                Ahora que tenemos creado nuestro almacenamiento global definido, debemos
                                conectarlo a nuestra aplicacion para poder usarlo en cualquier parte,
                                podemos pensar en esto como conectar el disco duro a nuestra placa madre
                            </p>

                            <p>
                                Para lograr esto debemos usar un provider que cubrira toda nuestra aplicacion
                                como si se trata de una gran etiquta
                            </p>

                            <CodeSpaceV3 title={'index.js'} rawCode={
                                `import React from 'react'\n 
                                import ReactDOM from 'react-dom'\n 
                                import './index.css'\n 
                                import App from './App'\n 
                                import { store } from './app/store'\n 
                                import { Provider } from 'react-redux'\n
                                ReactDOM.render(\n
                                <Provider store = { store }>\n 
                                <App />\n
                                </Provider>\n
                                document.getElementById('root')\n
                                )\n
                                `} />

                            <p>
                                En este caso se implemento el provider antes del
                                componente App, asi podemos imaginar que nuestro
                                store es el la etiqueta que encapsula toda la aplicacion
                                y de esta forma podemos acceder a la informacion desde cualquier
                                parte de la aplicacion
                            </p>

                            <h2>Crear un Slice</h2>

                            <p>
                                Un slice es una parte chica donde almacenamos determinada
                                informacion, con esto podemos imaginar que el store es el disco
                                duro de la pagina y los slice serian las carpetas o incluso las particiones
                                ya que el store provee y almacena los slice pero en los slice es donde
                                podemos tener la informacion que queremos mantener de manera global
                            </p>

                            <p>
                                Para crear un slice usaremo la siguiente ruta
                            </p>

                            <CodeSpaceV3 title={'counterSlice.js'} rawCode={'src/features/counter/counterSlice.js'} />

                            <p>
                                La estructura del archivo slice es la siguiente:
                            </p>

                            <CodeSpaceV3 title={'counterSlice.js'} rawCode={`import { createSlice } from '@reduxjs/toolkit'\n 
                                const initialState = {\n
                                value: 0,\n
                                }\n
                                export const counterSlice = createSlice({\n
                                name: 'counter',\n
                                initialState,\n
                                reducers: {\n
                                increment: (state) => {\n
                                state.value += 1\n
                                },\n
                                decrement: (state) => {\n
                                state.value -= 1\n
                                },\n
                                incrementByAmount: (state, action) => {\n
                                state.value += action.payload\n
                                },\n
                                },\n
                                })\n
                                export const { increment, decrement, incrementByAmount } = counterSlice.actions\n
                                export default counterSlice.reducer\n`} />

                            <p>
                                En este archivo existen muchas cosas que permiten manipular el estado pero por ahora solo
                                veremo la version simplificada como la siguiente
                            </p>

                            <CodeSpaceV3 title={'counterSlice.js'} rawCode={
                                `import { createSlice } from '@reduxjs/toolkit'\n const initialValue = {\n value: 0,\n }\n export const counterSlice = createSlice({\n name: 'counter',\n initialState: initialValue,\n reducers: {\n },\n })\n export default counterSlice.reducer\n`} />

                            <p>
                                En esta version simplificada podemos ver como se compone
                                un slice, que basicamente es el estado que queremos almacenar que debe tener
                                ciertas caracteristicas como las siguientes:
                            </p>

                            <h3>name</h3>

                            <p>
                                Sera la forma en la que nos referimos
                                al almacenamiento, podemos pensar en este nombre como el campo de un objeto ya
                                que para ingresar a una propiedad de un objeto hacemos lo siguiente object.field
                                de esta misma forma tendremo que acceder a nuestro estado usando el nombre que colocamos
                                en el slice.
                            </p>

                            <h3>initialState</h3>

                            <p>
                                Este sera el estado que mantendremos en la aplicacion de manera global, en
                                el ejemplo se describe como una constante la cual es asignada asi que
                                esta es la informacion inicial de nuestra aplicacion
                            </p>

                            <h3>reducers</h3>

                            <p>
                                Esta es la parte interesante del slice ya que aqui declararemos las
                                funciones que interactuan con el estado que declaramos dentro del slice,
                                podemos pensar en estad funciones como los metodos de una clase ya que generalmente
                                las clases cuentan con sus metodos geter y setter que permiten obtener o modificar
                                propiedades o un objeto, de esta misma forma tendremos que declarar las funciones que
                                permitan modificar el estado que estamos manejando
                            </p>

                            <p>
                                En el ejemplo simplificado aun no se han declarado estas funciones pero por
                                ahora solo mantengamos la idea de que en los reducers deben ir las funciones
                                que modificaran el estado de nuestra aplicacion
                            </p>

                            <h2>Agregar el slice al store</h2>

                            <p>
                                Cuando tenemos configurado nuestro slice podemos agregarlo al store
                                para poder implementarlo en nuestro almacenamiento
                            </p>

                            <CodeSpaceV3 title={'store.js'} rawCode={`
                                import { configureStore } from '@reduxjs/toolkit'\n 
                                import counterReducer from '../features/counter/counterSlice'\n 
                                export const store = configureStore({\n 
                                reducer: {\n 
                                counter: counterReducer,\n 
                                },\n 
                                })\n`} />

                            <p>
                                Ahora hemos agregado a nuestro store el slice que creamos, tenemos que importarlo
                                desde el archivo en que se creo y despues agregarlo al reducer del store y aqui es donde
                                se puede papreciar mejor la forma en que trabaja un store. Si bien tenemos configurado el
                                almacenamiento global que es el store pero dentro del el tenemos los slice que serian las
                                partes mas chicas en donde se almacena cierta informacion, de esta forma los slice son las
                                carpetas que componente la informacion que se almacena en un disco duro.
                            </p>

                            <h2>Agregar el estado global a componentes de react</h2>

                            <p>
                                Antes de crear las funciones que iran en el reducer de nuestro slice es
                                importante que usemos nuestro estado global en la aplicacion para poder
                                notar algunas cosas interesantes asi que es mejor implementar de una manera facil nuestro estado
                            </p>
                            
                            <CodeSpaceV3 title={'App.js'} 
                                rawCode={`import logo from './logo.svg';\n 
                                import './App.css';\n 
                                import { useSelector } from 'react-redux';\n 
                                function App() {\n 
                                const count = useSelector((state)=> state.counter.value)\n 
                                return (\n 
                                <div className="App">\n
                                <h1>Contador</h1>\n
                                <p>{count}</p>\n
                                </div>\n
                                );\n
                                }\n
                                export default App;\n`} />

                            <p>
                                Con esto podemos ver nuestro contador global en la aplicacion
                                incial de react que simplemente limpiamos e imprimimos el
                                estado para poder verlo en pantalla
                            </p>

                            <h3>useSelector</h3>

                            <p>
                                Esta funcion permite que accedamos a nuestro almacenamiento
                                global y podamos tener acceso a nuestro slice counter, esto nos
                                permite poder leer el valor y mostrarlo en pantalla o
                                hacer algo mas con el como por ejemlo listar en caso de que sea
                                un arreglo o mostrar informacion de un perfil de usuario
                            </p>

                            <p>
                                Al igual que antes podemos pensar en el useSelector como la funcion
                                get de una clase, la cual nos permite obtener una propiedad de un objeto
                                y trabajar con el asi que el useSelector se puede considera como
                                un metodo get para obtener informacion de nuestro store
                            </p>

                            <h2>Metodos para modificar el estado</h2>

                            <p>
                                Ahora que tenemos el estado global en el proyecto podemos hacer
                                que el numero de la pagina incremente o se redusca mediante el uso
                                de dos botones lo cuales pondremos en nuestra pagina principal
                            </p>

                            <CodeSpaceV3 title={'App.js'} rawCode={`
                                import logo from './logo.svg';\n 
                                import './App.css';\n 
                                import { useSelector } from 'react-redux';\n 
                                function App() {\n 
                                const count = useSelector((state)=> state.counter.value)\n 
                                return (\n
                                <div className="App">\n
                                <h1>Contador</h1>\n
                                <p>{count}</p>\n
                                <button>Increment</button>\n
                                <button>Decrement</butto>\n
                                </div>\n
                                );\n
                                }\n
                                export default App;\n`} />

                            <p>
                                Con esto tenemos los dos botones para incrementar
                                el contador pero ahora debemos crear los metodos para
                                modificar el valor de estado, el campo del slice llamado
                                reducers sera donde declararemos las funciones encargadas
                                de modificar el estado de nuestra aplicacion
                            </p>

                            <h3>reducers</h3>

                            <p>
                                Dentro del objeto que regresamos en nuestro archivo slice
                                tenemos un campo que nos permite definir los metodos que
                                usaremos para modificar la informacion del estado que almacena,
                                en este caso queremos incrementar o reducir el contador
                                del estado por lo que el archivo del slice quedaria algo asi:
                            </p>

                            <CodeSpaceV3 title={'counterSlice.js'} rawCode={`import { createSlice } from '@reduxjs/toolkit'\n 
                                const initialValue = {\n
                                value: 0,\n
                                }\n
                                export const counterSlice = createSlice({\n
                                name: 'counter',\n
                                initialState: initialValue,\n
                                reducers: {\n
                                increment: (state,action)=>{\n
                                state.value += 1\n
                                },\n
                                decrement: (state,action)=>{\n
                                state.value -=1\n
                                },\n
                                },\n
                                })\n
                                export const {increment,decrement,} = counterSlice.actions\n
                                export default counterSlice.reducer\n`} />

                            <p>
                                Con esta modificacion podemos ver que hay cosas interesantes, como
                                por ejemplo los valores que reciben las dos funciones que vemos state y action,
                                estos valores son la clave para manejar nuestro estado ya que uno representa
                                el estado actual y el otro representa la nueva informacion que queremos ver
                                reflejada en el cambio.
                            </p>

                            <h3>state</h3>

                            <p>
                                Este es el estado actual de la aplicacion, en el caso del contardor se
                                trata del valor 0, por lo cual debemos operar con esta variable para
                                poder modificar el estado de la aplicacion pero en este caso hay algo interesante
                                aqui
                            </p>

                            <p>
                                Cuando trabajamos con la libreria de react no podemos hacer una modificacion directa
                                en el estado, ya que por ejemplo no podemos declarar una constante y luego
                                usarla ya que para eso necesitamos usar el hook use state pues react no
                                es realmente reactivo como lo puede ser svelt o vue, esto se debe a como esta
                                contruida la libreria y por eso debemos usar el hook useState y su funcion para
                                actualizar el valor del estado.
                            </p>

                            <p>
                                En el caso de redux pasa algo similar y es que reduxtoolkit puede mutar directamente
                                los estados pero no puede hacer asignaciones directas para el estado por la forma en
                                que la libreria trabaja esto lo podemos ver en el siguiente ejemplo:
                            </p>

                            <CodeSpaceV3 title={'Ejemplo'} rawCode={`state = state.filter(element => element.id !== action.payload)`} />

                            <p>
                                Esto no funciona ya que al hace la asignacion state =, estamos rompiedo la convencion
                                que usa la libreria de no reasignar valores ya que esto le asigna un nuevo valor al
                                state y eso no esta permitido, lo que podemos hacer es regrear un nuevo estado para
                                que la libreria tome esto como una actualizacion del estado.
                            </p>

                            <CodeSpaceV3 title={'Ejemplo'} rawCode={`return state.filter(element => element.id !== action.payload)`} />

                            <p>
                                En este nuevo codigo le estamos indicando a la libreria que necesitamos un nuevo estado
                                para que se actualice ya que la asignacion directa no la podemos hacer directamente
                                otros ejemplo de que podemos hacer con el estado son los siguientes:
                            </p>

                            <CodeSpaceV3 title={'Ejemplo'} rawCode={`state.push(action.payload)`} />

                            <p>
                                En este caso estamos mutando directamente el estado pero eso realmente
                                no importa porque la libreria maneja este tipo de operaciones de manera corecta.
                                En el caso del contador pasa algo interesante y es que pareciera que estamos
                                haciendo una redireccion directamente pero la libreria no la toma como eso si
                                no como una mutacion del estado que estamos usando y por eso lo permite
                            </p>

                            <h3>action</h3>

                            <p>
                                Este es el parametro para que recibimos para actualizar el valor del estado y tambien
                                tiene algo interesante y es que si nos fijamos ne los ejemplos anteriores usamos
                                la propiedad paylod y es que el parametro tiene la siguiente forma:
                            </p>

                            <CodeSpaceV3 title={'Ejemplo'} rawCode={`{\n 
                                payload: '2',\n
                                type: "task/deleteTask,\n
                                }\n
                                `} />

                            <p>
                                Con el ejemplo anterior podemos ver porque llamamos la propiedad payload, ya que
                                ahi es donde se almacena el nuevo valor que se usara para actualizar el estado
                                de la aplicacion, esto es debido a la forma en que trabaja la libreria y por eso
                                debemos usar el payload que si bien no se utiliza en este ejemplo es una buena idea
                                mencionar como funciona
                            </p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}