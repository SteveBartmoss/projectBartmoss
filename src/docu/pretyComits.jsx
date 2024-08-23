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

<p>
    Conventional Commits es una convención para escribir mensajes de commit de forma estructurada y estandarizada. Esta convención permite a los equipos de desarrollo mantener un historial de commits claro y coherente, facilitando la comprensión del código, el control de versiones y la automatización en procesos como el versionado semántico y la generación de changelogs.
</p>

<p>
    Reglas para Redactar un Buen Commit Usando Conventional Commits

    Formato Básico:

    Cada commit debe seguir el siguiente formato:
    <type>[optional scope]: <description>

    [optional body]

    [optional footer(s)]

    type: Es un tipo obligatorio que indica la naturaleza del cambio.

    scope: (Opcional) Indica la parte del proyecto afectada por el commit.

    description: Es una descripción corta y concisa del cambio.

    body: (Opcional) Explicación más detallada del cambio.

    footer: (Opcional) Información adicional, como referencias a tickets o breaking changes.
</p>

<p>
  Tipos Comunes de Commits:

  feat: Introducción de una nueva funcionalidad.

  Ejemplo: feat: add user authentication

  fix: Corrección de un bug.

  Ejemplo: fix: resolve issue with user login

  docs: Cambios en la documentación.

  Ejemplo: docs: update API documentation for login endpoint

  style: Cambios que no afectan la lógica del código, solo el formato (espacios, comas, etc.).

  Ejemplo: style: format code with prettier

  refactor: Cambio en el código que no añade funcionalidad nueva ni corrige un error.

  Ejemplo: refactor: optimize authentication flow

  test: Añadir o modificar pruebas.

  Ejemplo: test: add unit tests for login service

  chore: Actualización de tareas de construcción, configuración de herramientas, etc.

  Ejemplo: chore: update dependencies

  perf: Mejoras en el rendimiento.

  Ejemplo: perf: improve database query performance

  build: Cambios que afectan el sistema de construcción o dependencias externas.

  Ejemplo: build: update webpack to version 5

  ci: Cambios en la configuración de integración continua.

  Ejemplo: ci: update GitHub Actions workflow
</p>
