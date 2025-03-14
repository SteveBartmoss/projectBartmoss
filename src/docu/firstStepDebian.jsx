import { DivArticle, DivContent } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"


export function FirstStepDebian() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Mejorar debian"} text={"Por Steve 27/08/2024"} />

      <DivArticle>
        <DivContent>
          <p>
            Cuando instalas la distribucion de debian
            hay ciertas cosas que se deben hacer para
            que el uso de esta nueva distribucion sea mas
            simple o efectiva.
          </p>

          <p>
            Por defecto debian no agrega tu usuario como
            super usuario asi que si queremos hacer la
            tipica rutina de sudo apt update y sudo apt upgrade
            ya que en este caso nuestro usuario no es esta en el grupo
            de root asi que tendremo que usar el comando sudo su para
            que poder correr comandos como super usuario
          </p>

          <p>
            Podemos resolver esto de una forma simple agregando nuestro
            usuario al grupo lo cual se puede hacer de la siguiente manera.
            Primero tenemos que modificar el archivo de super usuario
            el cual esta en la siguiente ubicacion /etc/sudoers
          </p>

          <p>
            Si nos movimos al directorio etc, solo tenemos que usar
            el comando nano sudoers lo cual permite que el editor de terminal
            nano edite el archivo y podamos agregar debajo del apartado User
            privilege specification lo siguiente:
          </p>

          <p>
            miusuario ALL=(ALL:ALL) ALL
          </p>

          <p>
            Anadir usuario al grupo Sudo
          </p>

          <p>
            Para esto podemos usar el siguiente comando:
          </p>

          <p>
            sudo usermod -aG sudo miusuario
          </p>

          <p>
            Para comprobar que el usuario forma parte del grupo sudo se puede usar el siguiente comando
          </p>

          <p>
            groups miusuario
          </p>

          <p>
            Esto mostrara lso grupos a los que pertenece el usuario que especificamos en el comando groups
          </p>

          <p>
            Tener esta configuracion hara que sea mas comodo instalar programas o realizar
            modificaciones desde la terminal y conseder permisos con nuestro usuario
          </p>

          <p>
            Otro de las cosas que podemos hacer para mejorar el uso del es instalar
            algunas extensiones para mejorar ciertas funciones del sistema
          </p>

          <p>
            Las extensiones no son unicamente del sistema debian, si no que se
            aplican al entorno de escritorio que se llama gnome, en este caso
            se deberian poder instalar las extensiones si usas otra distribucion
            pero el mismo entorno de escritorio que es gnome
          </p>

          <p>
            Para poder instalar esto tenemos que tener instalado el gesto de
            extensiones el cual podemos obtenerlo de una forma simple
            si vamos a la tienda de debian y buscamos extensiones
          </p>

          <p>
            Si prefieres la vieja escuela puedes instalar el gestor de extensiones usando
            el siguiente comando
          </p>

          <p>
            sudo apt install gnome-shell-extension-prefs
          </p>

        </DivContent>
      </DivArticle>
      
    </>
  )
}

















