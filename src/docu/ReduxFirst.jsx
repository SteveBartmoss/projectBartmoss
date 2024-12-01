import { CodeSpace } from "../componentes/codeSpace/CodeSpace";
import { DivArticle, DivContent, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FirstStepRedux() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en redux"} text={"Por Steve 30/11/2024"} />

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

                    <p>
                        npm install @reduxjs/toolkit react-redux
                    </p>

                    <CodeSpace title={'Comando instalar reduxtoolkit'} rawCode={'npm install @reduxjs/toolkit react-redux'} />

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

                    <p>
                        src/app/store.js
                    </p>

                    <p>
                        El archivo store.js deberia tener la siguiente configuracion basica
                    </p>

                    <CodeSpace title={'store.js'} 
                        rawCode={`import {configureStore} from '@reduxjs/toolkit'
                        export const store=configureStore({
                        reducer: {}
                        })`} />

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

                    <CodeSpace title={'index.js'} 
                        rawCode={`import React from 'react'
                            import ReactDOM from 'react-dom'
                            import './index.css'
                            import App from './App'
                            import {store} from './app/store'
                            import {Provider} from 'react-redux'

                            ReactDOM.render(
                                <Provider store={store}>
                                    <App />
                                </Provider>,
                                document.getElementById('root')
                            )`} />

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

                    <CodeSpace title={'counterSlice.js'} rawCode={'src/features/counter/counterSlice.js'} />

                    <p>
                        La estructura del archivo slice es la siguiente:             
                    </p>

                    <CodeSpace title={'counterSlice.js'} 
                        rawCode={`import { createSlice } from '@reduxjs/toolkit'

                            const initialState = {
                            value: 0,
                            }

                            export const counterSlice = createSlice({
                            name: 'counter',
                            initialState,
                            reducers: {
                                    increment: (state) => {
                                        state.value += 1
                                    },
                                    decrement: (state) => {
                                        state.value -= 1
                                    },
                                    incrementByAmount: (state, action) => {
                                        state.value += action.payload
                                    },
                                },
                            })


                            export const { increment, decrement, incrementByAmount } = counterSlice.actions

                            export default counterSlice.reducer`} />
                        
                    <p>
                        En este archivo existen muchas cosas que permiten manipular el estado pero por ahora solo 
                        veremo la version simplificada como la siguiente
                    </p>

                    <CodeSpace title={'counterSlice.js'} 
                        rawCode={`import { createSlice } from '@reduxjs/toolkit'

                            const initialValue = {
                                value: 0,
                            }

                            export const counterSlice = createSlice({
                            name: 'counter',
                            initialState: initialValue,
                            reducers: {

                                },
                            })

                            export default counterSlice.reducer`} />

                    <p>
                        En esta version simplificada podemos ver como se compone 
                        un slice, que basicamente es el estado que queremos almacenar que debe tener 
                        ciertas caracteristicas como el nombre, que sera la forma en la que nos referimos 
                        al almacenamiento, podemos pensar en este nombre como el campo de un objeto ya 
                        que para ingresar a una propiedad de un objeto hacemos lo siguiente object.field 
                        de esta misma forma tendremo que acceder a nuestro estado usando el nombre que colocamos 
                        en el slice.
                    </p>

                </DivContent>
            </DivArticle>
        </>
    )
}