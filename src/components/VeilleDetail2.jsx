import React from "react";
import { Link } from "react-router-dom";

export default function VeilleDetail2() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">
            Veille 2 - IA générative et propriété intellectuelle
          </h1>
          <p className="text-white/80">
            Thème : statut juridique des contenus générés par IA et impact pour
            les créateurs, entreprises et développeurs.
          </p>
          <p className="text-sm text-white/70">
            Mise à jour : 10 mars 2026
          </p>
        </header>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Problématique</h2>
          <p>
            Comment protéger les œuvres originales quand des modèles d'IA
            générative produisent des textes, images ou musiques proches de
            styles existants ?
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Contexte réglementaire 2024-2026</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Le règlement européen <strong>AI Act (UE 2024/1689)</strong> est
              entré en vigueur en 2024 et s'applique progressivement.
            </li>
            <li>
              Les premières obligations sont devenues applicables le{" "}
              <strong>2 février 2025</strong> (pratiques interdites et
              exigences de culture IA).
            </li>
            <li>
              En juillet 2025, la Commission a publié le{" "}
              <strong>Code de bonnes pratiques GPAI</strong> (modèles d'usage
              général), pour accompagner la mise en conformité.
            </li>
            <li>
              La propriété intellectuelle reste encadrée par plusieurs textes
              complémentaires (droit d'auteur, licences, exceptions de fouille
              de textes et de données).
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Points essentiels de la veille</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Les jeux de données d'entraînement peuvent contenir des œuvres
              protégées ; la traçabilité des sources devient un enjeu central.
            </li>
            <li>
              Les frontières entre inspiration, imitation de style et
              contrefaçon sont juridiquement complexes, surtout pour l'image et
              l'audio.
            </li>
            <li>
              Les obligations de transparence (information utilisateur, marquage
              du contenu IA, documentation technique) prennent une place majeure.
            </li>
            <li>
              La gouvernance contractuelle (licences, CGU, politique de dataset)
              est aussi importante que la conformité réglementaire.
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Analyse technique et juridique</h2>
          <p>
            Sur le plan technique, la question clé est la documentation :
            provenance des données, mécanismes de filtrage, droits associés,
            gestion des demandes de retrait. Sans inventaire fiable, la défense
            juridique d'un modèle devient fragile.
          </p>
          <p>
            Sur le plan juridique, il faut distinguer trois niveaux : le régime
            des données d'entraînement, le statut des sorties générées et la
            responsabilité de l'opérateur qui publie ou commercialise le contenu.
          </p>
          <p>
            Pour une organisation, le risque n'est pas seulement la sanction :
            c'est aussi le risque réputationnel (accusation de plagiat, usage non
            autorisé d'un style, non-transparence envers les clients).
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Recommandations opérationnelles</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Mettre en place un <strong>registre des modèles IA</strong>
              utilisés (fournisseur, version, finalité, données traitées).
            </li>
            <li>
              Définir une <strong>politique interne de propriété
              intellectuelle</strong> pour l'usage de l'IA générative.
            </li>
            <li>
              Exiger des prestataires des clauses de transparence sur les
              datasets et sur la gestion des réclamations liées aux droits.
            </li>
            <li>
              Former les équipes à distinguer contenu assisté, contenu généré et
              contenu original, avec validation humaine avant publication.
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>
            L'IA générative est un accélérateur de production de contenu, mais
            elle déplace les responsabilités vers la gouvernance des données, des
            contrats et de la preuve. La conformité durable repose sur un équilibre
            entre innovation, transparence et respect des droits.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Sources utilisées</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <a
                href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                EUR-Lex - Règlement (UE) 2024/1689 (AI Act)
              </a>
            </li>
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Commission européenne - Regulatory framework for AI
              </a>
            </li>
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/news/first-rules-artificial-intelligence-act-are-now-applicable"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Commission européenne - First rules of the AI Act applicable
                (2 février 2025)
              </a>
            </li>
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-prohibited-artificial-intelligence-ai-practices-defined-ai-act"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Commission européenne - Guidelines on prohibited AI practices
                (4 février 2025)
              </a>
            </li>
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/news/general-purpose-ai-code-practice-now-available"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Commission européenne - General-Purpose AI Code of Practice
                (10 juillet 2025)
              </a>
            </li>
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/library/ai-office-invites-providers-sign-gpai-code-practice"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                AI Office - Invitation à signer le Code GPAI (17 juillet 2025)
              </a>
            </li>
            <li>
              <a
                href="https://www.copyright.gov/ai/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                U.S. Copyright Office - Copyright and Artificial Intelligence
              </a>
            </li>
            <li>
              <a
                href="https://eur-lex.europa.eu/eli/dir/2019/790/oj"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                EUR-Lex - Directive (UE) 2019/790 (droit d'auteur et marché
                unique numérique)
              </a>
            </li>
            <li>
              <a
                href="https://www.wipo.int/en/web/frontier-technologies/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                WIPO - Intellectual Property and Frontier Technologies
              </a>
            </li>
            <li>
              <a
                href="https://www.cnil.fr/fr/intelligence-artificielle"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                CNIL - Intelligence artificielle et données personnelles
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
