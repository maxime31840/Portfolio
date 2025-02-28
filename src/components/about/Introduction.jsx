import React from "react";
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";

export default function Introduction() {
    return (
        <div className="flex flex-col items-center text-white p-5 mt-5">


        <blockquote className="text-center">


          <p className="text-lg text-justify">
           Salut à tous, je m'appelle{" "}
            <span className="text-blue-500 font-semibold">Maxime LOURDEL</span>{" "}
            j'habite à <span className="text-blue-500 font-semibold">Toulouse.</span>
            <br />
            Je suis actuellement à la recherche d'une{" "}<span className="text-blue-500 font-semibold">Alternance.</span>
            <br />
            J'ai obtenue mon diplôme de{" "}<span className="text-blue-500 font-semibold">Baccalauréat STI2D{" "}</span>à LPO Saint-Exupéry.
            <br />
            <br />
            Dans mon temps libre j'adore !
          </p>


          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <ImPointRight className="text-blue-500 mr-2" /> Jouer aux jeux vidéo
            </li>
            <li className="flex items-center">
              <ImPointRight className="text-blue-500 mr-2" /> Voyager
            </li>
            <li className="flex items-center">
              <ImPointRight className="text-blue-500 mr-2" /> Faire du sport
            </li>
          </ul>


          <div className="flex justify-center mt-4">
            <a 
                href="/cv_maxime_lourdel.pdf" 
                download="Maxime_Lourdel_cv.pdf" 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all w-fit"
            >
                <AiOutlineDownload className="text-xl" />Télécharger mon CV
            </a>

            
        </div>
        </blockquote>
        </div>
    );
}