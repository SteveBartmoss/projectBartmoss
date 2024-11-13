
export function MapPrototype(){
    return(
        <>
            <h1>Encapsulación</h1>

            <p>
            La encapsulación es el proceso de **agrupar datos y métodos relacionados en una sola unidad, como un objeto o clase, y controlar el acceso a ellos. Esto permite que los detalles internos de una implementación estén protegidos del acceso directo desde el exterior, lo cual ayuda a mantener el código modular y seguro.
            </p>

            <h2>Encapsulación en Objetos</h2>

            <p>
                En JavaScript, los datos y métodos se pueden encapsular dentro de un objeto.
                Las propiedades o métodos que deben permanecer privados suelen declararse usando una convención de subrayado (`_nombrePropiedad`) o el símbolo # en el caso de clases modernas.
            </p>

            <h2>Ejemplo</h2>

            <code>
            const persona = {
                nombre: "Juan",
                _edad: 30, // "Privado" por convención
                obtenerEdad() { return this._edad; },
                setEdad(nuevaEdad) {
                    if (nuevaEdad > 0) this._edad = nuevaEdad;
                }
            };

            </code>

            <h2>Encapsulación en Clases con Campos Privados</h2>

            <p>
                A partir de ES2022, JavaScript permite el uso de **propiedades privadas** con el símbolo `#`.
                Las propiedades privadas solo son accesibles dentro de la clase.
            </p>

            <code>
                class Persona {
                    #edad;
                    constructor(nombre, edad) {
                        this.nombre = nombre;
                        this.#edad = edad;
                    }

                    obtenerEdad() { return this.#edad; }
                    setEdad(nuevaEdad) { if (nuevaEdad > 0) this.#edad = nuevaEdad; }
                }
                const persona = new Persona("Ana", 25);
            </code>

            <h1>Abstracción</h1>

            <p>
                La abstracción es una técnica para **ocultar detalles complejos** y exponer solo las funcionalidades esenciales de un objeto o clase, proporcionando una interfaz simplificada. Esto permite que el usuario del objeto solo necesite entender cómo interactuar con él, sin preocuparse por su implementación interna.
            </p>

            <h2>Abstracción en una Clase</h2>

            <p>
                Imagina una clase que representa una cuenta bancaria, donde los métodos públicos permiten interactuar con la cuenta sin conocer los detalles de cómo se administran los fondos internamente.
            </p>

            <h2>Ejemplo</h2>

            <code>
            class CuentaBancaria {
                #saldo;

                constructor(saldoInicial) {
                    this.#saldo = saldoInicial;
                }

                depositar(monto) {
                    this.#saldo += monto;
                }

                retirar(monto) {
                    if (monto <= this.#saldo) this.#saldo -= monto;
                    else console.log("Fondos insuficientes");
                }

                obtenerSaldo() {
                    return this.#saldo;
                }
            }

                const cuenta = new CuentaBancaria(100);
                cuenta.depositar(50); // Abstracción: el usuario no necesita conocer los detalles de la implementación de depósito
                console.log(cuenta.obtenerSaldo()); // Muestra 150
            </code>

            <h2>Abstracción con Módulos</h2>

            <p>
                JavaScript permite encapsular detalles internos usando módulos ( export e import), ocultando así ciertas funciones o propiedades y exponiendo solo lo necesario.
            </p>

        </>
    )
}

/*


### Herencia
La herencia permite **crear nuevas clases o prototipos basados en una clase o prototipo existente**. La nueva clase o prototipo hereda las propiedades y métodos del “padre”, permitiendo reutilizar código y extender funcionalidades sin duplicación.

1. **Herencia con Clases (`extends`)**:
   - Una clase puede heredar de otra clase utilizando la palabra clave `extends`. Esto permite que la clase “hija” acceda a métodos y propiedades de la clase “padre”.

   **Ejemplo**:
   ```javascript
   class Animal {
       constructor(nombre) {
           this.nombre = nombre;
       }
       hacerSonido() {
           console.log("Este animal hace un sonido");
       }
   }

   class Perro extends Animal {
       hacerSonido() {
           console.log("Guau!"); // Sobreescritura del método
       }
   }

   const miPerro = new Perro("Rex");
   miPerro.hacerSonido(); // "Guau!"
   ```

2. **Beneficios de la Herencia**:
   - Permite **reutilizar código** y facilita la extensión de clases con funcionalidad adicional o más específica.
   - Soporta el principio de **"DRY" (Don't Repeat Yourself)**, ya que evita la duplicación de código.

---

### Polimorfismo
El polimorfismo es la capacidad de **usar un mismo método o interfaz** en diferentes clases, de modo que los objetos respondan a la misma llamada de manera específica según su tipo.

1. **Polimorfismo con Sobreescritura de Métodos**:
   - Como en el ejemplo anterior, una clase “hija” puede **sobreescribir** métodos de la clase “padre” para proveer su propia implementación.

   **Ejemplo**:
   ```javascript
   class Animal {
       hacerSonido() {
           console.log("Sonido genérico");
       }
   }

   class Gato extends Animal {
       hacerSonido() {
           console.log("Miau");
       }
   }

   class Perro extends Animal {
       hacerSonido() {
           console.log("Guau");
       }
   }

   const animales = [new Gato(), new Perro(), new Animal()];
   animales.forEach(animal => animal.hacerSonido()); 
   // "Miau", "Guau", "Sonido genérico"
   ```

2. **Polimorfismo en JavaScript con Interfaces Implícitas**:
   - JavaScript no tiene interfaces explícitas como en otros lenguajes, pero podemos simular el polimorfismo al crear objetos o clases que implementen métodos comunes.

3. **Ventajas del Polimorfismo**:
   - Permite trabajar con objetos de diferentes tipos de forma uniforme, **sin conocer sus implementaciones exactas**.
   - Facilita la extensión de código y permite intercambiar componentes sin modificar el código principal.

---

### Resumen

| Concepto           | Descripción                                                                                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Encapsulación**  | Agrupa datos y métodos, controla su acceso para proteger los datos internos y mejorar la modularidad.                                                           |
| **Abstracción**    | Oculta detalles internos complejos y expone solo la interfaz esencial, simplificando la interacción con los objetos o clases.                                   |
| **Herencia**       | Permite que una clase derive de otra, reutilizando código y extendiendo funcionalidades.                                                                        |
| **Polimorfismo**   | Habilidad para que diferentes objetos respondan al mismo método de manera específica, promoviendo una interfaz uniforme y flexibilidad en el código.            |

Estos cuatro principios trabajan juntos para crear sistemas orientados a objetos organizados y escalables, facilitando el desarrollo y mantenimiento de aplicaciones complejas.

Claro, aquí tienes un desglose detallado para estos conceptos sobre herencia en JavaScript.

---

### Concepto de Herencia en JavaScript

La **herencia** es un principio de la programación orientada a objetos que permite que un objeto o clase "herede" propiedades y métodos de otro objeto o clase. En JavaScript, esto se implementa principalmente a través de **prototipos** y, desde ES6, mediante **clases**. La herencia permite reutilizar y extender el código, lo cual es especialmente útil para crear estructuras jerárquicas de objetos.

1. **Prototipos**:
   - JavaScript utiliza un sistema basado en prototipos, donde cada objeto puede tener un objeto “prototipo” del cual hereda propiedades y métodos.
   - Cuando accedemos a una propiedad o método de un objeto, JavaScript busca en el propio objeto; si no lo encuentra, sigue la cadena de prototipos (prototype chain) hasta encontrarlo o llegar a `null`.

   **Ejemplo de Herencia Prototípica**:
   ```javascript
   const animal = {
       hacerSonido() {
           console.log("Este animal hace un sonido");
       }
   };

   const perro = Object.create(animal); // perro hereda de animal
   perro.hacerSonido(); // "Este animal hace un sonido"
   ```

2. **Cadena de Prototipos (Prototype Chain)**:
   - Esta cadena permite que los objetos puedan acceder a propiedades y métodos definidos en prototipos superiores, siguiendo un camino hasta el prototipo raíz (`Object.prototype`).
   - La herencia prototípica es más flexible que la herencia de clases, ya que podemos cambiar el prototipo de un objeto en tiempo de ejecución.

---

### Uso de `Object.create()`

El método `Object.create(proto)` crea un nuevo objeto que hereda directamente de `proto`, es decir, el nuevo objeto utiliza el objeto `proto` como su prototipo. Esto permite crear una relación de herencia sin usar clases o funciones constructoras.

1. **Crear un Objeto Heredando de Otro**:
   - `Object.create()` es útil para crear objetos basados en un prototipo específico. De esta manera, el objeto creado hereda todas las propiedades y métodos del prototipo dado.

   **Ejemplo**:
   ```javascript
   const vehiculo = {
       mover() {
           console.log("El vehículo se mueve");
       }
   };

   const bicicleta = Object.create(vehiculo);
   bicicleta.mover(); // "El vehículo se mueve"
   ```

2. **Herencia Prototípica Sin Constructor**:
   - Podemos usar `Object.create()` para crear una cadena de prototipos sin necesidad de constructores, lo cual es útil cuando solo se necesitan objetos sin lógica compleja de inicialización.

3. **Añadir Propiedades a los Objetos Creados**:
   - Además de crear el objeto, podemos pasar un segundo parámetro a `Object.create()` para definir propiedades propias específicas para el objeto recién creado.

   **Ejemplo**:
   ```javascript
   const gato = Object.create(animal, {
       sonido: { value: "Miau" }
   });
   console.log(gato.sonido); // "Miau"
   ```

---

### Clases en ES6

Con ES6, JavaScript introdujo una sintaxis más sencilla y familiar para implementar herencia a través de las **clases**. Aunque JavaScript sigue usando el sistema basado en prototipos bajo el capó, la sintaxis de clases facilita la creación y el mantenimiento de estructuras de herencia.

1. **Declaración de una Clase**:
   - Una clase en JavaScript define una plantilla de objeto, permitiendo encapsular propiedades y métodos.
   - Las clases pueden tener un método `constructor` para inicializar propiedades y definir métodos de instancia y estáticos.

   **Ejemplo**:
   ```javascript
   class Animal {
       constructor(nombre) {
           this.nombre = nombre;
       }

       hacerSonido() {
           console.log("Sonido genérico");
       }
   }
   ```

2. **Herencia con `extends`**:
   - Usando la palabra clave `extends`, una clase puede heredar de otra clase, lo que permite que la clase hija acceda a los métodos y propiedades de la clase padre.
   - La clase hija puede sobrescribir métodos de la clase padre e implementar nuevos métodos propios.

   **Ejemplo**:
   ```javascript
   class Perro extends Animal {
       hacerSonido() {
           console.log("Guau");
       }
   }

   const miPerro = new Perro("Rex");
   miPerro.hacerSonido(); // "Guau"
   ```

3. **Super Constructor (`super`)**:
   - En la clase hija, el método `constructor` puede usar `super()` para llamar al constructor de la clase padre. Esto es necesario para inicializar propiedades heredadas antes de agregar propiedades propias de la clase hija.

   **Ejemplo**:
   ```javascript
   class Gato extends Animal {
       constructor(nombre, color) {
           super(nombre); // Llama al constructor de la clase padre
           this.color = color; // Propiedad específica de Gato
       }

       hacerSonido() {
           console.log("Miau");
       }
   }

   const miGato = new Gato("Felix", "negro");
   console.log(miGato.nombre); // "Felix"
   console.log(miGato.color);  // "negro"
   miGato.hacerSonido();       // "Miau"
   ```

4. **Métodos Estáticos**:
   - Los métodos estáticos son definidos en la clase y no en las instancias de la clase. Estos métodos se utilizan para funcionalidades generales que no requieren una instancia.

   **Ejemplo**:
   ```javascript
   class Utilidades {
       static convertirAMayusculas(texto) {
           return texto.toUpperCase();
       }
   }

   console.log(Utilidades.convertirAMayusculas("hola")); // "HOLA"
   ```

---

### Resumen

| Concepto                  | Descripción                                                                                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Herencia Prototípica**  | Mecanismo por el cual los objetos pueden heredar propiedades y métodos de un prototipo.                                                                    |
| **`Object.create()`**     | Método para crear un nuevo objeto que herede de un prototipo específico, facilitando la herencia sin constructores ni clases.                              |
| **Clases en ES6**         | Nueva sintaxis para crear y extender clases, utilizando `extends` para herencia y `super()` para llamar al constructor de la clase padre.                  |
| **Métodos Estáticos**     | Métodos definidos en la clase que no requieren una instancia, útiles para funcionalidades generales no asociadas a una instancia específica de la clase.  |

---

Estas características proporcionan una forma de estructurar el código de manera modular y reutilizable, permitiendo crear jerarquías de objetos y facilitando la reutilización de propiedades y métodos entre clases y objetos.

Claro, aquí tienes una explicación detallada de estos conceptos relacionados con el sistema de prototipos en JavaScript:

---

### Sistema de Prototipos en JavaScript

JavaScript utiliza un sistema de prototipos para implementar herencia, lo que permite que los objetos compartan propiedades y métodos sin necesidad de clases en el sentido tradicional. Cada objeto tiene una referencia interna llamada `[[Prototype]]` que apunta a otro objeto, denominado su **prototipo**. A través de este sistema, JavaScript crea una cadena de prototipos (prototype chain) que permite a los objetos heredar propiedades y métodos de otros objetos.

1. **Referencia `[[Prototype]]`**:
   - La referencia `[[Prototype]]` de un objeto no es accesible directamente, pero se puede observar mediante la propiedad `__proto__` o usando métodos como `Object.getPrototypeOf()`.
   - Cuando intentas acceder a una propiedad o método de un objeto, JavaScript primero la busca en el propio objeto. Si no la encuentra, busca en el prototipo del objeto, y sigue subiendo en la cadena de prototipos hasta llegar al prototipo raíz, `Object.prototype`.

   **Ejemplo de Prototipo Básico**:
   ```javascript
   const animal = {
       tipo: "animal",
       hacerSonido() {
           console.log("Este animal hace un sonido.");
       }
   };

   const perro = Object.create(animal);
   console.log(perro.tipo); // "animal"
   perro.hacerSonido();      // "Este animal hace un sonido."
   ```

   En este ejemplo, `perro` tiene acceso a las propiedades y métodos de `animal` gracias a la referencia `[[Prototype]]`.

---

### Objeto `prototype` en Funciones Constructoras

En JavaScript, las **funciones constructoras** son una manera de crear múltiples instancias de un tipo de objeto. Las funciones constructoras utilizan la propiedad `prototype` para definir métodos y propiedades que serán compartidos entre todas las instancias de ese tipo.

1. **Cómo Funciona `prototype`**:
   - Cuando defines una función constructora, JavaScript asocia automáticamente un objeto `prototype` a la función. Cualquier método o propiedad agregado a `prototype` se compartirá entre todas las instancias creadas con esa función constructora.
   - Esto permite que las instancias no tengan copias individuales de los métodos, lo que ahorra memoria.

   **Ejemplo de Función Constructora con `prototype`**:
   ```javascript
   function Persona(nombre) {
       this.nombre = nombre;
   }

   // Agregamos un método al prototipo de Persona
   Persona.prototype.saludar = function() {
       console.log(`Hola, soy ${this.nombre}`);
   };

   const persona1 = new Persona("Juan");
   const persona2 = new Persona("Ana");

   persona1.saludar(); // "Hola, soy Juan"
   persona2.saludar(); // "Hola, soy Ana"
   ```

   En este ejemplo, `saludar` está en el prototipo `Persona.prototype`, por lo que se comparte entre todas las instancias de `Persona`. Esto es eficiente y permite que todas las instancias puedan acceder al mismo método.

2. **Modificando el Prototipo**:
   - Puedes añadir o modificar propiedades y métodos en el prototipo de una función constructora en cualquier momento. Esto afecta a todas las instancias ya creadas y a las que se crearán en el futuro.

---

### Cadena de Prototipos (Prototypal Chain)

La **cadena de prototipos** es la secuencia de prototipos que JavaScript sigue cuando busca una propiedad o método en un objeto. Si el objeto no tiene la propiedad solicitada, la búsqueda continúa en su prototipo, y así sucesivamente, hasta llegar a `Object.prototype`. Si la propiedad no se encuentra en ninguna parte de la cadena, JavaScript devuelve `undefined`.

1. **Búsqueda en la Cadena de Prototipos**:
   - La cadena de prototipos permite que los objetos "hereden" propiedades y métodos de otros objetos sin duplicar esas propiedades y métodos en cada instancia.
   - La cadena termina en `Object.prototype`, que es el prototipo base de todos los objetos en JavaScript y define métodos generales como `toString()`, `valueOf()`, etc.

   **Ejemplo de Cadena de Prototipos**:
   ```javascript
   const vehiculo = {
       moverse() {
           console.log("El vehículo se mueve");
       }
   };

   const coche = Object.create(vehiculo);
   coche.tipo = "Automóvil";

   const miCoche = Object.create(coche);
   console.log(miCoche.tipo); // "Automóvil"
   miCoche.moverse();         // "El vehículo se mueve"
   ```

   En este caso:
   - `miCoche` no tiene el método `moverse`, pero lo encuentra en `vehiculo`, que está en la cadena de prototipos de `miCoche`.
   - La cadena es `miCoche -> coche -> vehiculo -> Object.prototype`.

2. **Uso de `Object.getPrototypeOf()` y `Object.setPrototypeOf()`**:
   - `Object.getPrototypeOf(obj)` permite obtener el prototipo de un objeto.
   - `Object.setPrototypeOf(obj, proto)` permite establecer manualmente el prototipo de un objeto, aunque no es una práctica recomendada por temas de rendimiento.

   **Ejemplo**:
   ```javascript
   console.log(Object.getPrototypeOf(miCoche) === coche); // true
   ```

3. **Sobrescritura en la Cadena de Prototipos**:
   - Si defines una propiedad en un objeto que existe en su prototipo, el motor de JavaScript utilizará la propiedad local, ignorando la versión en el prototipo. Esto permite a los objetos “sobrescribir” métodos o propiedades heredados.

   **Ejemplo de Sobrescritura**:
   ```javascript
   miCoche.moverse = function() {
       console.log("El coche se mueve rápido");
   };
   miCoche.moverse(); // "El coche se mueve rápido"
   ```

---

### Resumen

| Concepto                   | Descripción                                                                                                                                                                |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Referencia `[[Prototype]]`**   | Cada objeto tiene una referencia interna a otro objeto (su prototipo), permitiendo herencia de propiedades y métodos a través de la cadena de prototipos.                   |
| **Objeto `prototype`**          | Objeto asociado a funciones constructoras que permite compartir métodos y propiedades entre todas las instancias creadas con esa función.                              |
| **Cadena de Prototipos**         | Serie de enlaces entre objetos prototipos que permite buscar propiedades y métodos a través de múltiples niveles de herencia, desde el objeto hasta `Object.prototype`. |

Este sistema de prototipos es fundamental para entender cómo funciona la herencia en JavaScript, facilitando el uso compartido de código y la creación de objetos de forma eficiente.

*/