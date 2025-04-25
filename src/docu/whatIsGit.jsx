import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function WhatIsGit() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"El hook Context en react"} text={"Por Steve 03/09/2024"} />

      <DivRow>
        <DivCol>

        </DivCol>

        <DivCol>
          <DivArticle>
            <DivContent>
              <p>
                Git es un sistema de control de versiones distribuido que permite a múltiples desarrolladores trabajar en un proyecto de manera colaborativa. Fue creado por Linus Torvalds en 2005, inicialmente para gestionar el desarrollo del kernel de Linux. Git es especialmente útil en proyectos de desarrollo de software porque permite:
              </p>

              <p>
                Rastreo de Cambios: Git guarda un historial de todos los cambios realizados en el código fuente. Cada vez que se hace un cambio, se puede "commit" (confirmar) ese cambio con un mensaje que describe lo que se hizo. Esto facilita volver a versiones anteriores del proyecto si es necesario.
              </p>

              <p>
                Trabajo en Rama: Git permite crear ramas (branches) del proyecto, lo que significa que puedes desarrollar una característica nueva en una rama separada sin afectar la versión principal del proyecto. Una vez que la nueva característica está completa y probada, se puede fusionar (merge) de nuevo con la rama principal.
              </p>

              <p>
                Colaboración: Varios desarrolladores pueden trabajar en el mismo proyecto al mismo tiempo sin interferir entre sí. Cada desarrollador puede clonar un repositorio (copia local del proyecto), trabajar en él y luego enviar (push) sus cambios de vuelta al repositorio central.
              </p>

              <p>
                Distribuido: A diferencia de otros sistemas de control de versiones que requieren un servidor central, Git es distribuido, lo que significa que cada desarrollador tiene una copia completa del historial del proyecto. Esto mejora la redundancia y permite trabajar sin conexión.
              </p>

              <h2>Instalacion</h2>

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

              <p>
                apt-get install git
              </p>

              <h3>Fedora</h3>

              <p>
                yum install git
                dnf install git
              </p>

              <h3>Gentoo</h3>

              <p>
                emerge --ask --verbose dev-vcs/git
              </p>

              <h3>Arch Linux</h3>

              <p>
                pacman -S git
              </p>

              <h3>openSUSE</h3>

              <p>
                zypper install git
              </p>

              <h3>Mageia</h3>

              <p>
                urpmi git
              </p>

            </DivContent>
          </DivArticle>
        </DivCol>
      </DivRow>
      
    </>
  )
}