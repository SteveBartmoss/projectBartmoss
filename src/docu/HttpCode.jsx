import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores"
import { Divider } from "../componentes/divider/Divider"
import { Portada } from "../componentes/portada/portada"
import { TreeMap } from "../componentes/treeMap/TreeMap"


export function HttpCode() {

    const pageMap = [
        {
            titulo: '100',
            id: 'code100',
        },
        {
            titulo: '101',
            id: 'code101',
        },
        {
            titulo: '102',
            id: 'code102',
        },
        {
            titulo: '103',
            id: 'code103',
        },
        {
            titulo: '200',
            id: 'code200',
        },
        {
            titulo: '201',
            id: 'code201',
        },
        {
            titulo: '202',
            id: 'code202',
        },
        {
            titulo: '203',
            id: 'code203',
        },
        {
            titulo: '204',
            id: 'code204',
        }
    ]

    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Codigos de respuesta"} text={"Por Steve 03/09/2024"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Mapa del sitio'} elementos={pageMap} />
                </DivCol>

                <DivCol>
                    <DivArticle>
                        <DivContent>
                            <h1 id="code100">100</h1>

                            <p>
                                El código de respuesta 100 Continue en el protocolo HTTP es un código de estado informativo.
                                Indica que el servidor ha recibido los encabezados iniciales de la solicitud del cliente y que
                                el cliente puede continuar enviando el cuerpo de la solicitud (por ejemplo, el contenido de un
                                archivo grande que se está cargando).
                            </p>

                            <p>
                                Este código se usa principalmente en situaciones donde el cliente envía una solicitud
                                con cuerpo (como una solicitud POST o PUT) y utiliza el encabezado Expect: 100-continue.
                                Este encabezado indica que el cliente desea verificar si el servidor está dispuesto a procesar
                                la solicitud antes de enviar el cuerpo completo. Si el servidor responde con 100 Continue,
                                el cliente envía el cuerpo de la solicitud.
                            </p>

                            <h2>Características Principales</h2>

                            <p>
                                Propósito: Optimizar el flujo de datos entre cliente y servidor, evitando enviar cuerpos grandes
                                si el servidor no puede manejar la solicitud.
                            </p>

                            <p>
                                Cuando se usa: Se usa típicamente en solicitudes que incluyen el encabezado Expect: 100-continue.
                            </p>

                            <p>
                                Flujo de comunicación:
                                El cliente envía una solicitud inicial con encabezados y el encabezado Expect: 100-continue.
                                El servidor responde con 100 Continue si todo está en orden.
                                El cliente envía el cuerpo de la solicitud.
                                El servidor responde con un código final (como 200 OK o 400 Bad Request).
                            </p>

                            <Divider />

                            <h1 id="code101">101</h1>

                            <p>
                                El código de respuesta 101 Switching Protocols en el protocolo HTTP es un código de estado que indica
                                que el servidor acepta cambiar el protocolo de comunicación a uno solicitado por el cliente. Se utiliza
                                principalmente para actualizar la conexión a un protocolo diferente, como en el caso del WebSocket.
                            </p>

                            <h2>Características Principales</h2>

                            <p>
                                Propósito: Notificar al cliente que el servidor ha aceptado cambiar el protocolo a uno diferente
                                especificado en el encabezado Upgrade de la solicitud.
                            </p>

                            <p>
                                Casos de Uso Común:
                                Actualización de HTTP/1.1 a WebSocket.
                                Cambios a otros protocolos como HTTP/2 o HTTP/3.
                            </p>

                            <p>
                                Requisitos:
                                El cliente incluye un encabezado `Upgrade` especificando el protocolo al que desea cambiar.
                                El servidor responde con un encabezado `Upgrade` confirmando el cambio.
                            </p>

                            <Divider />

                            <h1 id="code102">102</h1>

                            <p>
                                El código de respuesta 102 Processing es parte del protocolo HTTP/1.1 y está definido en la
                                especificación RFC 2518 (https://www.rfc-editor.org/rfc/rfc2518), que introduce extensiones
                                para el protocolo HTTP en el contexto de Web Distributed Authoring and Versioning (WebDAV).
                            </p>

                            <h2>Propósito del Código 102 Processing</h2>

                            <p>
                                Este código de estado indica que el servidor ha recibido y está procesando la solicitud, pero
                                necesita más tiempo para completarla.
                            </p>

                            <h2>Usos Comunes</h2>

                            <p>
                                WebDAV: Se utiliza en operaciones complejas de WebDAV, como cuando se ejecutan múltiples operaciones en recursos (por ejemplo, copiar o mover un árbol de directorios).
                                Evitar Timeouts: Responde al cliente que el servidor aún está trabajando en la solicitud, para evitar que el cliente asuma que la conexión se ha perdido.
                            </p>

                            <h2>Características Principales</h2>

                            <p>
                                Indicación de Progreso: Sirve como una señal al cliente de que la solicitud no ha sido olvidada.
                                No Finaliza la Solicitud: La respuesta `102 Processing` no es una respuesta final. La operación sigue en curso.
                                Uso Limitado: Normalmente utilizado en contextos específicos (como WebDAV) y no en solicitudes HTTP estándar.
                            </p>

                            <Divider />

                            <h1 id="code103">103</h1>

                            <p>
                                El código de estado 103 Early Hints en el protocolo HTTP es una respuesta provisional que permite a los
                                servidores sugerir recursos vinculados antes de enviar la respuesta final. Esto ayuda a mejorar el rendimiento
                                al permitir que los navegadores comiencen a precargar recursos importantes (como archivos CSS, JavaScript o imágenes)
                                antes de que se reciba la respuesta completa.
                            </p>

                            <h2>Propósito</h2>

                            <p>
                                Reduce el tiempo de carga de la página web.
                                Permite a los clientes obtener una "pista temprana" sobre recursos críticos que probablemente necesitarán para procesar la solicitud completa.
                            </p>

                            <h2>Usos Comunes</h2>

                            <p>
                                Se utiliza principalmente con encabezados como `Link` para indicar los recursos que el navegador puede cargar anticipadamente.
                                Común en aplicaciones que implementan HTTP/2 o HTTP/3, ya que estas versiones del protocolo soportan bien la multiplexación.
                            </p>

                            <h2>Flujo de Trabajo</h2>

                            <p>
                                El servidor responde inicialmente con un código `103 Early Hints`, incluyendo encabezados que apuntan a recursos necesarios.
                                Luego, el servidor envía la respuesta completa con el estado final, como `200 OK`.
                            </p>

                            <h2>Ventajas</h2>

                            <p>
                                Rendimiento: Reduce la latencia percibida al permitir que los navegadores predescarguen recursos importantes.
                                Optimización: Ideal para aplicaciones web de alta carga que manejan muchos recursos críticos.
                            </p>

                            <h2>Soporte y Consideraciones</h2>

                            <p>
                                Algunos navegadores modernos ya soportan el código `103`, pero su adopción aún no es universal.
                                Debe usarse junto con protocolos que admitan conexiones rápidas y paralelas, como HTTP/2.
                            </p>

                            <p>
                                El código `103 Early Hints` es una herramienta poderosa para optimizar tiempos de carga y mejorar la experiencia del usuario en la web.
                            </p>

                            <Divider />

                            <h1 id="code200">200</h1>

                            <p>
                                El código HTTP 200 OK indica que la solicitud del cliente se procesó correctamente en el servidor y
                                que la respuesta contiene el resultado esperado. Este código se utiliza en la mayoría de las respuestas
                                exitosas, como en solicitudes GET o POST.
                            </p>

                            <p>
                                En una solicitud GET, un código 200 OK significa que el recurso solicitado fue encontrado y se devuelve
                                en el cuerpo de la respuesta.
                            </p>

                            <p>
                                En una solicitud POST, significa que la operación se completó correctamente y se proporciona una
                                respuesta con el estado o los datos resultantes.
                            </p>

                            <h1>Características Principales</h1>

                            <h3>Estándar en respuestas exitosas</h3>

                            <p>
                                El código 200 se utiliza para indicar que todo está bien y que el servidor pudo procesar la solicitud.
                            </p>

                            <h3>Contenido del cuerpo</h3>

                            <p>
                                Dependiendo de la operación, el cuerpo de la respuesta puede contener datos (como en GET) o un mensaje de
                                confirmación (como en POST).
                            </p>

                            <h3>No siempre es necesario un cuerpo de respuesta</h3>
                            <p>
                                Aunque es común incluir información en el cuerpo, no siempre es obligatorio. Por ejemplo, en una solicitud
                                DELETE exitosa, el cuerpo podría estar vacío.

                            </p>

                            <h3>Consistencia</h3>

                            <p>
                                El uso del código 200 ayuda a los clientes a comprender rápidamente que la operación fue exitosa sin necesidad
                                de analizar en detalle el cuerpo de la respuesta.
                            </p>

                            <Divider />

                            <h1 id="code201">201</h1>

                            <p>
                                El código de estado `201 Created` indica que una solicitud HTTP ha sido procesada con éxito y ha resultado en la
                                creación de un nuevo recurso. La ubicación del recurso recién creado generalmente se proporciona en el encabezado
                                `Location` de la respuesta.
                            </p>

                            <h1>Características Principales</h1>

                            <h3>Método Usual</h3>

                            <p>
                                Generalmente asociado con solicitudes `POST` o `PUT`.
                            </p>

                            <h3>Encabezado Location</h3>

                            <p>
                                Especifica la URL del recurso recién creado.
                            </p>

                            <h3>Cuerpo de la Respuesta</h3>

                            <p>
                                Puede incluir una representación del recurso creado, aunque no es obligatorio.
                            </p>

                            <h2>Usos Comunes</h2>

                            <p>
                                Creación de Recursos Únicos: Un recurso único se genera como resultado de una solicitud, como un nuevo registro de usuario,
                                la creación de un producto, o una entrada en un blog. Ejemplo: Registrar un nuevo cliente en una base de datos.
                            </p>

                            <p>
                                Indicación de la Ubicación del Recurso: Es útil cuando el cliente necesita saber la URL del recurso creado para realizar operaciones
                                posteriores (como leer, actualizar o eliminar). Ejemplo: Crear una nueva orden en un sistema de compras y devolver la URL de esa orden.
                            </p>

                            <p>
                                Representación del Recurso en la Respuesta: Se puede incluir información adicional sobre el recurso recién creado para que
                                el cliente no tenga que hacer otra solicitud para obtener los detalles. Ejemplo: Crear un archivo en un servicio de
                                almacenamiento en la nube y devolver los metadatos del archivo.
                            </p>

                            <h2>Ventajas</h2>

                            <p>
                                Mejora la claridad de las respuestas HTTP al cliente.
                                Simplifica la interacción con APIs RESTful al proporcionar directamente la ubicación del recurso creado.
                                Fomenta el cumplimiento de los estándares HTTP, lo que ayuda en la interoperabilidad entre sistemas.
                            </p>

                            <Divider />

                            <h1 id="code202">202</h1>

                            <p>
                                El código de estado 202 Accepted indica que el servidor ha recibido y aceptado la solicitud para ser procesada,
                                pero el procesamiento aún no se ha completado. Este código no garantiza que el procesamiento de la solicitud vaya a
                                finalizar con éxito; solo informa que se ha aceptado para su ejecución en el futuro.
                            </p>

                            <h2>Características Clave</h2>

                            <p>
                                Procesamiento Asíncrono: Utilizado comúnmente cuando la solicitud requiere un procesamiento que no puede completarse inmediatamente.
                                Respuesta Informativa: Generalmente, no incluye el resultado final del procesamiento, sino una confirmación de aceptación.
                                Métodos Usuales: Se puede asociar con POST, PUT, o incluso DELETE, dependiendo del contexto.
                            </p>

                            <h2>Usos Comunes</h2>

                            <p>
                                Procesamiento Largo o Diferido: Cuando la operación solicitada requiere tiempo significativo para completarse, como la
                                generación de informes, análisis de datos, o procesamiento en lotes. Ejemplo: Enviar un archivo para análisis antivirus o conversión de formato.
                                Procesos Asíncronos: Cuando el servidor delega la tarea a otro sistema o cola de procesamiento, y el resultado final estará disponible más tarde.
                                Ejemplo: Iniciar un despliegue en un sistema CI/CD o una tarea de impresión.
                                Feedback al Cliente sin Bloqueo: Se usa para notificar al cliente que la solicitud ha sido aceptada y procesada, pero sin
                                bloquearlo hasta que el resultado esté listo. Ejemplo: Un sistema de correo masivo que confirma la recepción de una solicitud
                                de envío sin esperar a que todos los correos sean entregados.
                            </p>

                            <h2>Ventajas</h2>

                            <p>
                                Mejora la experiencia del usuario en aplicaciones con operaciones de larga duración, al proporcionar una respuesta rápida en lugar de
                                hacer que el cliente espere. Permite diseñar APIs más escalables al delegar tareas complejas a sistemas secundarios o colas de trabajo.
                                Proporciona una base clara para manejar procesos asíncronos, permitiendo al cliente saber que su solicitud está en curso.
                            </p>

                            <p>
                                Ambos códigos (201 Created y 202 Accepted) son útiles en APIs RESTful, pero se utilizan en contextos diferentes según el
                                propósito de la solicitud y la naturaleza del procesamiento del recurso.
                            </p>

                            <Divider />

                            <h1 id="code203">203</h1>

                            <p>
                                El código de estado `203 Non-Authoritative Information` indica que la solicitud se ha procesado con éxito, pero la respuesta no contiene información del servidor de origen. En cambio, la información de la respuesta puede haber sido modificada por un servidor intermedio, como un proxy o una caché.

                                Este código se utiliza principalmente en escenarios donde el servidor intermedio devuelve datos que no provienen directamente de la fuente original o han sido transformados.
                            </p>

                            <h2>Características Principales</h2>

                            <p>
                                No Original: La información devuelta puede no coincidir con la del servidor de origen.
                                Uso Raro: Su uso en APIs modernas es inusual, pero puede ser relevante en configuraciones específicas.
                                Método Usual: Frecuentemente asociado con solicitudes `GET`.
                            </p>

                            <h2>Usos Comunes</h2>

                            <p>
                                Intervención de un Proxy o Intermediario: Se utiliza cuando un servidor intermedio modifica los datos antes de enviarlos al cliente.
                                Ejemplo: Un proxy que traduce datos de un idioma a otro.
                                Cachés Modificadas: Cuando un servidor caché devuelve una respuesta ajustada en lugar de la respuesta original del servidor.
                                Ejemplo: Una CDN que transforma imágenes o ajusta contenido para adaptarse al dispositivo del cliente.
                                Transformación de Datos: Cuando se aplican transformaciones, como normalización de datos o ajustes de formato, antes de enviar la respuesta.
                                Ejemplo: Un servidor que estandariza las unidades de medida (p. ej., convierte de metros a pies).
                            </p>

                            <h2>Ventajas</h2>

                            <p>
                                Proporciona claridad al cliente sobre la fuente y precisión de los datos.
                                Ayuda en sistemas distribuidos a diferenciar entre datos originales y transformados.
                                Facilita el manejo de respuestas ajustadas o procesadas por intermediarios, sin atribuirlas directamente al servidor de origen.
                            </p>

                            <p>
                                Aunque su uso es raro, el código `203` tiene aplicaciones específicas en sistemas con servidores 
                                intermediarios que manipulan o transforman datos. En la mayoría de los casos, los códigos como 
                                `200 OK` o `304 Not Modified` son suficientes para representar el estado de una respuesta.
                            </p>

                            <Divider />

                            <h1 id="code204">204</h1>

                            <p>
                                
                                El código de estado 204 No Content indica que el servidor ha procesado con éxito la solicitud, pero no necesita devolver un cuerpo 
                                de respuesta. Se usa cuando no hay contenido que proporcionar al cliente, pero se confirma que la operación solicitada se completó correctamente.
                            </p>

                            <h2>Características Principales</h2>

                            <p>
                                Sin Contenido en el Cuerpo: La respuesta incluye solo los encabezados HTTP.
                                Mantiene el Estado del Cliente: Ideal cuando el cliente no necesita recargar su interfaz o cambiar su estado como resultado de la respuesta.
                                Métodos Usuales: Frecuentemente usado con `DELETE`, `PUT`, o acciones que actualizan datos sin necesidad de retroalimentación al cliente.
                            </p>

                            <h2>Usos Comunes</h2>

                            <p>
                                Confirmación Sin Contenido: Se necesita confirmar que la acción fue exitosa sin enviar datos adicionales. Ejemplo: Confirmar que 
                                se eliminó un recurso con éxito tras un `DELETE`.
                                
                                Optimización de Respuestas: Reducir la cantidad de datos transferidos al cliente cuando no es necesario enviar contenido.
                                Ejemplo: Al guardar automáticamente un borrador sin cambiar la interfaz del cliente.
                                
                                Mantener la Experiencia del Usuario: Permitir que el cliente permanezca en la misma página o estado sin realizar actualizaciones visibles. 
                                Ejemplo: Una solicitud AJAX que actualiza un estado en el backend sin modificar la UI.
                            </p>

                            <h2>Ventajas</h2>

                            <p>
                                Reduce el tráfico de red al evitar enviar contenido innecesario.
                                Mejora la experiencia del usuario al no recargar la interfaz sin necesidad.
                                Proporciona una manera clara y eficiente de indicar éxito sin información adicional.
                            </p>

                            <p>
                                El código 204 es una excelente opción para operaciones rápidas y silenciosas que confirman el éxito de una acción sin sobrecargar la comunicación entre cliente y servidor. Su uso puede mejorar la eficiencia de las APIs y la experiencia de los usuarios en aplicaciones modernas.
                            </p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>

        </>
    )
}

