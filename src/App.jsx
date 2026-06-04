import { useState } from "react"; 
import Header from "./components/Header";
import ListaPokemons from './Pages/ListaPokemons';
import { PageContext } from './components/Context/pageContext.jsx';
import { InfoPokemon } from "./Pages/infoPokemon.jsx";

const App = () => {

  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

  return (
    <>
      <Header />
      <PageContext.Provider value={{
        pokemonSeleccionado,
        setPokemonSeleccionado
      }}>
        {pokemonSeleccionado ?
          <InfoPokemon /> :
          <ListaPokemons />
        }
      </PageContext.Provider>
    </>
  );
};

export default App;