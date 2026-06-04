import React, { useState } from "react";
import samurai from "../../assets/samurai.png";
import chifoumi from "../../assets/chifoumi.png";
import cyberSecurity from "../../assets/cybersécurité.png";
import glpiDashboard from "../../assets/glpi-dashboard.svg";
import glpiDockerTerminal from "../../assets/glpi-docker-terminal.svg";
import glpiSetup from "../../assets/glpi-setup.svg";
import ticketingApi from "../../assets/ticketing-api.svg";
import tennisAcademyLogo from "../../assets/tennis-academy-logo.svg";
import tennis1 from "../../assets/tennis1.png";
import tennis2 from "../../assets/tennis2.png";

const projects = [
  {
    id: "ticketing-api",
    title: "API de gestion de tickets",
    category: "Projet scolaire",
    image: ticketingApi,
    shortDescription:
      "Une API REST de ticketing permettant de créer, consulter, modifier et supprimer des tickets avec persistance SQL.",
    context:
      "L'objectif était de construire un back-end clair et exploitable pour la gestion de tickets, avec une architecture simple autour de Node.js, Express et Sequelize. Le projet m'a permis de travailler la logique CRUD, la validation des requêtes HTTP et la structuration d'une documentation technique utilisable pour les tests et la maintenance.",
    stack: ["Node.js", "Express", "Sequelize", "SQL", "Postman"],
    achievements: [
      "Mise en place des endpoints CRUD pour créer, lister, consulter, modifier et supprimer des tickets.",
      "Validation des identifiants et des champs obligatoires pour sécuriser les traitements côté API.",
      "Structuration d'un modèle de ticket avec gestion des statuts, priorités et réponses techniques.",
      "Rédaction d'une documentation API détaillée avec cas d'erreur, scénarios de test Postman et recommandations techniques.",
    ],
    skills: [
      "Concevoir une API REST structurée",
      "Manipuler une base de données via un ORM",
      "Valider et traiter des requêtes HTTP",
      "Documenter et tester un service back-end",
    ],
    links: [],
  },
  {
    id: "aimlab",
    title: "AimLab",
    category: "Projet personnel",
    image: "/aimlab.png",
    shortDescription:
      "Un mini-jeu web orienté réflexes et précision, pensé pour proposer une expérience simple, rapide et amusante.",
    context:
      "Je voulais créer un projet front rapide à prendre en main, avec une interface claire et un objectif ludique. L'idée était aussi de consolider mes bases en JavaScript et en logique d'interaction côté client.",
    stack: ["JavaScript", "HTML", "CSS", "Vercel"],
    achievements: [
      "Conception de la logique du jeu et du système d'interaction utilisateur.",
      "Création d'une interface accessible rapidement avec un retour visuel immédiat.",
      "Déploiement en ligne pour rendre le projet directement testable.",
    ],
    skills: [
      "Concevoir une interface simple et interactive",
      "Structurer la logique d'un projet front-end",
      "Mettre un projet en ligne",
    ],
    links: [
      {
        label: "Lien du site",
        href: "https://aim-lab-lake.vercel.app/",
      },
    ],
  },
  {
    id: "battle-game",
    title: "Projet Java - Battle Game",
    category: "Projet scolaire",
    image: samurai,
    shortDescription:
      "Un jeu de combat en Java basé sur des personnages, des classes et un système d'héritage orienté objet.",
    context:
      "Ce projet m'a permis de travailler la programmation orientée objet dans un cas concret. L'objectif était de modéliser des personnages avec des comportements distincts et une architecture de code réutilisable.",
    stack: ["Java", "POO", "GitHub"],
    achievements: [
      "Création de plusieurs classes de personnages avec des attributs et comportements spécifiques.",
      "Mise en place d'un système d'héritage pour factoriser les mécaniques communes.",
      "Organisation du code pour rendre le projet plus lisible et évolutif.",
    ],
    skills: [
      "Appliquer les principes de programmation orientée objet",
      "Structurer un projet Java",
      "Modéliser des comportements métier simples",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/maxime31840/PierreSabre",
      },
    ],
  },
  {
    id: "chifoumi",
    title: "Chifoumi en Python",
    category: "Projet personnel",
    image: chifoumi,
    shortDescription:
      "Une version Python du chifoumi jouable en local, avec mode joueur contre joueur et joueur contre ordinateur.",
    context:
      "Je voulais développer un jeu simple pour travailler les conditions, la gestion des entrées utilisateur et la logique de déroulement d'une partie. J'y ai ajouté une touche plus personnelle avec un ordinateur qui ne joue pas toujours loyalement.",
    stack: ["Python", "Logique algorithmique", "GitHub"],
    achievements: [
      "Gestion de plusieurs modes de jeu dans une même application.",
      "Implémentation des règles du chifoumi et du traitement des résultats.",
      "Ajout d'un comportement personnalisé côté ordinateur pour rendre le jeu moins prévisible.",
    ],
    skills: [
      "Développer une logique algorithmique simple",
      "Gérer les entrées utilisateur",
      "Concevoir un programme Python structuré",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/maxime31840/Chifoumi",
      },
    ],
  },
  {
    id: "tennis-academy",
    title: "Tennis Academy",
    category: "Projet scolaire",
    image: tennisAcademyLogo,
    shortDescription:
      "Un projet de gestion de formation décliné en application web et en application JavaFX.",
    context:
      "C'est le projet qui se rapproche le plus d'un besoin métier complet. L'objectif était de proposer un outil permettant de gérer des formations, tout en travaillant à la fois la logique applicative, l'organisation des données et l'expérience utilisateur sur deux environnements différents.",
    stack: ["Java", "JavaFX", "Application web", "GitHub"],
    achievements: [
      "Conception d'un gestionnaire de formation avec une logique centrée sur les utilisateurs et les données à suivre.",
      "Développement d'une version application web pour répondre à un usage navigateur.",
      "Développement d'une version JavaFX pour une approche applicative bureau.",
      "Réflexion sur l'organisation fonctionnelle du projet pour garder une structure cohérente entre les deux versions.",
    ],
    skills: [
      "Analyser un besoin et le traduire en fonctionnalités",
      "Développer une application métier",
      "Concevoir une interface adaptée à l'utilisateur",
      "Comparer plusieurs approches techniques pour un même besoin",
    ],
    proofs: [
      {
        src: tennis1,
        alt: "Capture écran 1 du projet Tennis Academy",
      },
      {
        src: tennis2,
        alt: "Capture écran 2 du projet Tennis Academy",
      },
    ],
    links: [
      {
        label: "Application web",
        href: "https://github.com/maxime31840/tennis",
      },
      {
        label: "Application Java",
        href: "https://github.com/maxime31840/tennisJavaFX",
      },
    ],
  },
  {
    id: "glpi-docker",
    title: "GLPI sous Docker",
    category: "Projet scolaire",
    image: glpiDashboard,
    shortDescription:
      "Déploiement d'un environnement GLPI conteneurisé avec Docker Compose, base de données et exposition web sécurisée.",
    context:
      "L'objectif était de mettre en place un outil de gestion de parc et de support dans une architecture reproductible. Le projet m'a permis de travailler le déploiement de services, la configuration réseau entre conteneurs et la logique d'installation d'une application métier.",
    stack: ["Docker", "Docker Compose", "GLPI", "Traefik"],
    achievements: [
      "Création de l'environnement GLPI avec une pile conteneurisée prête à être redéployée.",
      "Configuration du réseau, des services et de l'initialisation technique nécessaire au démarrage.",
      "Validation du fonctionnement via l'installation, l'accès au tableau de bord et les tests de lancement.",
    ],
    skills: [
      "Déployer une application avec Docker Compose",
      "Configurer des services interconnectés",
      "Structurer un environnement technique reproductible",
    ],
    proofs: [
      {
        src: glpiDockerTerminal,
        alt: "Terminal de déploiement GLPI sous Docker",
      },
      {
        src: glpiSetup,
        alt: "Écran d'installation GLPI",
      },
      {
        src: glpiDashboard,
        alt: "Tableau de bord GLPI",
      },
    ],
    links: [],
  },
  {
    id: "veille-cyber",
    title: "Veille cyber - Cybersécurité des PME",
    category: "Veille technologique",
    image: cyberSecurity,
    shortDescription:
      "Une veille sur les risques majeurs qui touchent les PME, les priorités de protection et l'organisation de la réponse à incident.",
    context:
      "Cette veille a été construite pour synthétiser les menaces les plus courantes visant les petites et moyennes entreprises, tout en proposant une lecture claire des bonnes pratiques à mettre en place.",
    stack: ["Analyse", "Cybersécurité", "Veille", "Rédaction"],
    achievements: [
      "Sélection et synthèse de sources institutionnelles et spécialisées.",
      "Structuration des risques, des mesures de protection et des priorités opérationnelles.",
      "Rédaction d'une page de veille exploitable avec une restitution claire et accessible.",
    ],
    skills: [
      "Analyser et synthétiser des informations techniques",
      "Restituer une veille de manière structurée",
      "Relier des enjeux de cybersécurité à des besoins concrets",
    ],
    links: [
      {
        label: "Ouvrir la veille",
        href: "/Veille/cybersecurite-pme",
      },
    ],
  },
];

