import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../components/Context/pageContext';
import PokemonDetalle from './PokemonDetalle'; // Tu nuevo archivo de diseño

const InfoPokemon = () => {
  const { pokemonSeleccionado, setPokemonSeleccionado } = useContext(PageContext);
  const [info, setInfo] = useState(null);
  

  useEffect(() => {
    fetch(pokemonSeleccionado.url)
      .then(res => res.json())
      .then(setInfo);
  }, [pokemonSeleccionado]);

  return (
    <div>
       <button onClick={() => setPokemonSeleccionado(null)}
         className="flex gap-1 bg-red-900 text-white px-2 py-1 rounded shadow cursor-pointer">Regresar</button>
      {info ? <PokemonDetalle pokemon={info} /> : <>Cargando...</>}
      
    </div>
  );
};
export default InfoPokemon;