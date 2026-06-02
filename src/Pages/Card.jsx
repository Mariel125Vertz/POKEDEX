import { useContext, useEffect, useState } from "react"
import { PacmanLoader } from "react-spinners";
import { PageContext } from "../components/Context/pageContext";

const Card = ({url, nombre, noPokemon, pokemon}) => {
    const [imagen,setImagen] = useState();
    const {setPokemonSeleccionado} = useContext(PageContext)
    const obtenerImagen = async () =>{
        try {
            const resultado = await fetch(url);
            const datosPokemon = await resultado.json();
            setImagen(datosPokemon.sprites.other.dream_world.front_default);
        } catch (error) {
            
        }
    
    }
    useEffect(()=>{
        obtenerImagen()
    },[])




  return (
    <li
    onClick={()=>{setPokemonSeleccionado(pokemon)}}
    className="transition duration-500 hover:scale-105 h-[180px] mb-10">
         {imagen?  (<img className="w-[150px] h-[150px] mb-[-50px]" src={imagen}/>):
         <PacmanLoader className="m-auto" color="#960069" />
         }
        <div className="bg-pink-900 text-white p-2 pt-10  shadow-xl shadow-slate-600 rounded">  
            <p className="pink-200 font-bold text-xl">#{noPokemon}</p>
            <h2 className="text-2xl capitalize">{nombre}</h2>
        </div>
    </li>
  )
}

export default Card