export default function Ecole() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Mon établissement</h1>

      <p className="mb-6 text-lg text-center max-w-xl">
        Je suis actuellement étudiant en BTS SIO dans l’établissement suivant :
      </p>

      <a
        href="https://ecoleiris.fr/campus/toulouse?utm_source=google&utm_medium=cpc&utm_campaign=google_cpc_iris_sea_par_marque&utm_content=157525461794&utm_term=iris%20toulouse&gad_source=1&gad_campaignid=379505562&gbraid=0AAAAADe620qLm0jgW2cknV0Gm3k8TUeFT&gclid=Cj0KCQiAm9fLBhCQARIsAJoNOctF0dGP5H6af5CNTYDIpEIGi2YuYmXm5eUvI9cPQ2MblAujieGq5ZMaAsp0EALw_wcB"   // remplace par le vrai site de ton école
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 px-8 py-4 rounded-lg text-white hover:bg-blue-500 transition"
      >
        Accéder au site de l’école
      </a>
    </div>
  );
}
