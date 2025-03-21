import { DivArticle, DivContent, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function PilaSinFin() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Pila sin fin"} text={"Por Steve 22/08/2024"} />

      <DivArticle>
        <DivContent>

          <h2>Un poco de todo, mucho de nada</h2>

          <p>
            Cuando comienzas a estudiar programación, no eres capaz de ver 
            todo lo que aún no abarcas sobre el tema. De alguna manera, la pila 
            de tecnologías crece demasiado rápido, y las curvas de aprendizaje 
            no siempre son amigables. Antes de enfocarme en el desarrollo web, 
            solo conocía tres lenguajes: Java, C y C++. No dominaba ninguno, pero 
            al menos me centraba en aprender Java. Luego de esto, aprendí sobre bases 
            de datos, un poco de ensamblador en las clases de lenguajes de interfaz, y 
            después pasé por el desafiante mundo de PHP. Llegué al extraño universo de 
            JavaScript, donde todo parece existir y no existir a la vez, y finalmente 
            tuve que aprender Python para un proyecto de inteligencia artificial.
          </p>

          <h2>Cambio de paradigma</h2>

          <p>
            Si bien solo pasé de manera superficial por estos lenguajes, 
            empezó a preocuparme la cantidad de tecnologías que existían y 
            que yo desconocía. Pero todo cambiaría cuando la "nación de la web" 
            atacó. Había aprendido un poco sobre la creación de páginas web con HTML 
            y CSS, pero eso solo me permitía crear páginas estáticas, similares 
            a lo que se encontraba en el internet de los 80. Así que tuve que 
            adentrarme en una nueva dimensión, una en la que todo el mundo hacía 
            su aporte, pero donde los estándares parecían haber desaparecido. Tenía 
            que entrar en el mundo de los frameworks.
          </p>

          <p>
            Lo primero que me causó confusión fue la necesidad de separar el programa 
            en dos partes: el frontend y el backend. Hasta ese momento, no usaba esta 
            separación en los programas que solía crear, y dividirlos en dos partes 
            diferentes no tenía mucho sentido para mí. Pero eso no era todo. 
            Hasta entonces, un solo lenguaje era capaz de crear tanto la interfaz de 
            usuario como de manejar la información de la base de datos. Sin embargo, 
            ahora tenía que aprender una forma de trabajo para el backend y otra para 
            el frontend.
          </p>

          <p>
            Yo no entendía por qué necesitaba tener el proyecto dividido en dos partes, 
            lo cual me obligaba a aprender dos cosas diferentes. Para este momento, ya 
            tenía más elementos que agregar a la pila de tecnologías que debía aprender. 
            Además de esto, comenzaban a aparecer nuevas exigencias, como la dockerización, 
            las pruebas unitarias, las bases de datos no relacionales, los manejadores de estado, 
            el web hosting, AWS y muchas otras tecnologías que me abrumaban, pues parecía que la 
            lista de cosas por aprender no tenía fin.
          </p>

          <h2>No debes ser omnipresente</h2>

          <p>
            Para este punto, sé que podrías pensar que no es necesario tener todos 
            esos conocimientos, ya que no todos los lenguajes que aparecen deben ser 
            aprendidos ni necesitamos convertirnos en expertos en ellos. Eso es algo 
            que ahora entiendo, pero aun así, es intimidante ver cómo la pila tecnológica 
            crece tan rápido y cómo el cambio puede ser lento o, en algunos casos, no ser 
            aceptado. Muchas empresas se resisten a cambiar su pila de tecnologías y prefieren 
            mantener sus sistemas, lanzando parches para hacer que su código siga funcionando.
          </p>

        </DivContent>
      </DivArticle>
    </>
  )
}
