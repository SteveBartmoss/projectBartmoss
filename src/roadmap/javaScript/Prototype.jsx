
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
        </>
    )
}

/*



1. **

   **Ejemplo**:
   ```javascript
   
   ```

2. **Encapsulación en Clases con Campos Privados**:
   - A partir de ES2022, JavaScript permite el uso de **propiedades privadas** con el símbolo `#`.
   - Las propiedades privadas solo son accesibles dentro de la clase.

   **Ejemplo**:
   ```javascript
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
   ```

---

### Abstracción
La abstracción es una técnica para **ocultar detalles complejos** y exponer solo las funcionalidades esenciales de un objeto o clase, proporcionando una interfaz simplificada. Esto permite que el usuario del objeto solo necesite entender cómo interactuar con él, sin preocuparse por su implementación interna.

1. **Ejemplo de Abstracción en una Clase**:
   - Imagina una clase que representa una cuenta bancaria, donde los métodos públicos permiten interactuar con la cuenta sin conocer los detalles de cómo se administran los fondos internamente.

   **Ejemplo**:
   ```javascript
   class CuentaBancaria {
       #saldo; // Propiedad privada

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
   ```

2. **Abstracción con Módulos**:
   - JavaScript permite encapsular detalles internos usando módulos (`export` e `import`), ocultando así ciertas funciones o propiedades y exponiendo solo lo necesario.

---

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

*/