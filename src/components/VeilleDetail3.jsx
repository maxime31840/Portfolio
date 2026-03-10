import React from "react";
import { Link } from "react-router-dom";

export default function VeilleDetail3() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Veille 3 - Cybersécurité des PME</h1>
          <p className="text-white/80">
            Thème : menaces fréquentes et plan d'action concret pour réduire les
            risques cyber dans les petites et moyennes entreprises.
          </p>
          <p className="text-sm text-white/70">
            Mise à jour : 10 mars 2026
          </p>
        </header>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Problématique</h2>
          <p>
            Quelles mesures simples, réalistes et priorisées permettent à une PME
            de mieux se protéger contre les attaques les plus courantes ?
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Contexte de la menace</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Le panorama ANSSI 2024 confirme la hausse d'attaques opportunistes
              visant les structures peu préparées.
            </li>
            <li>
              Les rançongiciels restent une menace majeure, notamment via phishing
              et exploitation de failles non corrigées.
            </li>
            <li>
              Les PME sont ciblées pour leur niveau de sécurité hétérogène et
              leur dépendance opérationnelle aux SI (facturation, production,
              logistique, relation client).
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Constats principaux</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Le phishing reste le principal point d'entrée des attaquants.
            </li>
            <li>
              Les mots de passe faibles et l'absence de MFA augmentent fortement
              la probabilité de compromission.
            </li>
            <li>
              Les sauvegardes existent souvent, mais sans test de restauration
              régulier.
            </li>
            <li>
              Beaucoup de PME n'ont pas de procédure claire en cas d'incident
              (qui alerter, quoi isoler, comment redémarrer l'activité).
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Mesures prioritaires recommandées</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Authentification :</strong> activer le MFA sur messagerie,
              VPN, outils cloud et comptes administrateurs.
            </li>
            <li>
              <strong>Hygiène du SI :</strong> inventaire des actifs, mises à
              jour de sécurité rapides, suppression des services exposés inutiles.
            </li>
            <li>
              <strong>Sauvegardes :</strong> règle 3-2-1, copie hors ligne et
              tests de restauration planifiés.
            </li>
            <li>
              <strong>Sensibilisation :</strong> formations courtes et répétées,
              simulations de phishing, rappel des réflexes de signalement.
            </li>
            <li>
              <strong>Réponse à incident :</strong> fiche réflexe, journal
              d'événements, contacts de crise (prestataire, assurance, autorités).
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Plan d'action sur 90 jours</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Semaine 1 à 3 : audit express (comptes, accès distants, sauvegardes,
              postes sensibles, dépendances cloud).
            </li>
            <li>
              Semaine 4 à 6 : MFA généralisé, politique de mots de passe, patch
              management, segmentation minimale du réseau.
            </li>
            <li>
              Semaine 7 à 10 : exercice de restauration de sauvegarde et test de
              scénario rançongiciel.
            </li>
            <li>
              Semaine 11 à 13 : formation ciblée des collaborateurs et mise en
              place d'un cycle de revue mensuelle des incidents.
            </li>
          </ol>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>
            La cybersécurité d'une PME ne repose pas sur un outil unique, mais
            sur une discipline opérationnelle continue. Les gains les plus rapides
            viennent d'un triptyque simple : MFA, sauvegardes testées, et
            sensibilisation des équipes.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Sources utilisées</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <a
                href="https://cyber.gouv.fr/guide/guide-dhygiene-informatique/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                ANSSI - Guide d'hygiène informatique
              </a>
            </li>
            <li>
              <a
                href="https://cyber.gouv.fr/publications/attaques-par-rancongiciels-tous-concernes"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                ANSSI - Attaques par rançongiciels, tous concernés
              </a>
            </li>
            <li>
              <a
                href="https://cyber.gouv.fr/publications/panorama-de-la-cybermenace-2024"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                ANSSI - Panorama de la cybermenace 2024
              </a>
            </li>
            <li>
              <a
                href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/hameconnage-phishing-menace-predominante-tous-publics"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Cybermalveillance.gouv.fr - Hameçonnage : menace prédominante
              </a>
            </li>
            <li>
              <a
                href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/kit-de-sensibilisation"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Cybermalveillance.gouv.fr - Kit de sensibilisation
              </a>
            </li>
            <li>
              <a
                href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/senscyber-e-sensibilisation-cybersecurite"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                Cybermalveillance.gouv.fr - SensCyber
              </a>
            </li>
            <li>
              <a
                href="https://www.nist.gov/itl/smallbusinesscyber/nist-cybersecurity-framework-0"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                NIST - Cybersecurity Framework 2.0 (ressources PME)
              </a>
            </li>
            <li>
              <a
                href="https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 underline break-all"
              >
                ENISA - Threat Landscape 2025
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
