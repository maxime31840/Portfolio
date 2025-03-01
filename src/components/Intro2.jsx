import React from "react";
import myImg from "../Assets/avatar-logo.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home2() {
  return (
    <section id="about" className="p-24 px-6 text-white">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
            PERMETTEZ-MOI <span className="text-blue-500">DE ME</span> PRÉSENTER
            </h1>
            <p className="text-lg leading-relaxed">
                J'ai commencé la programmation au lycée et j'ai tout de suite adoré 🤷‍♂️
              <br />
              <br />Je suis le plus à l'aise dans les langages comme{" "}
              <b className="text-blue-500">Python, Javascript, et C.</b>
              <br />
              <br />
              J'adore codé de  {" "}
              <b className="text-blue-500">nouveaux site et applications Web,</b> et j'adore aussi les{" "}
              <b className="text-blue-500">applications mobile.</b>
              <br />
              <br />
              Dans mes projets, j'utilise également{" "}
              <b className="text-blue-500">Node.js</b> et{" "}
              <b className="text-blue-500">les frameworks modernes</b> comme{" "}
              <b className="text-blue-500">React.js, Tailwind CSS et Next.js.</b>
            </p>
          </div>

          <div className="flex justify-center">
            <Tilt>
              <img src={myImg} alt="avatar" className="w-72 md:w-80 rounded-lg shadow-lg" />
            </Tilt>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">RETROUVEZ MOI</h2>
          <p className="text-lg">N'hésites pas à <span className="text-blue-500">< a href="mailto:maxime.lourdel31@gmail.com" >me contacter</a></span></p>

          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/maxime31840" target="_blank" rel="noreferrer"
               className="text-3xl text-gray-400 hover:text-blue-500 transition">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/maximelourdel" target="_blank" rel="noreferrer"
               className="text-3xl text-gray-400 hover:text-blue-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/lrdl_maxx/" target="_blank" rel="noreferrer"
               className="text-3xl text-gray-400 hover:text-blue-500 transition">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
