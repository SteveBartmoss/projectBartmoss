import { Portada } from "../componentes/portada/portada"
import { DivArticle, DivContent } from "../../componentes/contenedores/contenedores";
import { Divider } from "../../componentes/divider/Divider";

export function HttpCode(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Codigos de respuesta"} text={"Por Steve 03/09/2024"} />

            <DivArticle>
                <DivContent>
                    <h1>100</h1>

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

                    <h1>101</h1>

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

                    <h1>102</h1>

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
                    
                </DivContent>
            </DivArticle>
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



---

## 



---

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

*/