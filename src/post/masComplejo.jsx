import { DivArticle, DivContent, DivSection } from "../componentes/contenedores/contenedores"
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
            Cuando tuve la tarea de hacer una pequeña parte de un compilador me di 
            cuenta de la gran cantidad de problemas a Resolver si querias tener un 
            escaner y un parser mínimamente decente era bastante elevada, cosas como 
            tener que definir Una gramatica, adapatar esa gramática a un automata para 
            que el scanner te proporcione tokens, buscar que la gramática sea LL1 para 
            que se pueda crear una tabla que hará que parser construya un árbol sintactico 
            de manera correcta, leer la tabla de símbolos, hacer el decorado de un tu arbol y 
            luego hacer el código de tres direcciones, todo esto se realizó para una gramatica
            Simple que apenas era un calculadora y luego una version de de java mas reducida.
          </p>

          <p>
            Luego de esto valore mas el trabajo de las personas que crea los compiladores 
            pues poco se decide de su trabajo y es cuando menos una de las tareas mas difíciles 
            de resolver, no por nada el libro de compiladores tiene la imagen de un dragon contra 
            un caballero, esta experiencia me dejo la lección de que no siempre se debe insultar 
            la función de un programa o el trabajo de otros ya que si no quieres tener estos fallos 
            o mala experiencia entonces has tu propio programa
          </p>

          <p>
            No es un mensaje de ofensa ni nada por el estilo, es la verdad, prueba a crear tu 
            propia aplicación ya que de esta ,manera no solo aprenderás como funciona una aplicación 
            y el proceso de crear la misma, lo cual puede ayudarte mucho para mejorar como 
            desarrollador pues sales de tu zona de confort y aprendes algo nuevo.  También  
            descubrirás que el hacer una aplicación lleva su tiempo y ademas tiene una complejidad 
            para la persona que lo desarrolla o incluso el equipo de personas encargados de llevar a 
            cabo una aplicación no tiene una tarea sencilla, por esto es bueno que los usuarios 
            también tomen la inciativa ya que ademas de aprender mas sobre técnicas de software 
            ambién aprendes a valorar mas sobre el trabajo de otras personas al crear una aplicación.
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



