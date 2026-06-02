import { pokemonTypeColors } from '../utils/colores';

const PokemonDetalle = ({ pokemon }) => {
    const tipoPrincipal = pokemon.types[0].type.name;
    const colorFondoCirculo = pokemonTypeColors[tipoPrincipal] || "bg-gray-400";

    const getColorBarra = (valor) => {
        if (valor <= 40) return "bg-red-500";
        if (valor >= 80) return "bg-green-500";
        return "bg-orange-500"; 
    };

    const Barra = ({ valor }) => (                                                                                                                     
        <div className="w-full bg-gray-200 h-2 mt-0 mb-1.5"> 
            <div 
                className={`${getColorBarra(valor)} h-2`} 
                style={{ width: `${Math.min(valor, 100)}%` }}
            ></div>
        </div>
    );

    const statsList = [
        { name: 'hp', label: 'Salud' },
        { name: 'attack', label: 'Ataque' },
        { name: 'defense', label: 'Defensa' },
        { name: 'special-attack', label: 'Atq. Esp' },
        { name: 'special-defense', label: 'Def. Esp' },
        { name: 'speed', label: 'Velocidad' }
    ];

    return (
        <div className="p-4 max-w-sm mx-auto flex flex-col">
            
            <h1 className="text-xl font-bold mb-1 text-gray-500">#{pokemon.id}</h1>

            <div className="flex items-center gap-6 mb-4">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-t ${colorFondoCirculo} to-white/100 flex items-center justify-center p-3`}>
                    <img src={pokemon.sprites.other.dream_world.front_default} className="w-full h-full object-contain" alt={pokemon.name} />
                </div>

                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-sm">Tipos:</h1>
                    <div className="flex flex-wrap gap-1">
                        {pokemon.types.map(t => (
                            <span key={t.type.name} className={`${pokemonTypeColors[t.type.name]} text-white px-2 py-0.5 rounded text-xs font-bold capitalize`}>
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-bold text-sm mt-1">Peso:</h1>
                    <p className="text-xs">{pokemon.weight / 10} kg</p>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 capitalize tracking-tight">{pokemon.name}</h1>

            <div className="w-full">
                {statsList.map((stat) => (
                    <div key={stat.name} className="mb-0.5">
                        <h1 className="text-[11px] font-bold text-gray-700">{stat.label}: {pokemon.stats.find(s => s.stat.name === stat.name).base_stat}</h1>
                        <Barra valor={pokemon.stats.find(s => s.stat.name === stat.name).base_stat} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetalle;