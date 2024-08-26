import { DivArticle, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function PilaSinFin() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Vida Desconectado"} text={"Por Steve 22/08/2024"} />

      <DivSection>
        <DivArticle>
          
          <p>
            Cuando comienzas a estudiar programación, no eres capaz de ver todo lo que aún no abarcas sobre el tema. De alguna manera, la pila de tecnologías crece demasiado rápido, y las curvas de aprendizaje no siempre son amigables. Antes de enfocarme en el desarrollo web, solo conocía tres lenguajes: Java, C y C++. No dominaba ninguno, pero al menos me centraba en aprender Java. Luego de esto, aprendí sobre bases de datos, un poco de ensamblador en las clases de lenguajes de interfaz, y después pasé por el desafiante mundo de PHP. Llegué al extraño universo de JavaScript, donde todo parece existir y no existir a la vez, y finalmente tuve que aprender Python para un proyecto de inteligencia artificial.
          </p>

          <p>
            Si bien solo pase de manera superficial por esto lenguajes si empezo a
            preocuparme la cantidad de tecnologias que existian y que yo desconocia
            pero todo cambiaria cuando la nacion de la web ataco, si bien habia
            aprendido un poco de creacion de paginas web con el uso de htlm y css
            esto solo permitia crear paginas estaticas que eran lo mas parecido a
            lo que se encontraba en el internet de los 80, asi que tenia que entrar
            a otra nueva dimension una en la que todo el mundo daba su aporte pero
            los estandares habian desaparecido, tenia que entrar al mundo de los
            frameworks.
          </p>

          <p>
            Lo primero que me causo confusion era la necesidad de separar
            el programa en dos partes, el frontend y el backend ya que hasta el
            momento no usaba esta separacion para los programas que solia crear
            y tener que separarlo en dos diferentes no me daba mucho sentido
            pero eso no era todo, hasta el momento un solo lenguaje era capas
            de crear tanto la interfaz de usuario como traer la informaicon
            de la base de datos pero ahora eso habia terminado tenia que aprender
            una forma de trabajo para backend y otra para frontend.
          </p>

          <p>
            Yo no entendia porque necesitava tener el proyecto dividido en dos
            partes lo cual me daba la tarea de aprender dos cosas diferentes
            y para este momento ya tenia mas cosas que agregar a la pila de tecnologias
            que tenia que aprender, ademas de esto empezaban a llegar mas cosas
            como dockerizacion, pruebas unitarias, bases no relacionales, manejadores
            de estado, web hosting, aws y muchas otras tecnologias que me abrumaban
            pues parecia no tener la cantidad de cosas que tenia que aprender
          </p>

          <p>
            Para este punto se que pensaras que no es necesario tener todos
            esos conocimientos, ya que no todos los lenguajes que salen deben
            ser aprendidos o tenemos que volvernos expertos en ellos y eso
            actualmente lo entiendo pero aun asi es algo intimidante que la
            pila cresca tan rapido y que ademas el cambio pueda ser lento o que
            en algunos casos no se acepte el cambio pues muchas empresas se
            reusan a cambiar su pila de tecnologias y prefieren quedarse con
            sus sistemas y solamente seguir lanzando parches para hacer funcionar
            su codigo.
          </p>

        </DivArticle>
      </DivSection>
    </>
  )
}
