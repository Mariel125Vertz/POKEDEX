import { useContext, useEffect, useState } from "react";
import { PageContext } from "../components/Context/pageContext";

export const InfoPokemon = () => {

    const { pokemonSeleccionado, setPokemonSeleccionado } = useContext(PageContext);
    const [pokemon, setPokemon] = useState();



    const leerinfoPokemon = async () => {

        if (!pokemonSeleccionado) return;

        const respuesta = await fetch(pokemonSeleccionado.url);
        const info = await respuesta.json();

        setPokemon(info);
    };


    useEffect(() => {
        leerinfoPokemon();
    }, [pokemonSeleccionado]);

    if (!pokemon) {
        return <div className="p-4">Cargando información</div>;
    }

    const pokemonTypeColors = {
        normal: "bg-stone-400",
        fire: "bg-orange-500",
        water: "bg-blue-500",
        electric: "bg-yellow-400",
        grass: "bg-green-500",
        ice: "bg-cyan-300",
        fighting: "bg-red-700",
        poison: "bg-purple-600",
        ground: "bg-amber-600",
        flying: "bg-indigo-400",
        psychic: "bg-pink-500",
        bug: "bg-lime-500",
        rock: "bg-yellow-700",
        ghost: "bg-violet-700",
        dragon: "bg-indigo-700",
        dark: "bg-zinc-700",
        steel: "bg-slate-400",
        fairy: "bg-pink-300",
        stellar: "bg-teal-400",
        unknown: "bg-gray-500",
    };

    return (
        <div className="p-4">

            <button
                className="text-white bg-pink-900 border border-red-900 rounded px-2 py-1 flex gap-1 mb-4"
                onClick={() => setPokemonSeleccionado(null)}
            >
                Regresar
            </button>

            <div className="flex justify-between items-start">

                <div className="w-20"></div>



                <div className="flex-1 flex flex-col items-center -mt-15">
                    <h1 className="font-bold text-xl mb-2">
                        #{pokemon.id}
                    </h1>
                    <div
                        className={`w-[180px] h-[180px] rounded-full flex justify-center items-center
                        ${pokemonTypeColors[pokemon.types[0].type.name]} bg-gradient-to-t to-white/95`}
                    >
                        <img
                            className="w-[140px] h-[140px]"
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                        />
                    </div>

                    <h2 className="mt-2 font-bold text-lg capitalize">
                        {pokemon.name}
                    </h2>

                </div>

                <div>

                </div>


                <section>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="font-bold  capitalize">Tipos:</p>
                            <div className="flex gap-2 mt-1">
                                {pokemon.types.map((t) => (
                                    <span key={t.type.name} className={`px-4 py-1 rounded-lg text-white font-bold capitalize ${pokemonTypeColors[t.type.name]}`}>
                                        {t.type.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="font-bold capitalize">Peso:</p>
                            <p>{pokemon.weight / 10} kg</p>
                        </div>
                    </div>
                </section>

            </div>


            <div className="flex flex-col items-center gap-3 mt-4">

                <div>
                    <h1 className="font-bold text-xs capitalize">
                        {pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}
                    </h1>
                    <div className="w-40 bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${pokemonTypeColors[pokemon.types[0].type.name]}`}
                            style={{ width: `${(pokemon.stats[0].base_stat / 200) * 100}%` }}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-xs capitalize">
                        {pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}
                    </h1>
                    <div className="w-40 bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${pokemonTypeColors[pokemon.types[0].type.name]}`}
                            style={{ width: `${(pokemon.stats[1].base_stat / 255) * 100}%` }}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-xs capitalize">
                        {pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}
                    </h1>
                    <div className="w-40 bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${pokemonTypeColors[pokemon.types[0].type.name]}`}
                            style={{ width: `${(pokemon.stats[2].base_stat / 255) * 100}%` }}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-xs capitalize">
                        {pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}
                    </h1>
                    <div className="w-40 bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${pokemonTypeColors[pokemon.types[0].type.name]}`}
                            style={{ width: `${(pokemon.stats[3].base_stat / 255) * 100}%` }}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-xs capitalize">
                        {pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}
                    </h1>
                    <div className="w-40 bg-gray-200 rounded-full h-2 ">
                        <div
                            className={`h-2 rounded-full ${pokemonTypeColors[pokemon.types[0].type.name]}`}
                            style={{ width: `${(pokemon.stats[4].base_stat / 255) * 100}%` }}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-xs capitalize">
                        {pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}
                    </h1>
                    <div className="w-40 bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${pokemonTypeColors[pokemon.types[0].type.name]}`}
                            style={{ width: `${(pokemon.stats[5].base_stat / 255) * 100}%` }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};