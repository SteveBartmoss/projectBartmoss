/*

Un **Higher-Order Component (HOC)** en React es un patrón avanzado que implica una función que toma un componente como argumento y devuelve un nuevo componente mejorado. Es comúnmente utilizado para reutilizar la lógica entre componentes.

---

### **Definición**
Un **HOC** es una función de JavaScript con la siguiente forma:

```javascript
const withEnhancement = (WrappedComponent) => {
    return (props) => {
        // Lógica adicional o modificaciones
        return <WrappedComponent {...props} />;
    };
};
```

Aquí:
- `WrappedComponent`: Es el componente original que será envuelto.
- La función devuelve un nuevo componente que agrega funcionalidad o modifica el comportamiento del componente original.

---

### **Cuándo usar HOCs**
Se utilizan HOCs para:
1. **Reutilizar lógica**: Compartir funcionalidad común entre componentes sin duplicar código.
2. **Modificar comportamiento**: Interceptar o transformar props.
3. **Añadir funcionalidades**: Por ejemplo, manejar autorizaciones, acceder a datos desde una API, o manipular el estado global.

---

### **Ejemplo básico: Un HOC para registrar props**
Supongamos que queremos registrar las props de un componente:

```javascript
import React from 'react';

const withLogger = (WrappedComponent) => {
    return (props) => {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
};

const SimpleComponent = (props) => {
    return <div>Hola, {props.name}!</div>;
};

// Usar el HOC
const EnhancedComponent = withLogger(SimpleComponent);

// En la aplicación
<EnhancedComponent name="Marco" />;
```

En este ejemplo:
- `withLogger` es el HOC.
- `SimpleComponent` es el componente original.
- `EnhancedComponent` es el componente envuelto que incluye la funcionalidad adicional.

Cuando `EnhancedComponent` se renderiza, registrará las props en la consola antes de renderizar el contenido.

---

### **Ejemplo práctico: HOC para proteger rutas**
Un caso de uso común es proteger rutas basadas en la autenticación del usuario:

```javascript
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Verifica autenticación

        if (!isAuthenticated) {
            return <Navigate to="/login" />; // Redirige a la página de inicio de sesión
        }

        return <WrappedComponent {...props} />;
    };
};

const Dashboard = () => {
    return <h1>Bienvenido al Dashboard</h1>;
};

// Usar el HOC
const ProtectedDashboard = withAuth(Dashboard);

// En la aplicación
<ProtectedDashboard />;
```

Aquí:
- `withAuth` verifica si el usuario está autenticado.
- Si no está autenticado, redirige al usuario a la página de inicio de sesión (`/login`).
- Si está autenticado, renderiza el componente `Dashboard`.

---

### **Ventajas de los HOCs**
1. **Reutilización**: Puedes aplicar el mismo HOC a varios componentes.
2. **Separación de preocupaciones**: La lógica adicional se abstrae fuera del componente principal.
3. **Composición**: Puedes encadenar varios HOCs para combinar funcionalidades.

---

### **Desventajas de los HOCs**
1. **Render prop nesting**: Anidar muchos HOCs puede dificultar la lectura del código.
2. **Debugging complicado**: Es más difícil rastrear errores, ya que el componente original se envuelve varias veces.
3. **Alternativas modernas**: Los HOCs son menos comunes con la introducción de los hooks, que permiten manejar lógica reutilizable de manera más directa y sencilla.

---

### **Alternativa moderna: Hooks**
En lugar de HOCs, React recomienda usar hooks cuando sea posible. Por ejemplo, en lugar de un HOC para la autenticación, podrías usar un hook:

```javascript
import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    return Boolean(localStorage.getItem('authToken'));
};

const Dashboard = () => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <h1>Bienvenido al Dashboard</h1>;
};
```

---

### **Conclusión**
- Los **HOCs** son un patrón poderoso en React para reutilizar lógica.
- Aunque son útiles, los **hooks** han reducido su uso en muchos casos modernos.
- Sin embargo, entender los HOCs sigue siendo importante, ya que aún son utilizados en bibliotecas como `react-redux` (`connect`) y otros ecosistemas.

*/
