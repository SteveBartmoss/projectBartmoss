import { CodeSpaceV3 } from "../componentes/codeSpace/CodeSpaceV3"
import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores"
import { Divider } from "../componentes/divider/Divider"
import { Portada } from "../componentes/portada/portada"

export function WhatIsGit() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Git el gestor de versiones mas popular"} text={"Por Steve 06/05/2025"} />

      <DivRow>
        <DivCol>

        </DivCol>

        <DivCol>
          <DivArticle>
            <DivContent>

              <h1>Sobre git</h1>

              <p>
                Git es un sistema de control de versiones distribuido que permite a múltiples desarrolladores trabajar en un proyecto de manera colaborativa. 
                Fue creado por Linus Torvalds en 2005, inicialmente para gestionar el desarrollo del kernel de Linux. 
                Git es especialmente útil en proyectos de desarrollo de software porque permite:
              </p>

              <h3>Rastreo de Cambios</h3>

              <p>
                Git guarda un historial de todos los cambios realizados en el código fuente. 
                Cada vez que se hace un cambio, se puede hacer "commit" (confirmar) de ese cambio con un mensaje que describe lo que se hizo. 
                Esto facilita volver a versiones anteriores del proyecto si es necesario.
              </p>

              <h3>Trabajo en Rama</h3>

              <p>
                Git permite crear ramas (branches) del proyecto, lo que significa que puedes desarrollar una característica nueva en una rama separada sin afectar la versión principal del proyecto. 
                Una vez que la nueva característica está completa y probada, se puede fusionar (merge) de nuevo con la rama principal.
              </p>

              <h3>Colaboración</h3>

              <p>
                Varios desarrolladores pueden trabajar en el mismo proyecto al mismo tiempo sin interferir entre sí. 
                Cada desarrollador puede clonar un repositorio (copia local del proyecto), trabajar en él y luego enviar (push) sus cambios de vuelta al repositorio central.
              </p>

              <h3>Distribuido</h3>

              <p>
                A diferencia de otros sistemas de control de versiones que requieren un servidor central, Git es distribuido, lo que significa que cada desarrollador tiene una copia completa del historial del proyecto. 
                Esto mejora la redundancia y permite trabajar sin conexión.
              </p>

              <Divider />

              <h1>Instalacion</h1>

              <h3>Windows</h3>

              <p>
                Para instalar git en un sistema windows debemos ir al siguiente enlace:
              </p>

              <p>
                Una vez que visitamos el enlace basta con descargar el setup para windows y simplemento seguir la tipica instalacion de cualquier programa de windows
              </p>

              <h3>MacOs</h3>

              <p>
                Para instalar git en un sistema de apple es un poco diferente, pues primero nos pide instalar homebrew y luego simplemente tenemos que usar el siguiente comando
              </p>

              <p>
                brew install git
              </p>

              <p>
                Esto nos permite instalar git de una forma rapida y cencilla
              </p>

              <h3>Linux</h3>

              <p>
                En caso de que el sistema operativo sea alguna distro de linux entonces la forma de instalar git puede variar ligeramente, 
                lo mas comun es que se use un gestor de paquetes y basta con un simple comando para instalar el software pero dependiendo 
                de la distribucion este gesto cambia
              </p>

              <h3>Debian y derivados</h3>

              <p>
                Para las distribuciones basadas en debian se puede usar elk siguiente comando para instalar git
              </p>

              <CodeSpaceV3 title={'Comando'} rawCode={`apt-get install git`} />

              <h3>Fedora</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`yum install git\n dnf install git\n`} />

              <h3>Gentoo</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`emerge --ask --verbose dev-vcs/git`} />

              <h3>Arch Linux</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`pacman -S git`} />

              <h3>openSUSE</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`zypper install git`} />

              <h3>Mageia</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`urpmi git`} />

              <h3>Nix/MixOs</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`nix-env -i git`} />

              <h3>FreeBSD</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`pkg install git`} />

              <h3>Solaris 9/10/11(OpenCSW)</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`pkgutil -i git`} />

              <h3>Solaris 11 Express, OpenIndiana</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`pkg install developer/versioning/git`} />

              <h3>OpenBSD</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`pkg_add git`} />

              <h3>Alpine</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`apk add git`} />

              <h3>Red Hat Enterprise Linux, Oracle Linux, CentOS, Scientific Linux, et al.</h3>

              <p>
                RHEL y sus derivados suelen incluir versiones antiguas de git. 
                Puede descargar un tarball y compilar desde el código fuente, o utilizar un repositorio de terceros como 
                el IUS Community Project para obtener una versión más reciente de git.
              </p>

              <h3>Slitaz</h3>

              <CodeSpaceV3 title={'Comando'} rawCode={`tazpkg get-install git`} />

              <Divider />

              <h1>Uso basico de git</h1>

              <h2>Inicializar un repositorio</h2>

              <p>
                Si ya tenemos un proyecto creado, lo mas simple es que inicializemos un repositorio de git con el siguiente comando
              </p>

              <CodeSpaceV3 title={"Comando"} rawCode={`git init`} />

              <p>
                Este comando crea un carpeta con lo necesario para git, (normalmente esta carpeta estara oculta, pero podemos verla de diferentes maneras si es necesario)
              </p>

              <h2>Clonar repositorio desde remoto</h2>

               <p>
                  Si estas trabajando en equipo o si te incorporas a un equipo de desarrollo es probable que tengas que clonar un repositorio 
                  desde un host remoto como puede ser bitbucket, gitlab, github o algun otro host de repositorio. 
                  Para esto solo devemos conseguir la url para clonarlo desde la terminal con el siguiente comando
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git clone 'urlremota'`} />

               <p>
                  Cuando se clona un repositorio remoto, normalmente no es necesario configurar nada de git porque esta misma configuracion 
                  se clona al momento de traer toda la informacion desde el servidor remoto
               </p>

               <h2>Ramas</h2>

               <p>
                  Esta es la ventaja principal por la que se usa un manejador de versiones como git hub ya que imagina la siguiente situacion: 
                  el desarrollador uno cambia el color de la aplicacion a rojo, pero como esa era su unica tarea manda sus archivos al desarrollador dos,
                  el desarrollador dos tenia como tarea crear el menu de la aplicacion asi que no tiene nada para manejar el color. Cuando recibe el codigo 
                  descubre que si remplaza el archivo pierde la configuracion del menu y si en su lugar toma sus archivos pierde la configuracion del color, la 
                  solucion mas simple es mezclar ambos archivos para que nadie pierda informacion pero esto debe realizarlo el desarrollador y puede que le tome 
                  tiempo. 
               </p>

               <p>
                  El ejemplo anterior parece muy simple pero hay que imaginar que un equipo de desarrolladores puede estar conformado por al menos 5 personas 
                  o incluso mas y manejar este tipo de cambio es dificil ya que cada uno tiene una copia del proyecto y tambien trabaja en cosas diferentes. Por esta 
                  misma razon el equipo de desarrollo del kernel linux tomo la tarea de crear git, un manejador de versiones que ayudara a resolver estos problemas de 
                  copias del proyecto.
               </p>

               <p>
                  Una rama es precisamente una copia del proyecto (mostrandolo como de una forma simplicada pero en realidad internamente git trabaja con aputadores y cosas mas complejas) que 
                  cada desarrollador tiene y en la que puede trabajar sin tener que preocuparse por los cambios de los demas, ya que estos tambien estaran trabajando en sus propias copias y se 
                  que parece el mismo concepto que antes pero mas adelante se entiende porque es mas eficiente usar git.
               </p>

               <h2>Listar las ramas existentes</h2>

               <p>
                Para ver las ramas que se tienen el repositorio podemos usar el siguiente comando
               </p>
               
               <CodeSpaceV3 title={"Comando"} rawCode={`git branch`} />

               <p>
                Esto mostrara las listas de ramas de forma local que son las que estan en nuestro equipo pero pueden existir ramas que estan en el servidor remoto
                asi que podemos ver las ramas locales tanto remotas con agregando un parametro al comando anterior
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git branch --all`} />

               <p>
                Ahora la lista de los repositorios se muestra de manera global, las ramas que estan en el servidor remoto deberian aparecer como 
                remote/ seguido la informacion del nombre de la rama
               </p>

               <h2>Crear una rama</h2>

               <p>
                Crear una rama es tan simple como usar el comando
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={` git branch 'nombreRama'`} />

               <p>
                Esto crea una nueva pero si seguimos trabajando con normalidad lo estaremos en la rama original no en la rama nueva, esto es porque git creo la rama pero no nos 
                movimos a la nueva rama, debemos decirle a git que queremos trabajar con la otra rama usando el siguiente comando
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git checkout 'nombreRama'`} />

               <p>
                De esta forma podremos trabajar en la nueva rama, pero existe un forma de crear una rama y movernos a ella cuando se crea usando el siguiente comando
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git checkout -b 'nombreRama'`} />

               <p>
                Por defecto el comando crea la nueva rama a partir de la rama acutal en la que se encuentra el usuario, si se 
                quiere crear una rama nueva tomando como base una rama diferente se puede hacer con el mismo comando pero se debe 
                agregar otro parametro
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git checkout -b 'nombreRama' 'ramaBase'`} />

               <h2>Moverse entre ramas</h2>

               <p>
                Puede que ya estuviera claro pero por si acaso el comando para moverse de una rama 
                a otra es el siguiente
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git checkout 'nombreRama'`} />

               <h2>Confirmar cambios en una rama</h2>

               <p>
                Ahora que tenemos la rama en la que queremos trabajar podemos realizar las 
                modificaciones en el archivo que queremos y cuando guardemos los cambios, podemos 
                confirmar esos cambios en git
               </p>

               <h3>Ver el estatus</h3>

               <p>
                Para poder ver que canbios temos sin agregaer y sin confirmar o por confirmar podemos 
                usar el siguiente comando
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git status`} />

               <p>
                Este comando muestra la lista de cambios que no estan rastreados, normalmente esta lista 
                se mostrara de un color rojo, para agregar esos cambios debemos usar el siguiente comando
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git add 'ruta del archivo'`} />

               <p>
                Con el comando anterior agregamos los cambios pero aun hace falta confirmarlos con el 
                siguiente comando: 
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git commit -m "mensaja si es necesario"`} />

               <p>
                Con el comando anterior confirmamas los cambios que fueron agrados y estan listos para 
                ser enviados al repositorio remoto
               </p>

               <h3>Sincronizar con remoto</h3>

               <p>
                Cuando nuestros cambio ya fueron confirmados podemos hacer push al repositorio 
                remoto con el siguiente comando
               </p>

               <CodeSpaceV3 title={"Comando"} rawCode={`git push`} />

               <p>
                Cuando ejecutamos el comando es probable que nos pida un nombre y el token que la plataforma 
                de githud nos proporciona o en caso de que usemos algun otro host de repositorios no sera 
                necesario pues el repositorio estarua configurado por ssh
               </p>

               <p>
                Con lo anterior ya puedes iniciar con tus primeros pasos en git y experimentar por tu cuenta como 
                es que trabaja esta herramienta de gestion de versiones
               </p>
               
            </DivContent>
          </DivArticle>
        </DivCol>
      </DivRow>
      
    </>
  )
}