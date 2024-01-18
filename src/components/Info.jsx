"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";

function Info() {
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
            className={` rounded-lg h-[40vh] bgModal flex flex-col items-center justify-center text-zinc-200`}
          >
            {["Message", "Other Message"].map((m) => (
              <h2 className={`text-2xl text-center p-4`}>{m}</h2>
            ))}
          </div>
        </ModalContent>
      </Modal>

      <div
        className={`w-[60vw] md:w-[15vw] 2xl:w-[10vw] rounded-3xl bgButton p-2 `}
        onClick={onOpen}
      >
        <InventoryRoundedIcon className={` iconsPulse opacity-90`} />
      </div>
    </div>
  );
}

export default Info;
