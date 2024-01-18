"use client";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";
import { songsObjFirebase } from "../firebase/dataHandling.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { music } from "@/images/svgAll.js";

function SongRequest() {
  const toast = useToast();
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");

  const successToast = {
    title: "Pedido de música enviado!",
    description: "",
    status: "success",
    duration: 3000,
    isClosable: true,
    position: "top",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToDb = () => {
    songsObjFirebase().then((data) => {
      const nextId = data[0].length;
      setDoc(doc(db, "songRequests", String(nextId)), {
        song: songTitle,
        artist: artistName,
      });
      toast(successToast);
    });
    setSongTitle("");
    setArtistName("");
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
            className={`absolute top-2 right-2 text-zinc-200`}
            fontSize="large"
            onClick={onClose}
          />
          <div
            className={` rounded-lg h-[50vh] bgModal text-center flex flex-col items-center justify-evenly text-zinc-200`}
          >
            <h1 className={`text-2xl `}>Deixe aqui seu pedido de música</h1>
            <input
              autoFocus={false}
              value={songTitle}
              placeholder="Nome da Música"
              className={` bg-transparent outline-none w-[40vh] text-lg text-center border-b border-[#f8fff4] p-2  `}
              onChange={(a) => {
                setSongTitle(a.target.value);
              }}
            />
            <input
              autoFocus={false}
              value={artistName}
              placeholder="Nome do Artista"
              className={` bg-transparent outline-none w-[40vh] text-lg text-center border-b border-[#f8fff4] p-2  `}
              onChange={(a) => {
                setArtistName(a.target.value);
              }}
            />
            <p
              className={`flex items-center justify-center p-2 px-5 text-xl bg-[#a56285] rounded-3xl `}
              onClick={() => {
                if (songTitle.length) {
                  addToDb();
                } else {
                  toast({
                    title: "Nome inválido",
                    description: "Insira ao menos o nome da música",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });
                }
              }}
            >
              Enviar!
            </p>
          </div>
        </ModalContent>
      </Modal>

      <div
        className={`w-[60vw] md:w-[15vw] 2xl:w-[10vw] flex justify-center rounded-3xl bgButton p-2 `}
        onClick={onOpen}
      >
        {music}
      </div>
    </div>
  );
}

export default SongRequest;