/*

---


---

## Ejemplo Básico del Flujo

### Solicitud Inicial del Cliente

```http
POST /upload HTTP/1.1
Host: example.com
Content-Length: 123456
Expect: 100-continue
```

### Respuesta del Servidor

```http
HTTP/1.1 100 Continue
```

### El Cliente Envía el Cuerpo de la Solicitud

```http
(file content sent here)
```

### Respuesta Final del Servidor

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Upload successful
```

---

## Ejemplo en Código

### Cliente (Usando Node.js con Axios)

```javascript
const axios = require('axios');
const fs = require('fs');

async function uploadFile() {
    const fileStream = fs.createReadStream('./large-file.txt');

    try {
        const response = await axios.post('http://example.com/upload', fileStream, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Expect': '100-continue',
            },
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error uploading file:', error.response ? error.response.data : error.message);
    }
}

uploadFile();
```

### Servidor (Usando Node.js con Express)

```javascript
const express = require('express');
const app = express();

app.post('/upload', (req, res) => {
    req.on('data', (chunk) => {
        console.log('Receiving data chunk...');
    });

    req.on('end', () => {
        console.log('Upload complete');
        res.status(200).send('Upload successful');
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

---

## Notas Importantes

1. **Evitar `Expect: 100-continue` innecesario:** Aunque es útil en situaciones específicas, generalmente no es necesario si el cuerpo de la solicitud es pequeño.
2. **Soporte del servidor:** Algunos servidores pueden ignorar el encabezado `Expect: 100-continue` y tratar inmediatamente la solicitud.
3. **Manejo de errores:** Si el servidor no puede procesar la solicitud (por ejemplo, debido a un encabezado inválido), puede responder con otro código (como `417 Expectation Failed`) antes de que el cliente envíe el cuerpo.

El uso del código `100 Continue` ayuda a mejorar la eficiencia en escenarios donde el tamaño del cuerpo de la solicitud es significativo.

termina el contenido de codigo 100
-----

codigo 101

## Flujo de Comunicación

1. El cliente envía una solicitud con el encabezado `Upgrade` indicando el protocolo deseado.
2. Si el servidor acepta, responde con el código **101 Switching Protocols**.
3. A partir de este momento, la conexión utiliza el nuevo protocolo.

---

## Ejemplo en Código

### Ejemplo de Solicitud del Cliente

```http
GET /chat HTTP/1.1
Host: example.com
Connection: Upgrade
Upgrade: websocket
```

### Respuesta del Servidor

```http
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
```

Después de esta respuesta, la conexión cambiará a WebSocket y podrá intercambiar mensajes según ese protocolo.

---

### Implementación en WebSocket (Node.js)

#### Servidor

```javascript
const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    res.writeHead(426, { 'Content-Type': 'text/plain' });
    res.end('Upgrade required');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected via WebSocket');
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send('Message received');
    });
});

server.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});
```

#### Cliente

```javascript
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to WebSocket server');
    ws.send('Hello, server!');
});

ws.on('message', (message) => {
    console.log(`Received: ${message}`);
});
```

---

## Notas Importantes

1. **Uso Limitado:** El código `101 Switching Protocols` solo se usa cuando hay un cambio real en el protocolo. De lo contrario, no es necesario.
2. **Encabezado Obligatorio:** La solicitud debe incluir los encabezados `Upgrade` y `Connection` para que el servidor considere la actualización.
3. **Seguridad:** Antes de aceptar un cambio de protocolo, el servidor debe asegurarse de que sea seguro y compatible.

Este código de estado es esencial para la interoperabilidad entre protocolos y se usa principalmente en aplicaciones modernas como WebSockets para proporcionar comunicación en tiempo real.


--- codigo 102

El código de respuesta **102 Processing** es parte del protocolo HTTP/1.1 y está definido en la especificación [RFC 2518](https://www.rfc-editor.org/rfc/rfc2518), que introduce extensiones para el protocolo HTTP en el contexto de Web Distributed Authoring and Versioning (WebDAV).

---

## Propósito del Código 102 Processing

Este código de estado indica que el servidor ha recibido y está procesando la solicitud, pero necesita más tiempo para completarla. 

### Usos Comunes
- **WebDAV:** Se utiliza en operaciones complejas de WebDAV, como cuando se ejecutan múltiples operaciones en recursos (por ejemplo, copiar o mover un árbol de directorios).
- **Evitar Timeouts:** Responde al cliente que el servidor aún está trabajando en la solicitud, para evitar que el cliente asuma que la conexión se ha perdido.

---

## Características Principales
1. **Indicación de Progreso:** Sirve como una señal al cliente de que la solicitud no ha sido olvidada.
2. **No Finaliza la Solicitud:** La respuesta `102 Processing` no es una respuesta final. La operación sigue en curso.
3. **Uso Limitado:** Normalmente utilizado en contextos específicos (como WebDAV) y no en solicitudes HTTP estándar.

---

## Ejemplo de Flujo

1. El cliente envía una solicitud compleja, como una operación WebDAV que afecta a múltiples recursos.
2. El servidor responde con `102 Processing` para informar al cliente que la solicitud está en curso.
3. El servidor luego envía una respuesta final (por ejemplo, `200 OK`) cuando completa la operación.

---

## Ejemplo en Código

### Ejemplo de Solicitud del Cliente (WebDAV)

```http
MOVE /documents/folderA/ HTTP/1.1
Host: example.com
Destination: http://example.com/documents/folderB/
```

### Respuesta del Servidor

#### Respuesta Inicial (Progreso)

```http
HTTP/1.1 102 Processing
```

#### Respuesta Final (Éxito)

```http
HTTP/1.1 201 Created
```

---

## Implementación en Node.js

Aunque `102 Processing` no es común en aplicaciones estándar, puedes simular su uso en un servidor Node.js:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'MOVE') {
        // Simular una operación larga
        res.writeHead(102, { 'Content-Type': 'text/plain' });
        res.write('Processing...');
        
        setTimeout(() => {
            res.writeHead(201, { 'Content-Type': 'text/plain' });
            res.end('Move operation completed');
        }, 5000); // Simula 5 segundos de procesamiento
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
```

---

## Notas Importantes

1. **Contexto Limitado:** El código 102 es principalmente para WebDAV y no suele usarse en aplicaciones web estándar.
2. **Compatibilidad:** Algunos clientes y navegadores pueden no manejar adecuadamente este código de estado.
3. **Tiempo de Proceso:** Si el servidor no espera un procesamiento prolongado, no necesita usar este código.

Este código es una herramienta útil en casos específicos donde las operaciones pueden tardar mucho tiempo, brindando una mejor experiencia al cliente al mantenerlo informado.

-- codigo 103



---



---

### **Ejemplo Práctico**
**Solicitud HTTP del cliente**:
```http
GET /index.html HTTP/1.1
Host: example.com
```

**Respuesta del servidor**:
```http
HTTP/1.1 103 Early Hints
Link: </styles.css>; rel=preload; as=style
Link: </script.js>; rel=preload; as=script
```

**Respuesta final**:
```http
HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <script src="/script.js"></script>
</body>
</html>
```

### **Explicación del Ejemplo**
1. El servidor envía primero una respuesta `103 Early Hints` con encabezados `Link` que indican al navegador que comience a cargar `styles.css` y `script.js`.
2. Mientras el navegador precarga esos recursos, el servidor prepara y envía la respuesta completa con un código `200 OK` y el contenido HTML.
3. El navegador ya tiene los recursos críticos (CSS y JS) listos antes de renderizar la página, lo que mejora el tiempo de carga.

---

codigo 200



#### **Ejemplo 1: Respuesta a una solicitud GET**

##### **Solicitud**
El cliente solicita un recurso, como la información de un usuario:
```http
GET /users/123 HTTP/1.1
Host: example.com
```

##### **Respuesta**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 56

{
  "id": 123,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

En este caso, el código `200 OK` confirma que el recurso del usuario con ID `123` fue encontrado y su información se devuelve en formato JSON.

---

#### **Ejemplo 2: Respuesta a una solicitud POST**

##### **Solicitud**
El cliente envía datos para crear un nuevo usuario:
```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

##### **Respuesta**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 44

{
  "id": 124,
  "message": "User created successfully"
}
```

Aquí, el código `200 OK` confirma que el usuario fue creado correctamente. La respuesta incluye un mensaje de confirmación y el ID del nuevo usuario.

---

--codigo 201

---

### **Ejemplo**
Supongamos que una aplicación tiene una API para registrar nuevos usuarios:

#### **Solicitud:**
```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "username": "marco123",
  "email": "marco@example.com",
  "password": "securepassword123"
}
```

#### **Respuesta:**
```http
HTTP/1.1 201 Created
Location: https://example.com/users/12345
Content-Type: application/json

{
  "id": 12345,
  "username": "marco123",
  "email": "marco@example.com",
  "created_at": "2025-01-12T10:00:00Z"
}
```

---

---

--

-- codigo 202

### **Código de Respuesta HTTP 202: Accepted**



---

### **Ejemplo**
Supongamos que una aplicación tiene una API que inicia un proceso de generación de reportes.

#### **Solicitud:**
```http
POST /reports HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "report_type": "sales",
  "date_range": "2024-01-01_to_2024-12-31"
}
```

#### **Respuesta:**
```http
HTTP/1.1 202 Accepted
Content-Type: application/json

{
  "status": "Processing",
  "report_id": "67890",
  "message": "Your report is being generated. You will be notified when it's ready."
}
```

---



---



--- 



codio 203

### **Código de Respuesta HTTP 203: Non-Authoritative Information**





---

### **Ejemplo**
Supongamos que un cliente realiza una solicitud a un proxy para obtener información de un recurso.

#### **Solicitud:**
```http
GET /api/products/123 HTTP/1.1
Host: example.com
```

#### **Respuesta (desde el proxy):**
```http
HTTP/1.1 203 Non-Authoritative Information
Content-Type: application/json

{
  "id": 123,
  "name": "Laptop",
  "price": 999.99,
  "currency": "USD",
  "note": "Price converted by proxy; original currency was EUR."
}
```

En este caso, el proxy devolvió una versión modificada de la respuesta original al convertir la moneda de euros a dólares estadounidenses.

---

---

---



----

--- codigo 204

### **Código de Respuesta HTTP 204: No Content**

---

### **Ejemplo**
Supongamos que una API permite a los usuarios actualizar su configuración, pero no devuelve datos adicionales después de la actualización.

#### **Solicitud:**
```http
PUT /api/user/settings HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "notifications": "enabled",
  "theme": "dark"
}
```

#### **Respuesta:**
```http
HTTP/1.1 204 No Content
```

En este caso, la configuración se actualizó correctamente, pero no hay necesidad de enviar datos adicionales al cliente.

---

---


-- codigo 205

### **Código de Respuesta HTTP 205: Reset Content**

#### **Descripción**
El código de estado `205 Reset Content` indica que el servidor ha procesado con éxito la solicitud, pero además solicita al cliente que reinicie o actualice su estado, como limpiar formularios o restablecer vistas en la interfaz de usuario. A diferencia del código `204`, que no exige ninguna acción del cliente, el `205` indica explícitamente que el cliente debe realizar un reinicio.

#### **Características Clave**:
1. **Sin Cuerpo de Respuesta**: Similar al código `204`, no incluye contenido en el cuerpo.
2. **Acción Requerida por el Cliente**: Se utiliza cuando el cliente debe realizar un restablecimiento visual o funcional.
3. **Métodos Usuales**: A menudo asociado con solicitudes como `POST`, `PUT` o `DELETE`.

---

### **Ejemplo**
Un formulario en una aplicación web permite a los usuarios enviar comentarios. Una vez enviado, el servidor solicita al cliente que limpie el formulario para permitir otro comentario.

#### **Solicitud:**
```http
POST /api/feedback HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "message": "Great service!",
  "rating": 5
}
```

#### **Respuesta:**
```http
HTTP/1.1 205 Reset Content
```

En este caso, el servidor ha recibido el comentario con éxito y solicita al cliente que restablezca el formulario (por ejemplo, limpiando los campos de texto).

---

### **Caso de Uso**
El código `205 Reset Content` es útil en escenarios donde:

1. **Reinicio de Formularios o Interfaces**:
   - Después de que se envíe un formulario, el servidor puede solicitar que el cliente lo limpie.
   - **Ejemplo**: Un formulario de registro que debe restablecerse tras enviarse con éxito.

2. **Restablecimiento de Estado Visual**:
   - Cuando el servidor desea que el cliente elimine datos visualizados temporalmente.
   - **Ejemplo**: Restablecer una vista de filtro o búsqueda después de aplicar cambios.

3. **Preparación para Nuevas Interacciones**:
   - Ideal para aplicaciones interactivas donde el cliente debe estar listo para la siguiente acción.
   - **Ejemplo**: Un sistema de encuestas que debe reiniciar la vista tras enviar una respuesta.

---

### **Beneficios de Usar 205 Reset Content**
- Proporciona una manera estandarizada de instruir al cliente para que actualice su estado.
- Mejora la experiencia del usuario al limpiar automáticamente vistas o formularios sin necesidad de intervención manual.
- Reduce la complejidad del cliente al delegar la responsabilidad del reinicio al servidor.

---

### **Diferencias con 204 No Content**
- **`204 No Content`**: Indica éxito sin contenido adicional, pero no requiere ninguna acción del cliente.
- **`205 Reset Content`**: Indica éxito y además solicita explícitamente al cliente que reinicie o actualice su estado.

El uso de `205 Reset Content` es ideal para aplicaciones donde el cliente necesita orientación clara para restablecer su interfaz o estado después de una operación exitosa.


-- 206

### **Código de Respuesta HTTP 206: Partial Content**

#### **Descripción**
El código de estado `206 Partial Content` indica que el servidor ha procesado exitosamente una solicitud parcial de un recurso. Esto sucede cuando el cliente utiliza el encabezado `Range` para pedir una parte específica del recurso, como una sección de un archivo grande.

#### **Características Clave**:
1. **Respuestas Parciales**: Se envía solo la parte solicitada del recurso, no el contenido completo.
2. **Encabezado `Content-Range`**: El servidor incluye este encabezado en la respuesta para indicar el rango del recurso que se está devolviendo.
3. **Optimización de Recursos**: Es útil para descargar archivos grandes, transmitir videos, o retomar descargas interrumpidas.

---

### **Ejemplo**
Supongamos que el cliente está descargando un archivo grande y solicita un rango específico de bytes del archivo.

#### **Solicitud:**
```http
GET /large-file.zip HTTP/1.1
Host: example.com
Range: bytes=0-1023
```

#### **Respuesta:**
```http
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/1048576
Content-Type: application/zip

(binary data of the first 1024 bytes)
```

En este caso, el cliente ha solicitado los primeros 1024 bytes de un archivo de 1 MB, y el servidor ha proporcionado exactamente esa parte.

---

### **Caso de Uso**
El código `206 Partial Content` es útil en escenarios como:

1. **Transmisión de Videos o Audios**:
   - Los reproductores multimedia solicitan rangos específicos de un archivo para transmitir solo las partes necesarias en un momento dado.
   - **Ejemplo**: Un usuario que avanza rápidamente a la mitad de un video.

2. **Descargas Interrumpidas**:
   - Permite retomar descargas desde el punto donde se detuvieron, en lugar de reiniciarlas desde el principio.
   - **Ejemplo**: Un gestor de descargas que solicita el resto de un archivo tras una desconexión.

3. **Optimización de Ancho de Banda**:
   - Reduce el tráfico de red enviando solo las partes necesarias de un recurso.
   - **Ejemplo**: Una aplicación que carga imágenes o documentos en partes mientras el usuario las visualiza.

---

### **Beneficios de Usar 206 Partial Content**
- Mejora la experiencia del usuario al permitir descargas y transmisiones más flexibles.
- Ahorra ancho de banda al limitar la cantidad de datos transferidos a lo necesario.
- Facilita el manejo de archivos grandes en entornos con conexiones inestables.

---

### **Encabezados Importantes en una Respuesta 206**
- **`Content-Range`**: Especifica el rango del recurso devuelto (por ejemplo, `bytes 0-1023/1048576`).
- **`Content-Length`**: Indica el tamaño de la porción devuelta.
- **`Accept-Ranges`**: En una solicitud previa, el servidor puede indicar si soporta rangos con este encabezado (por ejemplo, `bytes`).

El código `206 Partial Content` es esencial para servicios que manejan recursos grandes y buscan eficiencia y flexibilidad en la entrega de contenido al cliente.


-- codigo 207

### **Código de Respuesta HTTP 207: Multi-Status**

#### **Descripción**
El código de estado `207 Multi-Status` es una respuesta específica del protocolo [WebDAV](https://en.wikipedia.org/wiki/WebDAV) (extensión de HTTP) que indica que la solicitud ha sido procesada y que el cuerpo de la respuesta contiene múltiples códigos de estado. Es útil cuando una operación afecta a varios recursos, y el servidor necesita proporcionar información detallada sobre el éxito o el error para cada uno de ellos.

La respuesta se entrega en un formato XML que describe el resultado de cada operación.

---

### **Características Clave**
1. **Múltiples Resultados**: Permite que el servidor informe sobre el éxito o error de varias operaciones en una sola respuesta.
2. **Formato XML**: La respuesta incluye un documento XML con detalles de los recursos afectados y sus códigos de estado individuales.
3. **Usos Exclusivos de WebDAV**: Generalmente se utiliza en aplicaciones que implementan el protocolo WebDAV para manejar operaciones en recursos como archivos o carpetas.

---

### **Ejemplo**
Supongamos que un cliente envía una solicitud WebDAV para copiar múltiples archivos en un servidor, y algunos de ellos tienen éxito mientras que otros fallan.

#### **Solicitud:**
```http
COPY /folder1/ HTTP/1.1
Host: example.com
Destination: /folder2/
```

#### **Respuesta:**
```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"

<?xml version="1.0" encoding="utf-8"?>
<multistatus xmlns="DAV:">
  <response>
    <href>/folder2/file1.txt</href>
    <status>HTTP/1.1 201 Created</status>
  </response>
  <response>
    <href>/folder2/file2.txt</href>
    <status>HTTP/1.1 403 Forbidden</status>
  </response>
  <response>
    <href>/folder2/file3.txt</href>
    <status>HTTP/1.1 204 No Content</status>
  </response>
</multistatus>
```

En este caso:
- `file1.txt` fue copiado con éxito (`201 Created`).
- `file2.txt` falló debido a permisos insuficientes (`403 Forbidden`).
- `file3.txt` ya existía y no se realizó ninguna acción (`204 No Content`).

---

### **Caso de Uso**
El código `207 Multi-Status` se utiliza principalmente en contextos WebDAV, donde las operaciones afectan múltiples recursos. Algunos casos comunes incluyen:

1. **Gestión de Archivos en Servidores**:
   - Operaciones como copiar, mover o eliminar varios archivos o carpetas.
   - **Ejemplo**: Un cliente WebDAV que sincroniza un directorio completo con un servidor.

2. **Sincronización de Recursos**:
   - Informar sobre cambios o conflictos en múltiples recursos durante la sincronización.
   - **Ejemplo**: Una aplicación de respaldo en la nube que verifica el estado de múltiples archivos.

3. **Operaciones en Lote**:
   - Permite ejecutar y obtener resultados para varias operaciones en una sola solicitud.
   - **Ejemplo**: Actualización masiva de propiedades o metadatos de recursos en un servidor.

---

### **Beneficios de Usar 207 Multi-Status**
- **Eficiencia**: Reduce el número de solicitudes necesarias para manejar múltiples recursos.
- **Detalles Individuales**: Permite al cliente conocer el estado de cada recurso afectado.
- **Flexibilidad**: Ideal para sistemas complejos que gestionan varios recursos simultáneamente.

---

### **Consideraciones**
- **Formato XML**: El cliente debe estar preparado para analizar una respuesta en XML.
- **Específico de WebDAV**: Este código no es común fuera de aplicaciones que implementan WebDAV.

El uso de `207 Multi-Status` es crucial en aplicaciones avanzadas que gestionan múltiples recursos en servidores compatibles con WebDAV, mejorando la comunicación entre cliente y servidor.

--codigo 208

### **Código de Respuesta HTTP 208: Already Reported**

#### **Descripción**
El código de estado `208 Already Reported` se utiliza en el contexto del protocolo [WebDAV](https://en.wikipedia.org/wiki/WebDAV). Indica que los miembros de un recurso vinculado ya se han enumerado en una respuesta anterior, y no se repiten nuevamente en la respuesta actual para evitar redundancia.

Este código se usa principalmente en respuestas a solicitudes `PROPFIND` con una profundidad mayor que `0`, donde se enumeran múltiples recursos. Al devolver `208`, el servidor informa que ciertos recursos ya se describieron previamente y no necesitan repetirse.

---

### **Características Clave**
1. **Evita Duplicados**: Reduce el tamaño de las respuestas al no repetir información sobre recursos que ya se han informado.
2. **Usos en WebDAV**: Exclusivo para operaciones WebDAV como `PROPFIND`, donde se listan propiedades o recursos jerárquicos.
3. **Optimización**: Minimiza la sobrecarga de red al evitar datos redundantes.

---

### **Ejemplo**
Supongamos que un cliente realiza una solicitud `PROPFIND` para obtener las propiedades de un directorio y todos sus subdirectorios.

#### **Solicitud:**
```http
PROPFIND /folder1/ HTTP/1.1
Host: example.com
Depth: 1
```

#### **Respuesta:**
```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"

<?xml version="1.0" encoding="utf-8"?>
<multistatus xmlns="DAV:">
  <response>
    <href>/folder1/</href>
    <propstat>
      <prop>
        <displayname>folder1</displayname>
      </prop>
      <status>HTTP/1.1 200 OK</status>
    </propstat>
  </response>
  <response>
    <href>/folder1/subfolder/</href>
    <propstat>
      <prop>
        <displayname>subfolder</displayname>
      </prop>
      <status>HTTP/1.1 208 Already Reported</status>
    </propstat>
  </response>
</multistatus>
```

En este caso:
- El directorio principal (`/folder1/`) se describe normalmente.
- El subdirectorio (`/folder1/subfolder/`) ya se informó previamente en una operación anterior y no se vuelve a detallar.

---

### **Caso de Uso**
El código `208 Already Reported` es útil en los siguientes escenarios:

1. **Gestión de Árboles de Directorios**:
   - Cuando se enumeran recursos jerárquicos, evita la repetición de información sobre subdirectorios o archivos ya reportados.

2. **Optimización en Consultas WebDAV**:
   - Reduce la cantidad de datos enviados en respuestas `PROPFIND` o similares, optimizando el uso de red y procesamiento.

3. **Sincronización de Recursos**:
   - Facilita la sincronización de estructuras complejas de archivos o propiedades, indicando al cliente qué recursos ya se han procesado.

---

### **Beneficios de Usar 208 Already Reported**
- **Eficiencia**: Evita duplicar datos en respuestas, ahorrando ancho de banda y tiempo de procesamiento.
- **Claridad**: Informa explícitamente que un recurso ya ha sido reportado en la misma transacción.
- **Reducción de Redundancia**: Especialmente útil en estructuras jerárquicas o recursos enlazados.

---

### **Consideraciones**
- **Formato XML**: Al igual que otros códigos de WebDAV, el cliente debe procesar respuestas en formato XML.
- **Específico de WebDAV**: No es relevante para aplicaciones fuera del contexto de WebDAV.

El código `208 Already Reported` mejora la eficiencia de las operaciones en sistemas que gestionan múltiples recursos jerárquicos, asegurando que los clientes solo reciban la información necesaria sin redundancias innecesarias.


--- codigo 226

### **Código de Respuesta HTTP 226: IM Used**

#### **Descripción**
El código de estado HTTP **226 IM Used** se utiliza para indicar que el servidor ha cumplido con una solicitud GET para un recurso y que la respuesta se generó utilizando una o más manipulaciones de contenido (deltas). Esto permite enviar únicamente las diferencias entre una versión previa del recurso y la versión actual, en lugar de transferir todo el recurso completo.

Este código es definido en la [RFC 3229](https://datatracker.ietf.org/doc/html/rfc3229) como parte del protocolo **HTTP Delta Encoding**. Es particularmente útil en situaciones donde un cliente ya posee una versión del recurso y solo necesita recibir actualizaciones incrementales.

---

### **Características Clave**
1. **Reducción del Tamaño de la Respuesta**: Solo se envían los cambios entre dos versiones del recurso, lo que optimiza el uso del ancho de banda.
2. **Cabecera `IM`**: El servidor utiliza esta cabecera en la respuesta para indicar qué manipulaciones específicas se aplicaron.
3. **Usos Avanzados**: Común en sistemas donde se sincronizan datos frecuentemente, como aplicaciones de colaboración en tiempo real o sincronización de archivos.

---

### **Ejemplo**
#### **Escenario**
Un cliente ha descargado previamente una versión de un archivo JSON y solicita solo las actualizaciones desde la última versión que tiene.

#### **Solicitud**
```http
GET /data/resource HTTP/1.1
Host: example.com
A-IM: delta
If-None-Match: "v1"
```

- **`A-IM: delta`**: Solicita al servidor una codificación delta.
- **`If-None-Match: "v1"`**: Indica que el cliente tiene la versión etiquetada como `"v1"`.

#### **Respuesta**
```http
HTTP/1.1 226 IM Used
Content-Type: application/json
ETag: "v2"
IM: delta

{
  "updatedField": "newValue"
}
```

- **`IM: delta`**: Indica que se usó una codificación delta para generar la respuesta.
- **`ETag: "v2"`**: Proporciona una nueva etiqueta de versión para la actualización.

---

### **Caso de Uso**
#### **Sincronización de Datos**
El código `226 IM Used` es útil en escenarios donde un cliente mantiene una copia local de los datos y necesita sincronizar los cambios de manera eficiente:
1. **Aplicaciones de Colaboración**:
   - Herramientas como Google Docs o plataformas colaborativas donde múltiples usuarios editan el mismo documento.
2. **Transferencia de Archivos**:
   - Sincronización incremental de datos en aplicaciones como Dropbox o sistemas de control de versiones.
3. **APIs y Servicios Web**:
   - APIs que proporcionan datos actualizados sin necesidad de retransmitir toda la información.

---

### **Ventajas del Código 226**
- **Eficiencia**: Reduce el tamaño de las respuestas HTTP, mejorando el rendimiento.
- **Ahorro de Ancho de Banda**: Ideal para aplicaciones con recursos grandes o redes de baja velocidad.
- **Sincronización Rápida**: Facilita mantener datos actualizados en tiempo real.

---

### **Consideraciones**
- **Compatibilidad**: El cliente y el servidor deben admitir manipulaciones delta y el encabezado `A-IM`.
- **Casos Limitados**: Este código no es ampliamente utilizado fuera de aplicaciones específicas, como sincronización incremental.

El código HTTP `226 IM Used` es una herramienta poderosa para mejorar la eficiencia en la transferencia de datos, especialmente en sistemas que manejan versiones de recursos o sincronización incremental.

*/
