import React from "react";
import CountDown from "../components/CountDown";
import ConfirmPresence from "../components/ConfirmPresence";
import Address from "../components/Address";
import Carrousel from "../components/Carrousel";
import SongRequest from "../components/SongRequest";
import DressCode from "../components/DressCode";
import Info from "../components/Info";
import PresentInfo from "../components/PresentInfo";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { heart, cups, social, polaroid } from "../images/svgAll.js";
import { Courgette, Kaushan_Script, Unna, Cookie } from "next/font/google";

const courgette = Courgette({ subsets: ["latin"], weight: "400" });
const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: "400" });
const unna = Unna({ subsets: ["latin"], weight: "400" });
const cookie = Cookie({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="bgMain overflow-x-hidden">
      <div className={` flex flex-col items-center w-screen text-zinc-200 `}>
        <div className={`flex flex-col items-center h-screen justify-evenly`}>
          <h2
            style={unna.style}
            className={`text-3xl 2xl:text-5xl border border-zinc-200 text-zinc-50 px-6 p-2 mb-2`}
          >
            18.01.2025
          </h2>

          <div className={` flex flex-col items-center py-6`}>
            <hr className={`w-[80vw]`}></hr>

            <h2 style={cookie.style} className={` text-8xl 2xl:text-9xl my-3`}>
              Stephanie
            </h2>
            <div className={`flex items-center mb-12`}>
              <hr className={`w-[36vw] lg:w-[39vw] `}></hr>
              {heart("#ffffff")}
              <hr className={`w-[36vw] lg:w-[39vw] `}></hr>
            </div>
            <h3
              style={courgette.style}
              className={` w-5/6 text-center text-xl 2xl:text-2xl text-zinc-200 tracking-wide`}
            >
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”
            </h3>
          </div>
        </div>
        <div className={` flex flex-col text-center items-center space-y-14`}>
          <CountDown />
          <div className={`flex flex-col items-center space-y-4 pt-14`}>
            <hr className={`w-[60vw]`}></hr>
            <div className={`flex items-center space-x-4 `}>
              <h1 style={kaushanScript.style} className={` text-5xl py-2 `}>
                Let's Party!
              </h1>
            </div>
            <hr className={`w-[60vw] `}></hr>

            <h2 className={`text-lg`}>Com piscina, brincadeiras e jogos!</h2>
            {cups}
          </div>
          <div className={` flex flex-col items-center space-y-8`}>
            <div className={`flex flex-col items-center space-y-3`}>
              <div className={`flex items-start space-x-3`}>
                <h2 className={` text-2xl`}>DIA</h2>
                <EventAvailableRoundedIcon
                  className={`text-[#ff87ab] scale-110 opacity-90`}
                />
              </div>
              <h2 className={` text-xl`}>Sábado, 18 de janeiro as 12 h</h2>
            </div>
            <ConfirmPresence />
            <hr className={`w-[60vw] `}></hr>
          </div>

          <div className={` flex flex-col items-center space-y-8`}>
            <div className={`flex flex-col items-center space-y-3 text-center`}>
              <div className={` flex items-start space-x-3`}>
                <h2 className={` text-2xl`}>LOCAL</h2>
                <LocationOnRoundedIcon
                  className={`text-[#ff87ab] scale-110 opacity-90`}
                />
              </div>
              <div className={`flex flex-col `}>
                <h2 className={` text-xl`}>Torre Eiffel</h2>
              </div>
            </div>
            <Address />
            <hr className={`w-[60vw] `}></hr>
          </div>
        </div>
        <div
          className={` flex flex-col items-center h-[130vh] justify-evenly w-screen text-center`}
        >
          <div className={` flex flex-col items-center space-y-4 `}>
            <h2 className={`text-3xl font-semibold text-[#ff87ab]`}>Música</h2>
            <h3 className={`text-xl`}>Deixe seu pedido de música</h3>
            <SongRequest />
            <hr className={`w-[60vw] `}></hr>
          </div>
          <div className={` flex flex-col items-center space-y-4`}>
            <h2 className={`text-3xl font-semibold text-[#ff87ab]`}>
              Dress Code
            </h2>
            <h3 className={`text-xl`}>Veja o dress code</h3>
            <DressCode />
            <hr className={`w-[60vw] `}></hr>
          </div>
          <div className={` flex flex-col items-center space-y-4`}>
            <h2 className={`text-3xl font-semibold text-[#ff87ab]`}>
              Informações
            </h2>
            <h3 className={`text-xl`}>Só mais algums detalhes</h3>
            <Info />
            <hr className={`w-[60vw] `}></hr>
          </div>
          <div className={` flex flex-col items-center space-y-4`}>
            <h2 className={`text-3xl font-semibold text-[#ff87ab]`}>
              Presentes
            </h2>
            <h3 className={`text-xl`}>
              Caso queira me dar algo além de sua presença
            </h3>
            <PresentInfo />
            <hr className={`w-[60vw] `}></hr>
          </div>
        </div>

        <div
          className={` flex flex-col items-center h-screen w-screen justify-center space-y-14`}
        >
          <div
            className={`w-5/6 flex flex-col items-center text-center space-y-4 `}
          >
            {polaroid}
            <h1 className={` text-3xl `}>Algums momentos desses quinze anos</h1>
            <h3 className={` text-center text-lg 2xl:text-xl `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
          <Carrousel />
        </div>
        <div
          className={`flex flex-col items-center h-screen w-screen text-center justify-around `}
        >
          <div
            className={`flex flex-col items-center w-screen text-center space-y-8 py-4 bgTransparent shadowCD `}
          >
            <h2 className={`font-semibold text-4xl text-[#ff87ab] //e05988`}>
              Me marca tá?
            </h2>
            <h2 className={`text-xl w-5/6`}>
              Quero ver todas as fotos e vídeos deste dia incrível!
            </h2>
            {social}
            <h2 className={`text-3xl italic`}>#XVdaStephanie</h2>
            <a
              className={`w-[60vw] md:w-[15vw] 2xl:w-[10vw] text-center text-lg font-semibold bgButton rounded-3xl p-2 `}
              href="https://www.instagram.com"
              target="_blank"
            >
              Abrir no Instagram
            </a>
          </div>
          <div
            className={` flex flex-col items-center w-screen text-center space-y-3`}
          >
            <h2 className={`text-3xl`}>Espero você lá!</h2>
            <div className={`flex items-center `}>
              <hr className={`w-[36vw] lg:w-[39vw]`}></hr>
              {heart("#ff347e")}
              <hr className={`w-[36vw] lg:w-[39vw]`}></hr>
            </div>
          </div>
        </div>
      </div>
      <footer
        className={`flex items-center text-center justify-center h-[13vh] shadowCD bgFooter`}
      >
        <h1 className={`text-zinc-300 lg:text-lg`}>
          Desenvolvido por Eleazy Soares
        </h1>
      </footer>
    </main>
  );
}
