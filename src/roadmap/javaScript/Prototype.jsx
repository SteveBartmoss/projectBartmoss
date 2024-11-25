
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

            <h1>Herencia</h1>

            <p>
                La herencia permite crear nuevas clases o prototipos basados en una clase o prototipo existente. La nueva clase o prototipo hereda las propiedades y métodos del padre, permitiendo reutilizar código y extender funcionalidades sin duplicación.
            </p>

            <h2>Herencia con Clases (extends)</h2>

            <p>
            Una clase puede heredar de otra clase utilizando la palabra clave extends. Esto permite que la clase hija acceda a métodos y propiedades de la clase padre.
            </p>

            <h2>Ejemplo</h2>

            <code>
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
                        console.log("Guau!");
                    }
                }
         
                const miPerro = new Perro("Rex");
                miPerro.hacerSonido();
            </code>

            <h2>Beneficios de la Herencia</h2>

            <p>
                Permite reutilizar código y facilita la extensión de clases con funcionalidad adicional o más específica.
                Soporta el principio de DRY (Don't Repeat Yourself), ya que evita la duplicación de código.
            </p>

            <h1>Polimorfismo</h1>

            <p>
                El polimorfismo es la capacidad de **usar un mismo método o interfaz** en diferentes clases, de modo que los objetos respondan a la misma llamada de manera específica según su tipo.
            </p>

            <h2>Polimorfismo con Sobreescritura de Métodos</h2>

            <p>
                Como en el ejemplo anterior, una clase hija puede sobreescribir métodos de la clase padre para proveer su propia implementación.
            </p>

            <code>
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
            </code>

            <h2>Polimorfismo en JavaScript con Interfaces Implícitas</h2>

            <p>
                JavaScript no tiene interfaces explícitas como en otros lenguajes, pero podemos simular el polimorfismo al crear objetos o clases que implementen métodos comunes.
            </p>

            <h2>Ventajas del Polimorfismo</h2>

            <p>
                Permite trabajar con objetos de diferentes tipos de forma uniforme, **sin conocer sus implementaciones exactas**.
                Facilita la extensión de código y permite intercambiar componentes sin modificar el código principal.
            </p>

            <h1>Concepto de Herencia en JavaScript</h1>

            <p>
                La herencia es un principio de la programación orientada a objetos que permite que un objeto o clase herede propiedades y métodos de otro objeto o clase. En JavaScript, esto se implementa principalmente a través de prototipos y, desde ES6, mediante clases. La herencia permite reutilizar y extender el código, lo cual es especialmente útil para crear estructuras jerárquicas de objetos.
            </p>

            <h2>Prototipos</h2>

            <p>
                JavaScript utiliza un sistema basado en prototipos, donde cada objeto puede tener un objeto “prototipo” del cual hereda propiedades y métodos.
                Cuando accedemos a una propiedad o método de un objeto, JavaScript busca en el propio objeto; si no lo encuentra, sigue la cadena de prototipos (prototype chain) hasta encontrarlo o llegar a `null`.
            </p>

            <code>
                const animal = {
                    hacerSonido() {
                        console.log("Este animal hace un sonido");
                    }
                };
                const perro = Object.create(animal); // perro hereda de animal
                perro.hacerSonido(); // "Este animal hace un sonido"
            </code>

            <h2>Cadena de Prototipos (Prototype Chain)</h2>

            <p>
                Esta cadena permite que los objetos puedan acceder a propiedades y métodos definidos en prototipos superiores, siguiendo un camino hasta el prototipo raíz (`Object.prototype`).
                La herencia prototípica es más flexible que la herencia de clases, ya que podemos cambiar el prototipo de un objeto en tiempo de ejecución.
            </p>

            <h1>Uso de Object.create()</h1>

            <p>
                El método Object.create(proto) crea un nuevo objeto que hereda directamente de proto, es decir, el nuevo objeto utiliza el objeto `proto` como su prototipo. Esto permite crear una relación de herencia sin usar clases o funciones constructoras.
            </p>

            <h2>Crear un Objeto Heredando de Otro</h2>

            <p>
                Object.create() es útil para crear objetos basados en un prototipo específico. De esta manera, el objeto creado hereda todas las propiedades y métodos del prototipo dado.
            </p>

            <code>
                const vehiculo = {
                    mover() {
                        console.log("El vehículo se mueve");
                    }
                };
            
                const bicicleta = Object.create(vehiculo);
                bicicleta.mover();
            </code>

            <h2>Herencia Prototípica Sin Constructor</h2>

            <p>
                Podemos usar Object.create() para crear una cadena de prototipos sin necesidad de constructores, lo cual es útil cuando solo se necesitan objetos sin lógica compleja de inicialización.
            </p>

            <h2>Añadir Propiedades a los Objetos Creados</h2>

            <p>
                Además de crear el objeto, podemos pasar un segundo parámetro a Object.create() para definir propiedades propias específicas para el objeto recién creado.
            </p>

            <code>
                const gato = Object.create(animal, {
                    sonido: { value: "Miau" }
                });
                console.log(gato.sonido);
            </code>

            <h1>Clases en ES6</h1>

            <p>
                Con ES6, JavaScript introdujo una sintaxis más sencilla y familiar para implementar herencia a través de las clases. Aunque JavaScript sigue usando el sistema basado en prototipos bajo el capó, la sintaxis de clases facilita la creación y el mantenimiento de estructuras de herencia.
            </p>

            <h2>Declaración de una Clase</h2>

            <p>
                Una clase en JavaScript define una plantilla de objeto, permitiendo encapsular propiedades y métodos.
                Las clases pueden tener un método `constructor` para inicializar propiedades y definir métodos de instancia y estáticos.
            </p>

            <code>
                class Animal {
                    constructor(nombre) {
                        this.nombre = nombre;
                    }

                    hacerSonido() {
                        console.log("Sonido genérico");
                    }
                }
            </code>

            <h2>Herencia con extends</h2>

            <p>
                Usando la palabra clave extends, una clase puede heredar de otra clase, lo que permite que la clase hija acceda a los métodos y propiedades de la clase padre.
                La clase hija puede sobrescribir métodos de la clase padre e implementar nuevos métodos propios.
            </p>

            <code>
                class Perro extends Animal {
                    hacerSonido() {
                        console.log("Guau");
                    }
                }
            
                const miPerro = new Perro("Rex");
                miPerro.hacerSonido();
            </code>

            <h2>Super Constructor (super)</h2>

            <p>
                En la clase hija, el método constructor puede usar super() para llamar al constructor de la clase padre. Esto es necesario para inicializar propiedades heredadas antes de agregar propiedades propias de la clase hija.
            </p>

            <code>
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
                console.log(miGato.nombre);
                console.log(miGato.color);
                miGato.hacerSonido();
            </code>

            <h2>Métodos Estáticos</h2>

            <p>
                Los métodos estáticos son definidos en la clase y no en las instancias de la clase. Estos métodos se utilizan para funcionalidades generales que no requieren una instancia.
            </p>

            <code>
                class Utilidades {
                    static convertirAMayusculas(texto) {
                        return texto.toUpperCase();
                    }
                }
            
                console.log(Utilidades.convertirAMayusculas("hola")); // "HOLA"
            </code>

            <h1>Sistema de Prototipos en JavaScript</h1>

            <p>
                JavaScript utiliza un sistema de prototipos para implementar herencia, lo que permite que los objetos compartan propiedades y métodos sin necesidad de clases en el sentido tradicional. Cada objeto tiene una referencia interna llamada `[[Prototype]]` que apunta a otro objeto, denominado su **prototipo**. A través de este sistema, JavaScript crea una cadena de prototipos (prototype chain) que permite a los objetos heredar propiedades y métodos de otros objetos.
            </p>

            <h2>Referencia Prototype</h2>

            <p>
                La referencia Prototype de un objeto no es accesible directamente, pero se puede observar mediante la propiedad proto o usando métodos como Object.getPrototypeOf().
                Cuando intentas acceder a una propiedad o método de un objeto, JavaScript primero la busca en el propio objeto. Si no la encuentra, busca en el prototipo del objeto, y sigue subiendo en la cadena de prototipos hasta llegar al prototipo raíz, Object.prototype.
            </p>

            <code>
                const animal = {
                    tipo: "animal",
                    hacerSonido() {
                        console.log("Este animal hace un sonido.");
                    }
                };
            
                const perro = Object.create(animal);
                console.log(perro.tipo);
                perro.hacerSonido();
            </code>

            <p>
                En este ejemplo, perro tiene acceso a las propiedades y métodos de animal gracias a la referencia Prototype.
            </p>

            <h1>Objeto prototype en Funciones Constructoras</h1>

            <p>
                En JavaScript, las funciones constructoras son una manera de crear múltiples instancias de un tipo de objeto. Las funciones constructoras utilizan la propiedad `prototype` para definir métodos y propiedades que serán compartidos entre todas las instancias de ese tipo.
            </p>

            <h2>Cómo Funciona prototype</h2>

            <p>
                Cuando defines una función constructora, JavaScript asocia automáticamente un objeto prototype a la función. Cualquier método o propiedad agregado a prototype se compartirá entre todas las instancias creadas con esa función constructora.
                Esto permite que las instancias no tengan copias individuales de los métodos, lo que ahorra memoria.
            </p>

            <h2>Ejemplo de Función Constructora con prototype</h2>

            <code>
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
            </code>

            <p>
                En este ejemplo, saludar está en el prototipo Persona.prototype, por lo que se comparte entre todas las instancias de Persona. Esto es eficiente y permite que todas las instancias puedan acceder al mismo método.
            </p>

            <h2>Modificando el Prototipo</h2>

            <p>
                Puedes añadir o modificar propiedades y métodos en el prototipo de una función constructora en cualquier momento. Esto afecta a todas las instancias ya creadas y a las que se crearán en el futuro.
            </p>

            <h1>Cadena de Prototipos (Prototypal Chain)</h1>

            <p>
                La cadena de prototipos es la secuencia de prototipos que JavaScript sigue cuando busca una propiedad o método en un objeto. Si el objeto no tiene la propiedad solicitada, la búsqueda continúa en su prototipo, y así sucesivamente, hasta llegar a Object.prototype. Si la propiedad no se encuentra en ninguna parte de la cadena, JavaScript devuelve undefined.
            </p>

            <h2>Búsqueda en la Cadena de Prototipos</h2>

            <p>
                La cadena de prototipos permite que los objetos hereden propiedades y métodos de otros objetos sin duplicar esas propiedades y métodos en cada instancia.
                La cadena termina en Object.prototype, que es el prototipo base de todos los objetos en JavaScript y define métodos generales como toString(), valueOf(), etc.
            </p>

            <code>
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
            </code>

            <p>
                En este caso:
                miCoche no tiene el método moverse, pero lo encuentra en vehiculo, que está en la cadena de prototipos de miCoche.
                La cadena es miCoche -> coche -> vehiculo -> Object.prototype.
            </p>

            <h2>Uso de Object.getPrototypeOf() y Object.setPrototypeOf()</h2>
            
            <p>
                Object.getPrototypeOf(obj) permite obtener el prototipo de un objeto.
                Object.setPrototypeOf(obj, proto) permite establecer manualmente el prototipo de un objeto, aunque no es una práctica recomendada por temas de rendimiento.
            </p>

            <code>
                console.log(Object.getPrototypeOf(miCoche) === coche); // true
            </code>

            <h2>Sobrescritura en la Cadena de Prototipos</h2>

            <p>
                Si defines una propiedad en un objeto que existe en su prototipo, el motor de JavaScript utilizará la propiedad local, ignorando la versión en el prototipo. Esto permite a los objetos “sobrescribir” métodos o propiedades heredados.
            </p>

            <code>
                miCoche.moverse = function() {
                    console.log("El coche se mueve rápido");
                };
                miCoche.moverse(); // "El coche se mueve rápido"
            </code>

            <h1>Diferencia entre Prototipos e Instancias</h1>

            <p>
                En JavaScript, el sistema de **prototipos** permite que los objetos compartan métodos y propiedades comunes, mientras que cada instancia de un objeto puede tener propiedades exclusivas. 
            </p>

            <h2>Prototipos</h2>

            <p>
                Los prototipos actúan como plantillas. Cuando un objeto se crea a partir de un prototipo (o clase), hereda todos los métodos y propiedades del prototipo.
                Los métodos y propiedades definidas en el prototipo son **compartidos** entre todas las instancias, lo cual ahorra memoria, ya que no se crean múltiples copias del mismo método o propiedad en cada instancia.
            </p>

            <h2>Instancias</h2>

            <p>
                Una instancia es un objeto creado con una función constructora o clase.
                Las propiedades propias de cada instancia (definidas en el constructor) son exclusivas de esa instancia y no se comparten.
                Cada instancia tiene acceso a los métodos del prototipo, pero también puede definir sus propios métodos o sobrescribir los métodos heredados si es necesario.
            </p>

            <h2>Ejemplo de Prototipo e Instancia</h2>

            <code>
                function Persona(nombre, edad) {
                    this.nombre = nombre;
                    this.edad = edad;
                }
                
                Persona.prototype.saludar = function() {
                    console.log(`Hola, soy ${this.nombre}`);
                };
                
                const juan = new Persona("Juan", 25);
                const ana = new Persona("Ana", 30);
                
                juan.saludar();
                ana.saludar();
            </code>

            <p>
                En este ejemplo:
                nombre y edad son propiedades propias de cada instancia (juan, ana), y cada instancia tiene su propio valor de estas propiedades.
                saludar es un método compartido definido en el prototipo Persona.prototype, por lo que todas las instancias de Persona (como juan y ana) pueden usar el mismo método sin crear una copia en cada instancia.
            </p>

            <h1>Métodos Compartidos: Ventajas de Definir Métodos en el Prototipo</h1>

            <p>
                Cuando defines métodos en el prototipo en lugar de dentro del constructor o de cada instancia, obtienes varias ventajas:
            </p>

            <h2>Eficiencia de Memoria</h2>

            <p>
                Los métodos definidos en el prototipo existen solo una vez en la memoria, y todas las instancias comparten el mismo método. Esto es mucho más eficiente que tener una copia del método en cada instancia.
            </p>

            <h2>Facilidad de Actualización</h2>

            <p>
                Si actualizas un método en el prototipo, todas las instancias que comparten ese prototipo automáticamente ven el cambio, lo cual es útil para mantener el código más fácil de actualizar y menos propenso a errores.
            </p>

            <h2>Separación de Propiedades y Métodos</h2>

            <p>
                Colocar propiedades en la instancia y métodos en el prototipo mantiene una separación lógica entre los datos de una instancia y las acciones que puede realizar, haciendo el código más legible y organizado.
            </p>

            <h2>Ejemplo de Método Compartido</h2>

            <code>
                function Coche(marca, modelo) {
                    this.marca = marca;
                    this.modelo = modelo;
                }

                // Método compartido en el prototipo
                Coche.prototype.mostrarDetalles = function() {
                    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
                };

                const coche1 = new Coche("Toyota", "Corolla");
                const coche2 = new Coche("Honda", "Civic");

                coche1.mostrarDetalles();
                coche2.mostrarDetalles();
            </code>

            <p>
                En este caso:
                mostrarDetalles está en el prototipo, por lo que solo se define una vez en la memoria y es accesible para todas las instancias (coche1 y coche2).
                Si necesitas actualizar el método mostrarDetalles, puedes hacerlo directamente en el prototipo y todas las instancias verán el cambio automáticamente.
            </p>

            <h1>Instancias</h1>

            <p>
                Cuando creas una instancia con una función constructora o clase, esa instancia tiene propiedades únicas (definidas en el constructor), pero también hereda los métodos y propiedades del prototipo. Esto permite que cada instancia mantenga sus propios datos mientras usa métodos compartidos de manera eficiente.
            </p>

            <h2>Creación de Instancias</h2>

            <p>
                Puedes crear instancias usando `new` con una función constructora o usando la sintaxis de clases en ES6. En ambos casos, las propiedades exclusivas se definen en el constructor, mientras que los métodos compartidos se definen en el prototipo.
            </p>

            <h2>Propiedades Propias vs. Métodos Compartidos</h2>

            <p>
                Las propiedades exclusivas de cada instancia permiten que cada objeto tenga su propio estado (por ejemplo, un nombre, una edad, o una posición específica).
                Los métodos en el prototipo proporcionan funcionalidad común para todas las instancias, evitando duplicar código.
            </p>

            <h2>Ejemplo con Clases</h2>

            <code>
                class Animal {
                    constructor(tipo, nombre) {
                        this.tipo = tipo;
                        this.nombre = nombre;
                    }

                    presentarse() {
                        console.log(`Soy un ${this.tipo} llamado ${this.nombre}`);
                    }
                }

                const perro = new Animal("Perro", "Rex");
                const gato = new Animal("Gato", "Miau");

                perro.presentarse();
                gato.presentarse();
            </code>

            <p> 
                En este ejemplo:
                tipo y nombre son propiedades propias, únicas para cada instancia (perro y gato).
                presentarse es un método en el prototipo (Animal.prototype), compartido por todas las instancias de Animal.
            </p>

            <h1>Extensión de prototipos</h1>

            <p>
                La extensión de prototipos consiste en agregar métodos o propiedades al prototipo de una función constructora para que todas las instancias de esa función compartan dichos métodos o propiedades.
            </p>

            <h2>Cómo extender un prototipo</h2>

            <code>
                function Person(name) {
                    this.name = name;
                }

                Person.prototype.greet = function() {
                    return `Hello, my name is ${this.name}`;
                };
            
                const person1 = new Person("Alice");
                console.log(person1.greet());
            </code>

            <h2>Ventajas</h2>

            <p>
                Eficiencia: Los métodos agregados al prototipo no se duplican en cada instancia, ahorrando memoria.
                Consistencia: Todas las instancias tienen acceso al mismo método o propiedad.
            </p>

            <h2>Consideraciones</h2>

            <p>
                Es preferible modificar el prototipo antes de crear instancias para evitar inconsistencias.
                Agregar métodos directamente al prototipo es útil para objetos creados con funciones constructoras o clases.
            </p>

            <h1>Extender tipos nativos</h1>

            <p>
                Se refiere a agregar métodos o propiedades al prototipo de tipos integrados como `Array`, `String`, `Object`, etc.
            </p>

            <h2>Ejemplo</h2>

            <code>
                Array.prototype.first = function() {
                    return this[0];
                };

                const numbers = [1, 2, 3];
                console.log(numbers.first());
            </code>

            <h2>Ventajas</h2>

            <p>
                Reutilización: Permite crear utilidades útiles y reutilizables para todos los objetos de un tipo.
                Consistencia: Una vez definido, el método está disponible globalmente.
            </p>

            <h2>Riesgos</h2>

            <p>
                Conflictos: Si otras bibliotecas o scripts también modifican el prototipo, puede haber colisiones.
                Compatibilidad: Los navegadores modernos o futuras actualizaciones de JavaScript podrían implementar un método con el mismo nombre, causando comportamientos inesperados.
                Impacto global: Las modificaciones afectan a todo el entorno, lo que puede generar errores difíciles de depurar.
            </p>

            <h1>Compatibilidad y conflictos</h1>

            <h2>Problemas comunes</h2>

            <p>
                Colisiones: Dos bibliotecas diferentes podrían intentar agregar un método al mismo prototipo con el mismo nombre pero con comportamientos diferentes.
                Incompatibilidad: Si un método modificado o agregado no se comporta como los usuarios esperan, puede romper la funcionalidad de otros scripts.
            </p>

            <h2>Evitar conflictos</h2>

            <p>
                Utilizar nombres únicos o prefijos para métodos personalizados:
            </p>

            <code>
                 Array.prototype.myCustomFirst = function() {
                    return this[0];
                };
            </code>

            <p>
                Verificar si el método ya existe antes de agregarlo:
            </p>

            <code>
                if (!Array.prototype.first) {
                    Array.prototype.first = function() {
                        return this[0];
                    };
                }
            </code>

            <h2>Uso en entornos compartidos</h2>

            <p>
                Restringir modificaciones de prototipos a entornos controlados.
                Asegurarse de documentar las modificaciones para evitar problemas en equipos o con bibliotecas.
            </p>

            <h2>Alternativas modernas</h2>

            <p>
                Usar clases o funciones utilitarias para encapsular lógica sin modificar prototipos globales.
            </p>

            <code>
                class ArrayUtils {
                    static first(arr) {
                        return arr[0];
                    }
                }

                console.log(ArrayUtils.first([1, 2, 3])); 
            </code>

            <h1>Herencia prototipal</h1>

            <h2>¿Qué es la herencia prototipal?</h2>

            <p>
                Es un mecanismo en JavaScript donde los objetos pueden heredar propiedades y métodos de otros objetos a través de la cadena de prototipos.
            </p>

            <h2>Crear herencia prototipal con Object.create</h2>

            <p>
                Este método permite crear un objeto que hereda directamente de otro.
            </p>

            <code>
                const animal = {
                    eat: function() {
                        console.log("Eating...");
                    },
                    sleep: function() {
                        console.log("Sleeping...");
                    }
                };
            
                const dog = Object.create(animal);
                dog.bark = function() {
                    console.log("Woof!");
                };
            
                dog.eat();
                dog.bark();
            </code>

            <h2>Ventajas<h2/>

            <p>
                Permite compartir métodos y propiedades entre objetos.
                Ahorra memoria porque los métodos compartidos se almacenan en el prototipo.
            </p>

            <h2>Consideraciones</h2>

            <p>
                Las propiedades heredadas no se copian, sino que se acceden a través de la cadena de prototipos.
                Cambiar una propiedad en el prototipo afecta a todos los objetos que lo heredan.
            </p>


            <h1>Clases en ES6</h1>

            <p>
                Las clases proporcionan una sintaxis más estructurada para trabajar con la herencia.
            </p>

            <code>
                class Animal {
                    constructor(name) {
                        this.name = name;
                    }

                    eat() {
                        console.log(`${this.name} is eating.`);
                    }
                }

                class Dog extends Animal {
                    constructor(name, breed) {
                        super(name); // Llama al constructor de la clase base
                        this.breed = breed;
                    }

                    bark() {
                        console.log(`${this.name} says Woof!`);
                    }
                }

                const myDog = new Dog("Rex", "Labrador");
                myDog.eat(); // Rex is eating. (heredado de Animal)
                myDog.bark(); // Rex says Woof! (propio de Dog)
            </code>

            <h2>extends y super</h2>

            <p>
                extends: Define que una clase hereda de otra.
                super: Llama al constructor o métodos de la clase padre.
            </p>

            <h2>Ventajas de las clases</h2>

            <p>
                Más legibles y estructuradas.
                Mejor compatibilidad con otras herramientas y librerías modernas.
            </p>

            <h1>Prototipos heredados</h1>

            <h2>Cadena de prototipos en herencia</h2>

            <p>
                En JavaScript, las clases y objetos están conectados a través de una cadena de prototipos. Al buscar una propiedad o método:
                Primero se verifica en el objeto actual.
                Si no se encuentra, se busca en el prototipo padre.
            </p>

        </>
    )
}

