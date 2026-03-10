import React from "react";
import { Link } from "react-router-dom";

export default function VeilleDetail1() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">
            Veille 1 - Algorithmes de recommandation
          </h1>
          <p className="text-white/80">
            Thème : influence des algorithmes de recommandation sur l'identité
            numérique des jeunes adultes.
          </p>
          <p className="text-sm text-white/70">
            Mise à jour : 10 mars 2026
          </p>
        </header>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Problématique</h2>
          <p>
            Dans quelle mesure les algorithmes de recommandation des réseaux
            sociaux influencent-ils la construction de l'identité numérique chez
            les jeunes adultes ?
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Contexte et cadre réglementaire</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Le <strong>Digital Services Act (DSA)</strong> est pleinement
              applicable dans l'UE depuis le <strong>17 février 2024</strong>.
              Il impose des obligations renforcées de transparence sur les
              systèmes de recommandation.
            </li>
            <li>
              Le <strong>17 janvier 2025</strong>, la Commission européenne a
              demandé des mesures techniques supplémentaires sur les systèmes de
              recommandation de X.
            </li>
            <li>
              Le <strong>26 janvier 2026</strong>, la Commission a ouvert une
              nouvelle enquête liée à Grok et étendu l'analyse des obligations
              de gestion des risques systémiques.
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Constats principaux de la veille</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Les contenus proposés sont personnalisés selon l'historique de
              navigation, le temps de visionnage, les clics, les abonnements et
              les interactions.
            </li>
            <li>
              Cette personnalisation améliore la pertinence perçue, mais peut
              aussi renforcer des boucles de répétition (mêmes thématiques,
              mêmes points de vue, mêmes normes sociales).
            </li>
            <li>
              Les plateformes optimisent surtout l'engagement : cela peut
              favoriser les contenus émotionnels, polarisants ou fortement
              normatifs dans certains contextes.
            </li>
            <li>
              Chez les jeunes, les effets observés dépendent de l'usage :
              l'usage compulsif semble plus corrélé aux difficultés de santé
              mentale que le simple temps d'écran.
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Impacts sur l'identité numérique</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Auto-présentation stratégique :</strong> adaptation du
              contenu publié pour répondre à ce qui "performe" dans le fil.
            </li>
            <li>
              <strong>Comparaison sociale accrue :</strong> exposition répétée à
              des standards de réussite, de beauté ou de style de vie difficiles
              à atteindre.
            </li>
            <li>
              <strong>Dépendance aux signaux de validation :</strong> likes,
              commentaires, partages et vues deviennent des marqueurs de valeur
              personnelle.
            </li>
            <li>
              <strong>Réduction de la diversité informationnelle :</strong> les
              choix automatisés peuvent limiter l'exploration volontaire de points
              de vue contradictoires.
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Analyse critique</h2>
          <p>
            Les algorithmes ne sont pas "neutres" : ils traduisent des objectifs
            de plateforme (rétention, monétisation, sécurité, conformité
            réglementaire). Leur impact social n'est donc pas seulement technique,
            mais aussi économique et politique.
          </p>
          <p>
            Les données récentes invitent à une lecture nuancée : les réseaux
            sociaux peuvent soutenir la créativité, l'information et le lien
            social, mais les trajectoires d'usage problématique sont associées à
            des effets négatifs plus marqués. L'enjeu est donc la qualité d'usage
            et la gouvernance algorithmique, pas uniquement la durée d'utilisation.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>
            Les algorithmes de recommandation organisent l'attention et influencent
            les parcours identitaires. La réponse ne peut pas être uniquement
            individuelle : elle doit combiner transparence des plateformes,
            contrôle utilisateur (paramètres de recommandation), éducation aux
            médias et suivi réglementaire.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Sources utilisées</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/policies/digital-services-act"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Commission européenne - Digital Services Act (page de synthèse)
              </a>
            </li>
            <li>
              <a
                href="https://eur-lex.europa.eu/eli/reg/2022/2065/oj"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                EUR-Lex - Règlement (UE) 2022/2065 (DSA)
              </a>
            </li>
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/news/commission-addresses-additional-investigatory-measures-x-ongoing-proceedings-under-digital-services"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Commission européenne - Mesures d'enquête supplémentaires sur X
                (17 janvier 2025)
              </a>
            </li>
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/news/commission-investigates-grok-and-xs-recommender-systems-under-digital-services-act"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Commission européenne - Enquête Grok / X (26 janvier 2026)
              </a>
            </li>
            <li>
              <a
                href="https://www.pewresearch.org/internet/2025/04/22/teens-social-media-and-mental-health"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Pew Research Center - Teens, Social Media and Mental Health (22
                avril 2025)
              </a>
            </li>
            <li>
              <a
                href="https://jamanetwork.com/journals/jama/article-abstract/2835481"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                JAMA - Addictive Screen Use Trajectories... (18 juin 2025)
              </a>
            </li>
            <li>
              <a
                href="https://www.nature.com/articles/s41562-025-02167-9"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Nature Human Behaviour - Social media interventions to improve
                well-being (15 mai 2025)
              </a>
            </li>
            <li>
              <a
                href="https://www.cnil.fr/fr/enfants-et-ados/reseaux-sociaux"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                CNIL - Réseaux sociaux (droits, vie privée, identité numérique)
              </a>
            </li>
          </ul>
        </section>

        <Link
          to="/Veille"
          className="inline-block bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Retour aux 3 veilles
        </Link>
      </div>
    </div>
  );
}
