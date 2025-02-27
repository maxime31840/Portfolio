import React from "react";
import homeLogo from "../Assets/home-logo.png";
import Typewriter from "typewriter-effect";
import Particle from "./Particle";

function Type() {
    return (
      <div className="text-4xl text-white">
        <Typewriter
          options={{
            strings: [
              "Développeur Logiciel",
              "Freelancer",
              "Développeur Mobile",
              "Ingénieur Développeur",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    );
  }
  

export default function Intro() {
  return (
    <section>
        <Particle/>
      <div className="home-section p-24" id="home">
        <div className="home-content container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="home-header flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold pb-4 text-white">
               Salut!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                Je m'appelle
                <strong className="main-name text-lime-500"> ADEL SAADNA</strong>
              </h1>

              <div className="pt-12 text-left">
                <Type />
              </div>
            </div>

            <div className="flex justify-center items-center p-24">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

