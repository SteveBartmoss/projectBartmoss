import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function Vimgg() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Vimgg guia para mostales"} text={"Por Steve 03/11/2024"} />

            <DivSection>
                <DivArticle>

                    <p>
                        Empezar a utilizar vim no es un camino facil
                        pero aprender nuevas cosas resulta interesante y ademas te puede dar
                        una nueva herramienta para futuros proyectos o simplemente para poder
                        variar el entorno de trabajo y poder elegir de otras opciones
                    </p>

                    <h2>¿Porque aprender vim?</h2>

                    <p>
                        Aunque puede parecer que este tipo de programas solo perjudica a
                        los usuarios en lugar de ayudarlos la realidad es que si puede llegar
                        a ser una buena herramienta para los desarrolladores ya que por ejemplo
                        si estuvieras trabajando en un servidor al cual solo es accesible desde
                        ssh, como podemos editar un archivo que se encuentra en el servidor sin
                        tener la posibilidad de usar un edutor como vscode o sublime text?
                    </p>

                    <p>
                        Puede que esta situacion no sea tan creible pero incluso si estuvieramos
                        en la sala del servidor es comun que el servidor no tenga la pantalla ni siquiera
                        mucho menos teclado y raton pero en el caso de que estos elementos estuvieran precentes
                        pot alguna razon, muchos servidores ahorran recursos y no tienen entorno
                        grafico ya que el usuario normalmente no vera esto asi que aun cuando
                        quisieramos acceder al servidor como una maquina de escritorio, no tenemos
                        otra opcion mas que usar el terminal.
                    </p>

                </DivArticle>
            </DivSection>
            <p>









                En estos casos es donde aprender una herramienta como vim puede ser de
                de ayuda.

                ¿Que es vim?

                Vim es un editor de codigo de pero con una caracteristica interesante y
                es que principalmente se usa en una cli o (interfaz de linea de comandos)
                que basicamente es una terminal de computadora, se creo de esa manera pues
                en el tiempo en que se creo las computadoras no solina tener interfaces
                graficas como ahora si no que solo se tenia una terminal de comandos.

                Por esta razon es que se creo un programa como vin ya que aun no habia
                tantos programas con interfaz grafica y tampoco muchos editores de texto
                asi que este programa fue de gran utilidad para ese entonces.

                Installas vim

                Si usas una distribucion de tipo unix como puede ser linux puede que
                ya este instalado por lo que podemos simplemente ejecutar el comando vim
                en la terminal y que el programa se ejecute, pero en caso de que no se
                encuentre instalado podemos usar los siguientes comandos para instalar vim

                Si usamos una ditribucion derivada de debian
                sudo apt install vim

                Si usamos fedora
                sudo dnf install vim

                si usamos arch linux
                pacman -S vim

                Si queremos usar la version de snap
                sudo snap install vim-editor --beta

                En caso de que tengamos windows podemos instalarlos desde la pagina
                oficial https://www.vim.org/download.php#pc

                Cuando instalamos el ejecutable podemos ver que existen dos  versiones
                que se instalaron vim y gvim

                Gvim es una version grafica de vim lo que quiere decir que no se ejecuta
                en la consola si no que se ejecuta como un programa independiente y por esta
                razon es que se considera GUI o que tiene una interfaz de grafica de usuario.

                En caso de que tengamos un sistema con MacOs podemos instalarlo desde el
                siguiente enlace de su pagina oficial https://www.vim.org/download.php#mac

                En general seria buena idea solo usar las versiones de terminal pero si
                se desea usar las versiones graficas no existe problema

                Ejecutando Vim

                Para correr el programa de vim simplemente debemos ejecutar el comando vim

                Una vez que ejecutamos este comando podemos ver que en la terminal aparecen
                unas letras que indican que estamos en  Vi IMproved que es el programa que
                queremos usar, cuando estemos en esta pantalla notaremos algo raro y es que
                lo que escribimos no se ve reflejado en la pantalla pero esto es algo normal
                ya que por defecto el modo de vim no es insertar y por esta razon no podemos
                escribir o mas bien no se refleja lo que estamos escribiendo.

                Para poder entrar en el modo de insertar tenemos que pulsar la tecla i
                lo cual nos coloca en el modo insertar y esto lo podemos ver en la parte
                inferior izquierda de la terminal en la que veremos la leyenda -- INSERT --
                en esto modo ya podemos escribir y ver reflejado lo que escribimos

                Este modo seria uno de los mas usados ya que lo usamos cuando escribimos, en el
                cual tambien pedemos recorrer el contenido del texto usando las flechas de movimiento
                del teclado.

                Esto ultimo es importante ya que el mouse no podra tener control sobre el cursor del
                editor de texto ya que aunque hagamos click en alguna parte de la terminal el cursor no
                se movera hacia esa posicion, ya que la unica manera de mover el cursor es usando las teclas
                de direccion o las letras h,j,k o l, la razon de usar las teclas h,j,k,l es porque
                las personas que usan mecanografia pueden usar estas teclas una formas eficiente.
            </p>
        </>
    )
}


