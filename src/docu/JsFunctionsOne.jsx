import { DivArticle, DivSection, DivContent } from "../componentes/contenedores/contenedores"


export function JsFunctionsOne() {
  return (
    <>
      <DivArticle>
        <DivContent>
          
          <p>
            Cuando trabajas en programacion web te
            toparas con el lenguaje JavaScript y estas
            son algunas de las funciones que mas me han
            servido o que uso mas a menudo para resolver problemas
            en javascript
          </p>

          <p>
            map
            Esta funcion me resulta muy util cuando tengo que recorrer
            respuestas de una api, y sea para acomodar los valores
            que necesito, para hacer validaciones o simplemente para
            realizar un algoritmo
          </p>

          <p>
            filter
            Aunque pueda parecer un meme esta funcion es basicamente un map
            pero con una caracteristica interesante y es que regresa un arrelgo
            con los datos que cumplen la funcion que recibe, esto por ejemplo es
            util cuando tenemos un arreglo de trabajadores y queremos filtrar
            los que tienen un puesto especifico o tambien un nombre
          </p>

          <p>
            includes
            La mayoria de funciones se aplican a los arreglos ya que suelen
            ser un tipo de dato comun cuando se trabaja con aplicaciones web
            y esta es especialmente util cuando se quiere hacer un filtro
            basandonos en dos arreglos ya que esta funcion regresa true si
            algun elemente de su array cumple con la funcion que le pasamos
            como parametro
          </p>

          <p>
            find
            Esat funcion es muy util para buscar un elemento dentro de un array,
            de esta forma podemos obtener el objeto o valor que cumple con la
            condicion que se pasa como parametro
          </p>

          <p>
            operador spreed
          </p>

          <p>
            arrow functions
          </p>

          <p>
            deestruccturacion de objetos
          </p>

          <p>
            regular expresion test()
          </p>

          <p>
            split
          </p>
          
        </DivContent>
      </DivArticle>
    </>
  )
}
