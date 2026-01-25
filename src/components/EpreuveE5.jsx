import React from "react";

export default function EpreuveE5() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Installation – Épreuve E5</h1>

      {/* Affichage du PDF */}
      <div className="w-full h-[80vh] border rounded-lg overflow-hidden">
        <iframe
          src="/E5-Maxime-LOURDEL.pdf"
          title="Installation E5"
          className="w-full h-full"
        />
      </div>

      {/* Bouton téléchargement */}
      <a
        href="/e5-installation.pdf"
        download
        className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
      >
        Télécharger le PDF
      </a>
    </div>
  );
}
