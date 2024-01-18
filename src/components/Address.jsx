"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { useToast } from "@chakra-ui/react";

function Address() {
  const toast = useToast();
  const successToast = {
    title: "Endereço copiado!",
    description: "",
    status: "success",
    duration: 3000,
    isClosable: true,
    position: "top",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "Champ de Mars, 5 Av. Anatole France, 75007 Paris, França"
    );
    toast(successToast);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
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
            className={` rounded-lg h-[90vh] bgModal flex flex-col items-center text-center justify-evenly text-zinc-200`}
          >
            <h1 className={`text-2xl  `}>Como chegar</h1>
            <hr className={`w-4/6 `}></hr>
            <div className={`flex flex-col items-center `}>
              <h2 className={` text-xl`}>Torre Eiffel</h2>
              <h2 className={` text-xl`}>
                Champ de Mars, 5 Av. Anatole France, 75007 Paris, França
              </h2>
              <div
                onClick={copyToClipboard}
                className={`flex space-x-2 p-1 mt-3 border rounded-lg border-white`}
              >
                <ContentCopyRoundedIcon className={`scale-110 text-zinc-200`} />
                <h2>Copiar</h2>
              </div>
            </div>
            <iframe
              width="95%"
              height="60%"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?q=Eiffel+Tower,Paris+France&key=AIzaSyAQ74Sa0V4-WjiFbe3Wna4aYx47ipfqdiM"
            ></iframe>
            <a
              className={`text-center rounded-full px-5 p-3 text-xl bg-[#a56285] `}
              href="https://www.google.com.br/maps/place/Torre+Eiffel/@48.8583736,2.2919064,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE?entry=ttu"
              target="_blank"
            >
              Ver no mapa
            </a>
          </div>
        </ModalContent>
      </Modal>

      <h2
        className={`w-[60vw] md:w-[15vw] 2xl:w-[10vw] text-center text-lg font-semibold rounded-3xl bgButton p-2 `}
        onClick={onOpen}
      >
        Como chegar
      </h2>
    </div>
  );
}

export default Address;