function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-blue-500/30 bg-slate-950/70 shadow-lg shadow-blue-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/20">
      <div className="p-5 sm:p-6">
        <div className="mb-5 overflow-hidden rounded-2xl bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-contain p-4"
          />
        </div>

        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              {project.category}
            </span>
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl font-semibold text-white transition hover:bg-blue-500"
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>

        <p className="leading-7 text-slate-300">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/80 px-5 pb-6 pt-6 sm:px-6">
          <div className="grid gap-6">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Contexte du projet
              </h3>
              <p className="leading-7 text-slate-300">{project.context}</p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Réalisations
              </h3>
              <ul className="space-y-2 text-slate-300">
                {project.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 leading-7">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Compétences mises en avant
              </h3>
              <ul className="space-y-2 text-slate-300">
                {project.skills.map((skill) => (
                  <li key={skill} className="flex gap-3 leading-7">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.proofs?.length ? (
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Preuves du projet
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.proofs.map((proof) => (
                    <div
                      key={proof.src}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
                    >
                      <img
                        src={proof.src}
                        alt={proof.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function GridProjet() {
  const [openProject, setOpenProject] = useState("tennis-academy");

  return (
    <section className="mx-auto w-full max-w-7xl px-4 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-400">Mes projets</h1>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openProject === project.id}
            onToggle={() =>
              setOpenProject((current) =>
                current === project.id ? null : project.id
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
