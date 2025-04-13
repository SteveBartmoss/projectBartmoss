import { CodeSpace } from "../componentes/codeSpace/CodeSpace";
import { DivArticle, DivCol, DivContent, DivRow, DivSection } from "../componentes/contenedores/contenedores"
import { Lista } from "../componentes/lista/Lista"
import { Portada } from "../componentes/portada/portada"
import { TreeMap } from "../componentes/treeMap/TreeMap";

export function PretyCommits() {

  const listaTipos = [
    "type: Es un tipo obligatorio que indica la naturaleza del cambio.",
    "scope: (Opcional) Indica la parte del proyecto afectada por el commit.",
    "description: Es una descripción corta y concisa del cambio.",
    "body: (Opcional) Explicación más detallada del cambio.",
    "footer: (Opcional) Información adicional, como referencias a tickets o breaking changes."
  ];

  const pageMap = [
    {
      id: 1,
      section: 'Conventional Commits',
      childs:[
        {
          titulo: 'Descripcion',
          id: 'coventionalComits',
        }, 
        {
          titulo: 'Formato Básico',
          id: 'formatoBasico'
        },
        {
          titulo: 'Detalle de elementos',
          id: 'elementosDetalle'
        }
      ]
    },
    {
      id: 2,
      section: 'Relacionado con codigo',
      childs: [
        
        {
          titulo: 'feat', 
          id: 'feat',
        },
        {
          titulo: 'fix', 
          id: 'fix',
        },
        {
          titulo: 'docs', 
          id: 'docs',
        },
        {
          titulo: 'style', 
          id: 'style',
        },
        {
          titulo: 'refactor', 
          id: 'refactor',
        },
      ],
    },
    {
      id: 3,
      section: 'Relacionado con servidor',
      childs: [
        {
          titulo: 'test', 
          id: 'test',
        },
        {
          titulo: 'chore', 
          id: 'chore',
        },
        {
          titulo: 'perf', 
          id: 'perf',
        },
        {
          titulo: 'build', 
          id: 'build',
        },
        {
          titulo: 'ci', 
          id: 'ci',
        }
      ],
    },
  ]

  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Prety Commits"} text={"Por Steve 21/08/2024"} />

      <DivRow>

        <DivCol>
          <TreeMap titulo={'Mapa del Sitio'} elementos={pageMap} />
        </DivCol>

        <DivCol>
          <DivArticle>
            <DivContent>

              <h1>Mejorar tus commits</h1>

              <p>
                Cuando se trabaja con un proyecto de software ya sea
                de manera independiente, colaborando en un proyecto de
                codigo abierto o en una empresa es casi seguro que usen
                un manejador de versiones como lo es git, lo cual no es
                precisamente el tema de este post pero si tiene relacion
                y es que los commits pueden ser algo serio
              </p>

              <p>
                Cuando trabajamos en nuestro propio repositorio puede que
                no sigamos un orden claro a la hora de hacer commits y
                es que realmente los unicos que vemos estos mensajes somos
                nosotros mismos, lo cual hace que pensemos que no tiene sentido
                organizar los mensajes de los commits pero esto puede cambiar cuando
                trabajamos con un grupo de personas
              </p>

              <h2 id="coventionalComits">Conventional Commits</h2>

              <p>
                Conventional Commits es una convención para escribir mensajes de
                commit de forma estructurada y estandarizada. Esta convención permite
                a los equipos de desarrollo mantener un historial de commits claro y
                coherente, facilitando la comprensión del código, el control de versiones
                y la automatización en procesos como el versionado semántico y la generación
                de changelogs.
              </p>

              <h2>Reglas para Redactar un Buen Commit Usando Conventional Commits</h2>

              <h3 id="formatoBasico">Formato Básico</h3>

              <p>
                Cada commit debe seguir el siguiente formato:
              </p>

              <CodeSpace title={"Formato basico"} rawCode={`<type> [optional scope]: <description> 
              [optional body]
              [optional footer(s)]`} />

              <Lista elementos={listaTipos} />

              <h2 id='elementosDetalle'>Detalle de los elementos</h2>

              <h3>Uso del Scope</h3>

              <p>
                scope es opcional, pero útil para indicar qué parte del proyecto se vio afectada.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`feat(auth): add JWT token verification`} />

              <h3>Descripción</h3>

              <p>
                La descripción debe ser breve, clara y en tiempo presente.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`fix: correct validation logic in login form`} />

              <h3>Cuerpo del Commit (Opcional)</h3>

              <p>
                Proporciona detalles adicionales si es necesario.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`fix: correct validation logic in login form
              The previous logic did not account for edge cases where the user inputs special characters. This change introduces a regex to handle these cases correctly.`} />

              <h3>Footer (Opcional)</h3>

              <p>
                Se usa para referencias a tickets (por ejemplo, Jira, GitHub Issues) o para indicar cambios importantes.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`BREAKING CHANGE: the login API now requires an email instead of username
              Closes #123`} />

              <h2>Tipos Comunes de Commits:</h2>

              <h3 id="feat">feat</h3>

              <p>
                Introducción de una nueva funcionalidad.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`feat: add user authentication`} />

              <h3 id="fix">fix</h3>

              <p>
                Corrección de un bug.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`fix: resolve issue with user login`} />

              <h3 id="docs">docs</h3>

              <p>
                Cambios en la documentación.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`docs: update API documentation for login endpoint`} />

              <h3 id='style'>style</h3>

              <p>
                Cambios que no afectan la lógica del código, solo el formato (espacios, comas, etc.).
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`style: format code with prettier`} />

              <h3 id="refactor">refactor</h3>

              <p>
                Cambio en el código que no añade funcionalidad nueva ni corrige un error.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`refactor: optimize authentication flow`} />

              <h3 id="test">test</h3>

              <p>
                Añadir o modificar pruebas.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`test: add unit tests for login service`} />

              <h3 id="chore">chore</h3>

              <p>
                Actualización de tareas de construcción, configuración de herramientas, etc.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`chore: update dependencies`} />

              <h3 id='perf'>perf</h3>

              <p>
                Mejoras en el rendimiento.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`perf: improve database query performance`} />

              <h3 id="build">build</h3>

              <p>
                Cambios que afectan el sistema de construcción o dependencias externas.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`build: update webpack to version 5`} />

              <h3 id="ci">ci</h3>

              <p>
                Cambios en la configuración de integración continua.
              </p>

              <CodeSpace title={'Ejemplo'} rawCode={`ci: update GitHub Actions workflow`} />

              <p>
                Conventional Commits proporciona una manera estándar y estructurada de redactar mensajes de commit, lo que facilita la colaboración, el mantenimiento del código, y la automatización de procesos. Al seguir estas reglas, puedes asegurarte de que los commits sean claros, concisos y útiles para cualquier persona que trabaje en el proyecto.
              </p>

            </DivContent>
          </DivArticle>
        </DivCol>
      </DivRow>

    </>
  )
}



