export default function Ecole() {
  return (
    <div className="min-h-screen pt-32 px-6 text-white flex flex-col items-center">


      <div className="mb-8 max-w-3xl text-center text-lg space-y-4">
        <h2 className="text-2xl font-semibold">
          Présentation de l’école IRIS MediaSchool Toulouse – Option SLAM
        </h2>
        <p>
          IRIS MediaSchool Toulouse est une école d’enseignement supérieur
          spécialisée dans les métiers de l’informatique et du numérique. Située
          à Toulouse, elle fait partie du groupe MediaSchool et propose des
          formations professionnalisantes, axées sur la pratique, les projets
          concrets et l’insertion professionnelle.
        </p>
        <p>
          Le BTS Services Informatiques aux Organisations (SIO), option SLAM
          (Solutions Logicielles et Applications Métiers), est une formation de
          deux ans orientée vers le développement d’applications et la création
          de solutions logicielles adaptées aux besoins des entreprises. Les
          étudiants y acquièrent des compétences en programmation, bases de
          données, développement web et gestion de projets informatiques.
        </p>
        <p>
          La formation privilégie une approche concrète à travers des projets,
          des mises en situation professionnelles et la possibilité de suivre le
          cursus en alternance. Elle prépare à des métiers tels que développeur
          d’applications ou technicien en développement logiciel, tout en
          permettant une poursuite d’études dans le domaine du numérique.
        </p>
      </div>

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
