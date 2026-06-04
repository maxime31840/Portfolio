import React from "react";
import { Link } from "react-router-dom";

const rights = [
  "Droit à l'information sur l'utilisation des données personnelles.",
  "Droit d'accès aux données vous concernant.",
  "Droit de rectification des informations inexactes.",
  "Droit à l'effacement lorsque la demande est applicable.",
  "Droit à la limitation du traitement dans certains cas.",
  "Droit d'opposition à certains traitements.",
  "Droit à la portabilité pour récupérer vos données dans un format réutilisable.",
];

const principles = [
  "Collecter uniquement les données nécessaires à un objectif précis.",
  "Informer clairement l'utilisateur sur la finalité du traitement.",
  "Conserver les données pendant une durée adaptée.",
  "Garantir la sécurité et la confidentialité des informations.",
  "Permettre l'exercice des droits dans un délai raisonnable.",
];

export default function DroitsUtilisateurs() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Informations légales
          </p>
          <h1 className="text-3xl font-bold text-blue-400 md:text-4xl">
            Droits des utilisateurs et RGPD
          </h1>
          <p className="mx-auto max-w-3xl leading-7 text-slate-300">
            Cette page résume les principaux droits reconnus par le RGPD
            (Règlement général sur la protection des données) et les règles de
            base à respecter lorsqu'un site traite des données personnelles.
          </p>
        </header>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-blue-500/10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Données concernées sur ce site
          </h2>
          <p className="leading-7 text-slate-300">
            Le formulaire de contact affiche actuellement des champs de prénom,
            d'email et de message. D'après l'implémentation actuelle du site,
            ces informations sont gérées localement dans l'interface et ne sont
            pas transmises à un serveur au moment de l'envoi.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-blue-500/10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Vos droits
          </h2>
          <ul className="space-y-3 text-slate-300">
            {rights.map((right) => (
              <li key={right} className="flex gap-3 leading-7">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-blue-500/10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Principes à respecter
          </h2>
          <ul className="space-y-3 text-slate-300">
            {principles.map((principle) => (
              <li key={principle} className="flex gap-3 leading-7">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-blue-500/10">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Exercer vos droits
          </h2>
          <p className="leading-7 text-slate-300">
            Pour toute question sur vos données ou pour demander l'exercice d'un
            droit, vous pouvez passer par la page{" "}
            <Link to="/Contact" className="text-blue-300 underline underline-offset-4">
              Contact
            </Link>
            . En cas de désaccord persistant, vous pouvez également consulter la
            CNIL.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.cnil.fr/fr/comprendre-vos-droits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Vos droits sur la CNIL
            </a>
            <a
              href="https://www.cnil.fr/fr/comprendre-le-rgpd-0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/20"
            >
              Comprendre le RGPD
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
