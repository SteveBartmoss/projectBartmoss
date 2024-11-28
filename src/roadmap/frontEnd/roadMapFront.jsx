import { DivArticle, DivContent } from "../../componentes/contenedores/contenedores";
import { ExtendPanel } from "../../componentes/extendpanel/ExtendPanel";
import { Portada } from "../../componentes/portada/portada";


export function roadMapFront(){ 

    return (
        <>
            <Portada mgPortada={"/Assets/steveA.png"} title={"Road map FrontEnd"} text={"Por Steve 28/11/2024"} />

            <DivArticle>
                <DivContent>
                    <h1>React</h1>

                    <ExtendPanel title='Hooks Basicos'>
                        <p>
                            Introducción a los Hooks
                            ¿Qué son los Hooks?
                            Beneficios de usar Hooks en lugar de componentes de clase.
                            Reglas de los Hooks
                        </p>

                        <p>
                            useState
                            Declarar y usar estados locales.
                            Actualización del estado.
                            Manejo de estados complejos (objetos y arrays).
                            Inicialización perezosa del estado.
                        </p>

                        <p>
                            useEffect
                            Efectos secundarios en componentes funcionales.
                            Dependencias y cómo optimizar las ejecuciones.
                            Limpieza de efectos.
                            Comparación entre `componentDidMount`, `componentDidUpdate` y `componentWillUnmount`.
                        </p>

                        <p>
                            useEffect
                            Efectos secundarios en componentes funcionales.
                            Dependencias y cómo optimizar las ejecuciones.
                            Limpieza de efectos.
                            Comparación entre `componentDidMount`, `componentDidUpdate` y `componentWillUnmount`.
                        </p>

                        <p>
                            useContext
                            Consumir un contexto en componentes funcionales.
                            Comparación entre `useContext` y el componente `Context.Consumer`.
                        </p>

                    </ExtendPanel>

                    <ExtendPanel title='Hooks Adicionales'>
                        <p>
                            useReducer
                            Introducción al patrón de reducer.
                            Comparación entre `useReducer` y `useState`.
                            Uso con estados complejos.
                            Reducer con acciones asíncronas.
                        </p>

                        <p>
                            useRef
                            Referencias mutables y no mutables.
                            Uso para acceder a nodos del DOM.
                            Mantener valores persistentes entre renders sin causar re-renderizaciones.
                        </p>

                        <p>
                            useMemo
                            Memorizar cálculos costosos.
                            Comparación con `useEffect` para optimización de rendimiento.
                            Ejemplos prácticos en tablas y listas grandes.
                        </p>

                    </ExtendPanel>
                    
                </DivContent>
            </DivArticle>
        </>
    )
}

/*
Aquí tienes un **temario completo sobre los Hooks de React**, organizado por nivel de dificultad y funcionalidad. Este temario cubre los conceptos esenciales y avanzados para trabajar eficientemente con Hooks:

---
   - 
   - 
   - 
     - Solo se llaman en el nivel superior.
     - Solo se llaman desde funciones de React.

---

## **2. Hooks Básicos**
   ### 2.1 ``
   - 

   ### 2.2 ``
   

   ### 2.3 ``

---

## **3. Hooks Adicionales**
   

   

   

   ### 3.4 `useCallback`
   - Memorizar funciones para evitar re-renderizaciones innecesarias.
   - Uso combinado con `React.memo`.

   ### 3.5 `useLayoutEffect`
   - Diferencias entre `useEffect` y `useLayoutEffect`.
   - Casos de uso (medir elementos del DOM antes de que se rendericen en pantalla).

   ### 3.6 `useImperativeHandle`
   - Uso con `React.forwardRef`.
   - Control de la exposición de referencias externas.

---

## **4. Hooks Personalizados**
   - ¿Qué son los Hooks personalizados?
   - Creación de un Hook personalizado.
   - Casos de uso comunes:
     - Manejo de formularios.
     - Fetching de datos.
     - Manejo de eventos globales como el tamaño de la ventana o la posición del ratón.
   - Reutilización y separación lógica en componentes grandes.

---

## **5. Patrones Avanzados con Hooks**
   - **Optimización de rendimiento**:
     - Identificar cuándo usar `useMemo` y `useCallback`.
     - Reducir renders innecesarios con `React.memo`.
   - **Combinación de Hooks**:
     - Cómo trabajar con múltiples Hooks en un componente.
   - **Gestión de estados globales**:
     - Uso de Hooks con bibliotecas como Redux o Zustand.
   - **Testing de componentes con Hooks**:
     - Mocking de Hooks como `useState` y `useEffect` en pruebas.
     - Pruebas con `React Testing Library`.

---

## **6. Buenas Prácticas y Errores Comunes**
   - Evitar dependencias incorrectas en `useEffect`.
   - Manejo adecuado del estado inicial en `useState` y `useReducer`.
   - No abusar de `useRef` para manejar estados.
   - Nombrar Hooks personalizados de manera significativa.
   - Cómo depurar componentes que usan Hooks.

---

Con este temario tendrás una guía completa para dominar los Hooks de React desde los fundamentos hasta los casos más avanzados. Puedes abordarlos en el orden que mejor se adapte a tu nivel actual y necesidades específicas.
*/