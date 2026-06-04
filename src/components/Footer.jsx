import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="container mx-auto flex flex-col items-center px-6 text-center">
        <p className="text-lg">
          Conçu et développé par <span className="font-bold">Maxime LOURDEL</span>{" "}
          © 2025 | Réalisé avec React.js, Vite et Tailwind CSS
        </p>

        <div className="mt-3">
          <Link
            to="/droits-utilisateurs"
            className="text-sm text-blue-300 transition hover:text-blue-200"
          >
            Droits des utilisateurs et RGPD
          </Link>
        </div>

        <div className="mt-4 flex space-x-6">
          <a
            href="https://www.linkedin.com/in/maximelourdel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-500"
          >
            <FaLinkedin className="text-2xl" />
          </a>

          <a
            href="https://github.com/maxime31840"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-500"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
