

export function HttpCode(){
    return(
        <>
        </>
    )
}

/*
El código de respuesta **100 Continue** en el protocolo HTTP es un código de estado informativo. Indica que el servidor ha recibido los encabezados iniciales de la solicitud del cliente y que el cliente puede continuar enviando el cuerpo de la solicitud (por ejemplo, el contenido de un archivo grande que se está cargando).

Este código se usa principalmente en situaciones donde el cliente envía una solicitud **con cuerpo** (como una solicitud `POST` o `PUT`) y utiliza el encabezado `Expect: 100-continue`. Este encabezado indica que el cliente desea verificar si el servidor está dispuesto a procesar la solicitud antes de enviar el cuerpo completo. Si el servidor responde con `100 Continue`, el cliente envía el cuerpo de la solicitud.

---

## Características Principales

1. **Propósito:** Optimizar el flujo de datos entre cliente y servidor, evitando enviar cuerpos grandes si el servidor no puede manejar la solicitud.
2. **Cuando se usa:** Se usa típicamente en solicitudes que incluyen el encabezado `Expect: 100-continue`.
3. **Flujo de comunicación:**
   - El cliente envía una solicitud inicial con encabezados y el encabezado `Expect: 100-continue`.
   - El servidor responde con `100 Continue` si todo está en orden.
   - El cliente envía el cuerpo de la solicitud.
   - El servidor responde con un código final (como `200 OK` o `400 Bad Request`).

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

*/