/*

---

### Resumen

| Concepto           | Descripción                                                                                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Encapsulación**  | Agrupa datos y métodos, controla su acceso para proteger los datos internos y mejorar la modularidad.                                                           |
| **Abstracción**    | Oculta detalles internos complejos y expone solo la interfaz esencial, simplificando la interacción con los objetos o clases.                                   |
| **Herencia**       | Permite que una clase derive de otra, reutilizando código y extendiendo funcionalidades.                                                                        |
| **Polimorfismo**   | Habilidad para que diferentes objetos respondan al mismo método de manera específica, promoviendo una interfaz uniforme y flexibilidad en el código.            |

Estos cuatro principios trabajan juntos para crear sistemas orientados a objetos organizados y escalables, facilitando el desarrollo y mantenimiento de aplicaciones complejas.

### Resumen

| Concepto                  | Descripción                                                                                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Herencia Prototípica**  | Mecanismo por el cual los objetos pueden heredar propiedades y métodos de un prototipo.                                                                    |
| **`Object.create()`**     | Método para crear un nuevo objeto que herede de un prototipo específico, facilitando la herencia sin constructores ni clases.                              |
| **Clases en ES6**         | Nueva sintaxis para crear y extender clases, utilizando `extends` para herencia y `super()` para llamar al constructor de la clase padre.                  |
| **Métodos Estáticos**     | Métodos definidos en la clase que no requieren una instancia, útiles para funcionalidades generales no asociadas a una instancia específica de la clase.  |

---

Estas características proporcionan una forma de estructurar el código de manera modular y reutilizable, permitiendo crear jerarquías de objetos y facilitando la reutilización de propiedades y métodos entre clases y objetos.


### Resumen

| Concepto                   | Descripción                                                                                                                                                                |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Referencia `[[Prototype]]`**   | Cada objeto tiene una referencia interna a otro objeto (su prototipo), permitiendo herencia de propiedades y métodos a través de la cadena de prototipos.                   |
| **Objeto `prototype`**          | Objeto asociado a funciones constructoras que permite compartir métodos y propiedades entre todas las instancias creadas con esa función.                              |
| **Cadena de Prototipos**         | Serie de enlaces entre objetos prototipos que permite buscar propiedades y métodos a través de múltiples niveles de herencia, desde el objeto hasta `Object.prototype`. |

Este sistema de prototipos es fundamental para entender cómo funciona la herencia en JavaScript, facilitando el uso compartido de código y la creación de objetos de forma eficiente.

---

### Resumen

| Concepto                   | Descripción                                                                                                    |
|----------------------------|----------------------------------------------------------------------------------------------------------------|
| **Prototipos**             | Estructuras que definen métodos y propiedades comunes compartidos entre instancias, ahorrando memoria y código. |
| **Instancias**             | Objetos creados a partir de una función constructora o clase que contienen propiedades exclusivas.             |
| **Métodos Compartidos**    | Métodos definidos en el prototipo, compartidos entre todas las instancias, mejorando eficiencia y mantenimiento. |
| **Propiedades Propias**    | Propiedades definidas en el constructor que son exclusivas para cada instancia, permitiendo datos individuales.  |

Este enfoque facilita la organización del código y permite que JavaScript implemente herencia de una manera eficiente y flexible.

---

4. **Mejor práctica:**
   - Evitar modificar prototipos de tipos nativos en la mayoría de los casos.
   - Utilizar métodos de utilidad en lugar de modificar prototipos nativos.

   **Ejemplo mejorado (sin modificar prototipos):**
   ```javascript
   const first = (arr) => arr[0];
   console.log(first([1, 2, 3])); // 1
   ```
---

### 

2. **Ejemplo de prototipos en herencia:**
   ```javascript
   function Animal(name) {
       this.name = name;
   }

   Animal.prototype.eat = function() {
       console.log(`${this.name} is eating.`);
   };

   function Dog(name, breed) {
       Animal.call(this, name); // Heredar propiedades
       this.breed = breed;
   }

   Dog.prototype = Object.create(Animal.prototype); // Heredar métodos
   Dog.prototype.constructor = Dog; // Restaurar constructor
   Dog.prototype.bark = function() {
       console.log(`${this.name} says Woof!`);
   };

   const myDog = new Dog("Buddy", "Golden Retriever");
   myDog.eat(); // Buddy is eating.
   myDog.bark(); // Buddy says Woof!
   ```

3. **Cómo se conectan los prototipos:**
   - `Dog.prototype` hereda de `Animal.prototype`.
   - Métodos como `eat` están disponibles en todos los objetos `Dog` porque se encuentran en la cadena de prototipos.

4. **Clases vs prototipos:**  
   - Las clases en ES6 son una capa sintáctica sobre los prototipos.
   - Aunque internamente usan prototipos, las clases hacen que la herencia sea más intuitiva y legible.

---

### **Resumen:**

| Tema                  | Descripción                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Herencia prototipal** | Usar prototipos para compartir métodos y propiedades entre objetos.        |
| **Clases en ES6**      | Sintaxis moderna para implementar herencia con `extends` y `super`.         |
| **Prototipos heredados** | Los métodos se buscan en la cadena de prototipos, conectando subclases y superclases. |

Estos conceptos permiten implementar herencia de forma flexible, aprovechando las características únicas de JavaScript.

### **Uso del constructor padre: Llamada al constructor del objeto o clase padre desde la subclase usando `super`**

1. **¿Qué es el constructor padre?**  
   Es el constructor definido en la clase base (o padre), responsable de inicializar las propiedades comunes a todas las instancias, incluyendo las subclases.

2. **¿Qué hace `super`?**  
   - Es una función especial que llama al constructor de la clase padre desde una subclase.
   - Debe llamarse antes de usar `this` en el constructor de una subclase.

3. **Ejemplo básico:**
   ```javascript
   class Animal {
       constructor(name) {
           this.name = name;
       }
   }

   class Dog extends Animal {
       constructor(name, breed) {
           super(name); // Llama al constructor de Animal
           this.breed = breed; // Inicializa propiedades específicas de Dog
       }
   }

   const myDog = new Dog("Rex", "Labrador");
   console.log(myDog.name); // Rex
   console.log(myDog.breed); // Labrador
   ```

4. **Ventajas de `super`:**
   - Permite inicializar propiedades comunes sin duplicar lógica.
   - Facilita la reutilización del código de la clase base.

---

### **Configuración de propiedades heredadas: Cómo inicializar las propiedades del constructor padre en una subclase**

1. **Herencia de propiedades:**
   - Las subclases heredan las propiedades definidas en el constructor padre.
   - Estas propiedades deben configurarse llamando al constructor del padre con `super`.

2. **Ejemplo práctico:**
   ```javascript
   class Vehicle {
       constructor(brand, wheels) {
           this.brand = brand;
           this.wheels = wheels;
       }
   }

   class Car extends Vehicle {
       constructor(brand, wheels, model) {
           super(brand, wheels); // Inicializa propiedades de Vehicle
           this.model = model; // Inicializa propiedad específica de Car
       }
   }

   const myCar = new Car("Toyota", 4, "Corolla");
   console.log(myCar.brand); // Toyota (heredada de Vehicle)
   console.log(myCar.wheels); // 4 (heredada de Vehicle)
   console.log(myCar.model); // Corolla (propiedad de Car)
   ```

3. **Consideraciones:**
   - Si la subclase no tiene un constructor explícito, JavaScript llama automáticamente al constructor del padre.
   - Las subclases pueden agregar propiedades adicionales sin interferir con las heredadas.

---

### **Superclase y subclase: Definir y diferenciar entre una clase base (padre) y una clase derivada (hija)**

1. **Superclase:**
   - Es la clase padre que contiene la lógica y propiedades comunes que otras clases pueden heredar.
   - Se define como cualquier clase estándar.

   **Ejemplo:**
   ```javascript
   class Animal {
       constructor(name) {
           this.name = name;
       }

       speak() {
           console.log(`${this.name} makes a sound.`);
       }
   }
   ```

2. **Subclase:**
   - Es una clase hija que extiende la funcionalidad de la clase padre.
   - Se define con la palabra clave `extends`.

   **Ejemplo:**
   ```javascript
   class Dog extends Animal {
       speak() {
           console.log(`${this.name} barks.`);
       }
   }

   const myDog = new Dog("Buddy");
   myDog.speak(); // Buddy barks.
   ```

3. **Diferencias clave:**
   | **Superclase**           | **Subclase**                    |
   |--------------------------|---------------------------------|
   | Define las propiedades y métodos básicos. | Hereda y expande las propiedades y métodos. |
   | No requiere `extends`.                   | Necesita usar `extends` para heredar.       |
   | Se enfoca en lo general.                 | Agrega lógica específica a lo heredado.     |

4. **Relación entre superclase y subclase:**
   - Las subclases tienen acceso a los métodos de la superclase.
   - Las subclases pueden sobrescribir métodos heredados para proporcionar implementaciones específicas.

---

### **Resumen:**

| Tema                           | Descripción                                                                                            |
|--------------------------------|--------------------------------------------------------------------------------------------------------|
| **Uso del constructor padre**  | `super` permite llamar al constructor de la superclase para inicializar propiedades heredadas.         |
| **Configuración de propiedades heredadas** | Las propiedades del constructor padre se pueden inicializar y complementar en la subclase.           |
| **Superclase y subclase**      | La superclase define lógica general, mientras que la subclase hereda y personaliza esta lógica.        |

Estos conceptos permiten estructurar el código en JavaScript de manera más clara y reutilizable, aprovechando al máximo la herencia y la encapsulación.

### **Sobrescribir métodos: Cómo una subclase puede redefinir los métodos heredados de una superclase**

1. **¿Qué significa sobrescribir un método?**  
   Una subclase redefine un método de la superclase para proporcionar una implementación personalizada, reemplazando el comportamiento original.

2. **Ejemplo básico:**
   ```javascript
   class Animal {
       speak() {
           console.log("The animal makes a sound.");
       }
   }

   class Dog extends Animal {
       speak() {
           console.log("The dog barks.");
       }
   }

   const myDog = new Dog();
   myDog.speak(); // The dog barks.
   ```

3. **Características clave:**
   - La subclase puede reemplazar completamente el método de la superclase.
   - Si el método no se sobrescribe, se utiliza el método heredado.

---

### **Uso de `super.methodName()`: Llamada al método de la superclase desde la subclase para extender la funcionalidad**

1. **¿Qué es `super.methodName()`?**  
   - Permite llamar al método de la superclase dentro de la subclase.
   - Se usa para extender el comportamiento original sin reemplazarlo por completo.

2. **Ejemplo práctico:**
   ```javascript
   class Animal {
       speak() {
           console.log("The animal makes a sound.");
       }
   }

   class Dog extends Animal {
       speak() {
           super.speak(); // Llama al método de la superclase
           console.log("The dog barks.");
       }
   }

   const myDog = new Dog();
   myDog.speak();
   // Output:
   // The animal makes a sound.
   // The dog barks.
   ```

3. **Ventajas:**
   - Combina la lógica original con la personalizada.
   - Útil cuando se quiere mantener parte del comportamiento base.

---

### **Buenas prácticas: Casos donde es recomendable sobrescribir métodos y cómo hacerlo de manera efectiva**

1. **Cuándo sobrescribir métodos:**
   - **Cuando necesitas personalización:** Ajustar un comportamiento heredado para satisfacer las necesidades específicas de la subclase.
   - **Cuando necesitas extender funcionalidad:** Agregar lógica adicional manteniendo el comportamiento original (usando `super.methodName()`).
   - **Cuando la superclase define un método genérico:** Personalizar la implementación para una subclase específica.

2. **Cómo sobrescribir métodos de manera efectiva:**
   - **Usa `super` cuando sea necesario:** Aprovecha la lógica base de la superclase en lugar de duplicarla.
   - **Mantén un enfoque claro:** Sobrescribe solo cuando haya una razón clara para hacerlo.
   - **Documenta los cambios:** Explica por qué el método fue sobrescrito, especialmente si afecta la lógica heredada.

3. **Ejemplo de buenas prácticas:**
   ```javascript
   class Employee {
       constructor(name) {
           this.name = name;
       }

       work() {
           console.log(`${this.name} is working.`);
       }
   }

   class Developer extends Employee {
       work() {
           super.work(); // Reutiliza el comportamiento base
           console.log(`${this.name} is writing code.`);
       }
   }

   const dev = new Developer("Alice");
   dev.work();
   // Output:
   // Alice is working.
   // Alice is writing code.
   ```

4. **Errores comunes al sobrescribir métodos:**
   - Olvidar llamar a `super.methodName()` cuando es necesario.
   - Sobrescribir métodos innecesariamente, creando redundancia.
   - Alterar el comportamiento de la superclase de forma inesperada, causando problemas en otras subclases.

---

### **Resumen:**

| Tema                          | Descripción                                                                                 |
|-------------------------------|---------------------------------------------------------------------------------------------|
| **Sobrescribir métodos**      | Redefinir un método heredado en una subclase para proporcionar una implementación personalizada. |
| **Uso de `super.methodName()`** | Llama al método de la superclase desde la subclase para reutilizar o extender la funcionalidad. |
| **Buenas prácticas**          | Sobrescribe solo cuando sea necesario, usa `super` sabiamente y documenta los cambios realizados. |

Estos conceptos son esenciales para aprovechar la herencia en JavaScript y escribir código que sea reutilizable y fácil de mantener.

### **Polimorfismo en JavaScript: Capacidad de múltiples clases de compartir la misma interfaz (métodos) con implementaciones específicas**

1. **¿Qué es el polimorfismo?**  
   Es un principio de la programación orientada a objetos que permite a diferentes clases implementar métodos con el mismo nombre pero comportamientos específicos.

2. **Ejemplo básico:**
   ```javascript
   class Animal {
       speak() {
           console.log("The animal makes a sound.");
       }
   }

   class Dog extends Animal {
       speak() {
           console.log("The dog barks.");
       }
   }

   class Cat extends Animal {
       speak() {
           console.log("The cat meows.");
       }
   }

   const animals = [new Dog(), new Cat(), new Animal()];

   animals.forEach(animal => {
       animal.speak();
   });
   // Output:
   // The dog barks.
   // The cat meows.
   // The animal makes a sound.
   ```

   En este ejemplo, el método `speak` es común para todas las clases, pero cada una lo implementa de forma diferente.

---

### **Uso de polimorfismo en herencia: Crear métodos comunes con comportamientos específicos en clases derivadas**

1. **Comportamientos personalizados mediante sobrescritura:**  
   Las clases hijas pueden sobrescribir un método heredado para implementar un comportamiento específico.

2. **Ejemplo práctico con herencia:**
   ```javascript
   class Shape {
       getArea() {
           throw new Error("Method 'getArea()' must be implemented.");
       }
   }

   class Circle extends Shape {
       constructor(radius) {
           super();
           this.radius = radius;
       }

       getArea() {
           return Math.PI * this.radius ** 2;
       }
   }

   class Rectangle extends Shape {
       constructor(width, height) {
           super();
           this.width = width;
           this.height = height;
       }

       getArea() {
           return this.width * this.height;
       }
   }

   const shapes = [new Circle(5), new Rectangle(4, 6)];

   shapes.forEach(shape => {
       console.log(`Area: ${shape.getArea()}`);
   });
   // Output:
   // Area: 78.53981633974483
   // Area: 24
   ```

   Aquí, `getArea` es un método común con implementaciones específicas en cada clase hija.

---

### **Ventajas de polimorfismo: Ejemplos prácticos de cómo el polimorfismo facilita la expansión y mantenimiento del código**

1. **Facilita la extensibilidad:**  
   Puedes agregar nuevas clases que implementen métodos comunes sin alterar el código existente.  

   Ejemplo:
   ```javascript
   class Triangle extends Shape {
       constructor(base, height) {
           super();
           this.base = base;
           this.height = height;
       }

       getArea() {
           return (this.base * this.height) / 2;
       }
   }

   const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 4)];

   shapes.forEach(shape => {
       console.log(`Area: ${shape.getArea()}`);
   });
   // Output:
   // Area: 78.53981633974483
   // Area: 24
   // Area: 6
   ```

2. **Reduce el acoplamiento:**  
   Al trabajar con clases base e interfaces comunes, puedes procesar múltiples tipos de objetos sin conocer su implementación específica.

3. **Mejora la mantenibilidad:**  
   - Los cambios en una clase específica no afectan a otras.  
   - Los métodos de la clase base proporcionan un punto central para manejar el comportamiento común.

---

### **Resumen:**

| Tema                          | Descripción                                                                                     |
|-------------------------------|-------------------------------------------------------------------------------------------------|
| **Polimorfismo**              | Permite que diferentes clases compartan una interfaz común con implementaciones específicas.   |
| **Uso en herencia**           | Clases derivadas sobrescriben métodos comunes para comportamientos personalizados.             |
| **Ventajas**                  | - Facilita la expansión del código. <br> - Reduce el acoplamiento. <br> - Mejora la mantenibilidad. |

El polimorfismo es un pilar fundamental para escribir código reutilizable, flexible y orientado a objetos. Es especialmente útil al trabajar con colecciones heterogéneas de objetos que comparten métodos comunes.

*/