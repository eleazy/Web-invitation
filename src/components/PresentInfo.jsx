"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { present } from "@/images/svgAll";

function PresentInfo() {
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
            className={`absolute top-3 right-3 font-extralight text-zinc-200`}
            fontSize="large"
            onClick={onClose}
          />
          <div
            className={` rounded-lg h-[50vh] bgModal flex flex-col items-center justify-evenly text-zinc-200`}
          >
            <h1 className={`text-2xl`}>Algumas sugestões de presente</h1>
            <div
              className={`flex flex-col items-center text-center text-xl space-y-4`}
            >
              {["Message", "Other message", "One more message"].map((m) => (
                <h2 className={``}>{m}</h2>
              ))}
            </div>
          </div>
        </ModalContent>
      </Modal>

      <div
        className={`w-[60vw] md:w-[15vw] 2xl:w-[10vw] flex justify-center rounded-3xl bgButton p-2 `}
        onClick={onOpen}
      >
        {present}
      </div>
    </div>
  );
}

export default PresentInfo;
