"use client";
import React, { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";
import {
  responsesObjFirebase,
  allowedObjFirebase,
} from "../firebase/dataHandling.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";

function ConfirmPresence() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [response, setResponse] = useState("yes");
  const [name, setName] = useState("");
  const [plus, setPlus] = useState(0);

  const successToast = {
    title: `${response === "yes" ? "Presença Confirmada!" : "Uma pena :("}`,
    description: "",
    status: "success",
    duration: 3000,
    isClosable: true,
    position: "top",
  };

  const plain = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const addToDb = () => {
    allowedObjFirebase().then((data) => {
      //console.log(data[0].filter((a) => a.name.toLowerCase() === "thiago")[0]);
      const allowed = data[0].map((a) => a.name.toLowerCase());
      const plainName = plain(name);
      responsesObjFirebase().then((data) => {
        const responses = data[0].map((a) => a.name.toLowerCase());
        const exists = responses.findIndex((r) => plain(r) === plainName);
        const newId = Math.max(...data[1].map((a) => Number(a))) + 1;
        const nextId =
          exists > -1 ? data[1][exists] : newId !== -Infinity ? newId : 0;
        const edit =
          exists > -1
            ? confirm("Nome já existe. Deseja editar sua confirmação?")
            : true;

        if (allowed.includes(plainName.split(" ")[0]) && edit) {
          setDoc(doc(db, "responses", String(nextId)), {
            name: name,
            response: response,
            plus: response === "yes" ? plus : 0,
          });
          toast(successToast);
          onClose();
        } else {
          toast({
            title: "Algo deu errado, por favor entre em contato.",
            description: "",
            status: "warning",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
        }
      });
    });

    setPlus(0);
    setResponse("yes");
    setName("");
  };

  return (
    <div className={`flex flex-col items-center `}>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backgroundColor={" "} />
        <ModalContent
          backgroundColor={"transparent"}
          shadow={"none"}
          width={"95%"}
        >
          <CloseRoundedIcon
            className={` absolute top-2 right-2 font-extralight text-zinc-200`}
            fontSize="large"
            onClick={onClose}
          />
          <div
            className={` rounded-lg h-[60vh] bgModal flex flex-col justify-center space-y-7 items-center text-zinc-200`}
          >
            <h1 className={`text-2xl font-extralight `}>
              Posso contar com sua presença?
            </h1>
            <div
              className={`flex items-center justify-evenly w-full text-zinc-800 font-semibold`}
            >
              <div
                className={`p-2 px-4 flex items-center justify-center space-x-2 text-xl  ${
                  response === "yes"
                    ? "text-zinc-200 bg-[#a56285] "
                    : "bg-[#dddddd]"
                } rounded-3xl`}
                onClick={() => setResponse("yes")}
              >
                <p>Sim</p>
                <SentimentVerySatisfiedRoundedIcon className={`scale-110`} />
              </div>
              <p
                className={`flex items-center justify-center space-x-2 p-2 px-4 text-xl ${
                  response === "no"
                    ? "text-zinc-200 bg-[#a56285]"
                    : "bg-[#dddddd]"
                } rounded-3xl `}
                onClick={() => setResponse("no")}
              >
                <p>Não</p>
                <SentimentDissatisfiedRoundedIcon className={`scale-110`} />
              </p>
            </div>

            <input
              autoFocus={false}
              value={name}
              placeholder="Nome Completo"
              className={` bg-transparent outline-none w-[40vh] text-xl text-center border-b border-[#dddddd] p-2 `}
              onChange={(a) => {
                setName(a.target.value);
              }}
            />
            <div
              className={`${
                response === "no" && "hidden"
              } flex flex-col items-center`}
            >
              <p className={` text-lg mb-3`}>Número de acompanhantes</p>
              <div className={`flex items-center space-x-3 `}>
                {[0, 1, 2, 3].map((n) => (
                  <p
                    className={`p-1 px-3 ${
                      plus === n
                        ? "bg-[#a56285]"
                        : " text-zinc-800 bg-[#dddddd]"
                    } font-semibold rounded-full px-4 text-lg`}
                    onClick={() => setPlus(n)}
                  >
                    {n}
                  </p>
                ))}
              </div>
            </div>
            <p
              className={`flex items-center justify-center p-2 px-5 bg-[#a56285] rounded-3xl text-xl`}
              onClick={() => {
                if (name.length > 0 && name.split(" ").length > 1) {
                  addToDb();
                } else {
                  toast({
                    title: "Nome Inválido",
                    description: "Por favor insira seu nome completo",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });
                }
              }}
            >
              Pronto!
            </p>
          </div>
        </ModalContent>
      </Modal>

      <h2
        className={`w-[60vw] md:w-[15vw] 2xl:w-[10vw] text-lg text-center font-semibold bgButton rounded-3xl p-2 `}
        onClick={onOpen}
      >
        Confirmar Presença
      </h2>
    </div>
  );
}

export default ConfirmPresence;
