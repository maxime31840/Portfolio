import React from "react";
import { Link } from "react-router-dom";

export default function SourceVeille1() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Synthese - Source 1</h1>
          <p className="text-white/80">
            Theme: algorithmes de recommandation et leurs effets sur les usages
            numeriques.
          </p>
        </div>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Synthese courte</h2>
          <p>
            L'article explique que les algorithmes de recommandation servent a
            personnaliser l'experience utilisateur pour augmenter le temps passe,
            l'engagement et la fidelisation. Ils reposent sur l'analyse des
            donnees d'usage (clics, historique, recherches, visionnage) et
            s'appuient principalement sur trois approches: filtrage collaboratif,
            content-based et popularite.
          </p>
          <p>
            Cette logique est performante pour orienter la consommation de
            contenus, mais elle concentre aussi la visibilite sur une partie
            limitee de l'offre et renforce les preferences deja presentes.
            L'article met en avant des risques de polarisation, de bulles
            informationnelles et d'exploitation massive des donnees personnelles.
          </p>
          <p>
            En conclusion, ces systemes sont devenus centraux dans l'economie
            numerique: ils offrent une forte efficacite business, mais posent des
            enjeux majeurs de diversite informationnelle, protection de la vie
            privee et responsabilite des plateformes.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3">Lien de la source</h2>
          <a
            href="https://liora.io/algorithme-de-recommandation-tout-savoir"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 hover:text-blue-200 underline break-all"
          >
            https://liora.io/algorithme-de-recommandation-tout-savoir
          </a>
        </section>

        <Link
          to="/Veille"
          className="inline-block bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Retour a la veille
        </Link>
      </div>
    </div>
  );
}
