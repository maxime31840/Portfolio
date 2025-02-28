import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="bg-black text-white py-6">

        <div className="container mx-auto flex flex-col items-center">

          <p className="text-lg">
            Conçu et développé par <span className="font-bold">Maxime LOURDEL</span> © 2025
          | Réalisé avec React.js, Vite et Tailwind CSS
          </p>


          <div className="mt-4 flex space-x-6">
            <a
              href="https://www.linkedin.com/in/adel-saadna"
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