import './App.css';
import { DivMain } from './componentes/contenedores/contenedores';
import { AppContextProvider } from './context/contextApp';
import { RouterBlog } from './router/router';


function App() {
  return (
    <AppContextProvider>
      <DivMain>
        <RouterBlog />
      </DivMain>
    </AppContextProvider>
  );
}

export default App;
