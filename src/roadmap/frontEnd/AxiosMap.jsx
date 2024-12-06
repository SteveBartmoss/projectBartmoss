import { CodeSpace } from "../../componentes/codeSpace/CodeSpace";
import { DivArticle, DivContent } from "../../componentes/contenedores/contenedores";
import { Portada } from "../../componentes/portada/portada";


export function AxiosMap(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Axios"} text={"Por Steve 06/12/2024"} />

            <DivArticle>
                <DivContent>
                    <h1>Realizar solicitudes GET, POST, PUT, DELETE</h1>

                    <h2>Solicitudes GET</h2>

                    <p>
                        Se utiliza para obtener datos del servidor.
                    </p>

                    <CodeSpace title={'Ejemplo'} rawCode={`import axios from 'axios';

                        axios.get('https://api.example.com/users')
                            .then(response => {
                                console.log('Datos recibidos:', response.data);
                            })
                            .catch(error => {
                                console.error('Error en la solicitud GET:', error);
                            });`} /> 
                    <p>
                        Usando async/await
                    </p>

                    <CodeSpace title={"Ejemplo"} rawCode={`const fetchData = async () => {
                            try {
                                const response = await axios.get('https://api.example.com/users');
                                console.log('Datos recibidos:', response.data);
                            } catch (error) {
                                console.error('Error en la solicitud GET:', error);
                            }
                        };
                        
                        fetchData();`} />
                        
                </DivContent>
            </DivArticle>
        </>
    )
}

/*

Aquí tienes un desglose del contenido para los temas solicitados relacionados con **Axios en JavaScript**:

---

## **Conceptos básicos**
### ¿Qué es Axios?
Axios es una biblioteca basada en Promesas para realizar solicitudes HTTP desde el navegador o Node.js. Permite interactuar con APIs de manera sencilla y ofrece características avanzadas como interceptores y manejo de errores.

---

## ****

### **1. **


#### :
```javascript

```

---

### **2. Solicitudes POST**
Se usa para enviar datos al servidor.

```javascript
import axios from 'axios';

axios.post('https://api.example.com/users', {
  name: 'John Doe',
  email: 'john.doe@example.com',
})
  .then(response => {
    console.log('Datos enviados correctamente:', response.data);
  })
  .catch(error => {
    console.error('Error en la solicitud POST:', error);
  });
```

#### Usando `async/await`:
```javascript
const sendData = async () => {
  try {
    const response = await axios.post('https://api.example.com/users', {
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    console.log('Datos enviados correctamente:', response.data);
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
  }
};

sendData();
```

---

### **3. Solicitudes PUT**
Se usa para actualizar datos en el servidor.

```javascript
import axios from 'axios';

axios.put('https://api.example.com/users/1', {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
})
  .then(response => {
    console.log('Datos actualizados correctamente:', response.data);
  })
  .catch(error => {
    console.error('Error en la solicitud PUT:', error);
  });
```

#### Usando `async/await`:
```javascript
const updateData = async () => {
  try {
    const response = await axios.put('https://api.example.com/users/1', {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    });
    console.log('Datos actualizados correctamente:', response.data);
  } catch (error) {
    console.error('Error en la solicitud PUT:', error);
  }
};

updateData();
```

---

### **4. Solicitudes DELETE**
Se usa para eliminar datos del servidor.

```javascript
import axios from 'axios';

axios.delete('https://api.example.com/users/1')
  .then(response => {
    console.log('Datos eliminados correctamente:', response.data);
  })
  .catch(error => {
    console.error('Error en la solicitud DELETE:', error);
  });
```

#### Usando `async/await`:
```javascript
const deleteData = async () => {
  try {
    const response = await axios.delete('https://api.example.com/users/1');
    console.log('Datos eliminados correctamente:', response.data);
  } catch (error) {
    console.error('Error en la solicitud DELETE:', error);
  }
};

deleteData();
```

---

## **Sintaxis básica de Axios**

### **Configuración básica**
Puedes configurar una instancia global para Axios, como una base URL o encabezados comunes:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json',
  },
});

// Usar la instancia configurada
api.get('/users')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

---

## **Manejo de Promesas y async/await**

### **Con Promesas**
```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Datos recibidos:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### **Con `async/await`**
```javascript
const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log('Datos recibidos:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();
```

---

### **Intercepción de errores**
Puedes interceptar errores globalmente para evitar manejar el mismo error en cada solicitud:

```javascript
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Error global:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);
```

---

Este temario cubre los fundamentos esenciales de Axios en JavaScript, desde realizar solicitudes básicas hasta trabajar con Promesas y configuraciones avanzadas.

*/