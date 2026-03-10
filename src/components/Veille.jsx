import React from "react";
import { Link } from "react-router-dom";

const veilles = [
  {
    id: "algorithmes-recommandation",
    titre: "Veille 1 - Algorithmes de recommandation",
    resume:
      "Influence des réseaux sociaux sur la construction de l'identité numérique chez les jeunes adultes.",
    statut: "Complétée",
  },
  {
    id: "ia-generative",
    titre: "Veille 2 - IA générative et propriété intellectuelle",
    resume:
      "Enjeux juridiques, techniques et économiques liés aux contenus générés par intelligence artificielle.",
    statut: "Complétée",
  },
  {
    id: "cybersecurite-pme",
    titre: "Veille 3 - Cybersécurité des PME",
    resume:
      "Risques majeurs, priorités de protection et organisation opérationnelle de la réponse à incident.",
    statut: "Complétée",
  },
];

export default function Veille() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white flex justify-center">
      <div className="max-w-6xl w-full space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Veilles technologiques</h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            Sélectionne une veille pour afficher sa synthèse complète sur une
            page dédiée.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {veilles.map((veille) => (
            <article
              key={veille.id}
              className="rounded-xl border border-white/15 bg-black/25 p-6 flex flex-col gap-4"
            >
              <p className="text-xs uppercase tracking-widest text-blue-200/90">
                {veille.statut}
              </p>
              <h2 className="text-xl font-semibold leading-snug">{veille.titre}</h2>
              <p className="text-white/80 text-sm leading-relaxed flex-grow">
                {veille.resume}
              </p>
              <Link
                to={`/Veille/${veille.id}`}
                className="inline-flex justify-center bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Ouvrir la veille
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
