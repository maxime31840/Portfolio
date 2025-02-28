import React from "react";
import morpion from "../../assets/morpion.png";
import samurai from "../../assets/samurai.png";
import chifoumi from "../../assets/chifoumi.png";

export default function GridProjet() {
    return (
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-20 text-blue-500">Mes projets</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="shadow-lg shadow-blue-500 rounded-2xl p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-1 flex flex-col justify-between h-full">
                    <img src={morpion} alt="Projet morpion en python" className="w-full h-40 object-contain rounded-xl mb-4" />
                    <h2 className="text-xl font-semibold">Morpion en Python</h2>
                    <p className="text-white-600 my-2">Un jeu du morpion en python avec une interface graphique tkinter pour s'amuser entre amis.</p>
                    <div className="mt-auto">
                        <button className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all transform duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-800 active:scale-95 ml-2">
                            <a href="https://github.com/maxime31840/morpion" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </div>


                <div className="shadow-lg shadow-blue-500 rounded-2xl p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-1 flex flex-col justify-between h-full">
                    <img src={samurai} alt="Projet Java" className="w-full h-40 object-contain rounded-xl mb-4" />
                    <h2 className="text-xl font-semibold">Projet en Java</h2>
                    <p className="text-white-600 my-2">Battle Game est un jeu en Java où des personnages s'affrontent en utilisant un système de classes et d’héritage pour gérer leurs caractéristiques et attaques.</p>
                    <div className="mt-auto">
                        <button className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all transform duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-800 active:scale-95 ml-2">
                            <a href="https://github.com/maxime31840/PierreSabre" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </div>


                <div className="shadow-lg shadow-blue-500 rounded-2xl p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-1 flex flex-col justify-between h-full">
                    <img src={chifoumi} alt="Projet chifoumi en python" className="w-full h-40 object-contain rounded-xl mb-4" />
                    <h2 className="text-xl font-semibold">Chifoumi en python</h2>
                    <p className="text-white-600 my-2">Jeu du chifoumi en python, Joueur contre Joueur / Joueur contre ordinateur (il triche de temps en temps).</p>
                    <div className="mt-auto">
                        <button className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all transform duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-800 active:scale-95 ml-2">
                            <a href="https://github.com/maxime31840/Chifoumi" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    );
}
