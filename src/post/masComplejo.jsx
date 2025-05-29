import { DivArticle, DivContent } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"


export function MasComplejo() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Hazlo tu mismo"} text={"Por Steve 21/08/2024"} />

      <DivArticle>
        <DivContent>
          <p>
            Desde que empece a programar notaba algunas cosas que no me gustaban
            o que criticaba por la forma en que funcionan, por ejemplo, solia decir
            frases como “si el compilador sabe que falta un punto y coma porque no lo
            Agrega y ya” o también me quejaba porque la respuesta sobre el error
            que me daba el compilador era muy pobre o simplemente no me daba una buena idea
            de que era lo que esta fallando.
          </p>

          <p>
            Como puedes estar pensando yo no tenia idea de como funcionaba un compilador
            y mucho menos tenia idea del trabajo que hay detras de un compilador, por esta
            razon me quejaba tanto de la forma en que trabaja un compilador o funciones de
            programacion pero puede decir que nunca estuve tan equivocado en mi vida.
            Cuando tuve que tomar una clase de automatas y el proyecto principal fue recrear
            un compilador simple para una implementacion reducida del lenguaje java supe que
            habia jusgado demasiado a los compiladores que ya utilizaba en mi dia a dia.
          </p>

          <h2>Crees que algo no funciona bien, quizas no sabes tanto sobre el tema</h2>

          <p>
            La primeras cosas que note al enfrentar la tarea de crear un compilador
            fue la gran cantidad de problemas a resolver si querias tener un
            escaner y un parser mínimamente decente eran muchos y ademas no resultaban
            tareas trivales si no que eran bastante complejos, cosas como
            tener que definir Una gramatica, adapatar esa gramática a un automata para
            que el scanner te proporcione tokens, buscar que la gramática sea LL1 para
            que se pueda crear una tabla que hará que el parser construya un árbol sintactico
            de manera correcta, leer la tabla de símbolos, hacer el decorado de un tu arbol y
            luego hacer el código de tres direcciones. Aunque parece que la lista es corta solo
            uno de esos problemas lleva bastante programacion y logica para que funciones, pero aun
            asi todo esto se realizó para una gramatica simple que apenas era un calculadora
            y luego una version de de java mas reducida.
          </p>

          <h2>No te gusta un programa, bueno crea uno propio</h2>

          <p>
            No trato de ofender a nadie si no que se trata de una recomendacion, prueba a crear tu
            propia aplicación para que ahora si todo sea de tu agrado o funcione como esperas. De esta manera
            no solo aprenderás como funciona una aplicación y el proceso de crear la misma, lo cual puede
            ayudarte mucho para mejorar como desarrollador pues sales de tu zona de confort y aprendes algo nuevo.
            También descubrirás que hacer una aplicación lleva su tiempo y sus propios desafios, no solo se trata
            de pedirle a la computadora lo que quieres y por arte de magia todo estara resuelto, se tiene
            que crear toda la pila de tecnologia necesaria para la aplicacion, base de datos, servidores,
            backend, front end y al final toda la logica del funcionamiento.
          </p>

          <p>
            Todo esto puede llevarte desde unas pocas
            horas o hasta meses dependiendo de la persona que lo desarrolla o incluso el equipo de personas
            encargadas de llevar a cabo una aplicación, por esto es bueno que los usuarios también tomen la inciativa
            de crear sus propias aplicaciones. No solo aprenderas mas sobre software y programacion que sera
            bueno como expereincia, también aprendes a valorar mas sobre el trabajo de otras personas que crean
            las aplicaciones que usas a diario.
          </p>

          <h2>Quizas fui muy duro con el programa que no funciona como quiero</h2>

          <p>
            Luego de ver como era todo el trabajo que habia detras de un compilador valore mas el trabajo de 
            las personas que crean este tipo de software pues la mayoria ignora todo esto y es una de las tareas 
            mas difíciles de resolver, no por nada el libro de compiladores tiene la imagen de un dragon contra
            un caballero. Ahora habia aprendido la lección de que no siempre se debe insultar la función de un programa 
            o el trabajo de otros, detras de todo esto hay un gran prpoblema que alguien tuvo que resolver y lo mas 
            seguro es que no fuera nada facil, si aun asi crees que se puede mejorar o que algo no se trabajo de la mejor 
            manera entonces puede probar a crear tu propia libreria, programa o aplicacion.
          </p>

          <p>
            Es por eso que ahora trato de entender mejor la complejidad del software que uso y como
            es el proceso de crear aplicaciones para poder valorar mas cuando una aplicación me
            ofrece una interfaz agradable, amigable o funcionalidades complejas que me facilitan
            el trabajo, ya que detrás de eso hay una persona que hizo un gran esfuerzo para
            completar la tarea
          </p>
          
        </DivContent>
      </DivArticle>
    </>
  )
}



