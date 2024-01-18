"use client";
import React, { useEffect, useState } from "react";
import {
  responsesObjFirebase,
} from "/src/firebase/dataHandling.js";

export const plain = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "");

function page() {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [resFilter, setResFilter] = useState("");
  const [totals, setTotals] = useState([]);
  const [invitationList, setInvitationList] = useState([]);

  const [finalResponses, setFinalResponses] = useState([]);
  const [plus, setPlus] = useState([0]);
  const [responsesObj, setResponsesObj] = useState([]);

  useEffect(() => {
    responsesObjFirebase().then((data) => {
      setPlus(data[0].map((a, b) => a.plus));
      setResponsesObj(data[0]);
      setIsLoading(false);
    });
  }, [invitationList]);

  useEffect(() => {
    setTotals([
      responsesObj.filter((r) => r.response === "yes").length +
      plus.reduce((a, b) => a + b),
      responsesObj.filter((r) => r.response === "no").length,
      0,
    ]);

    if (resFilter === "") setFinalResponses(responsesObj);
    else
      setFinalResponses(
        [...responsesObj].filter((r) => r.response === resFilter)
      );
  }, [resFilter, responsesObj]);

  const bgRes = {
    yes: "bg-green-500",
    no: "bg-rose-700",
    "no response": "bg-zinc-400",
  };
  const textRes = {
    yes: "SIM",
    no: "NÃO",
    "no response": "S/R",
  };

  return (
    <div className={` `}>
      {!isLogged && (
        <div className={`flex h-screen items-center w-screen justify-center`}>
          <input
            type="text"
            placeholder="SENHA: senha"
            className={` bg-white border outline-none rounded-full w-[40vh] h-fit text-center border-[#c9c9c9] p-2 `}
            onChange={(e) => {
              if (e.target.value === "senha") {
                setIsLogged(true);
              }
            }}
          />
        </div>
      )}
      {isLogged && (
        <div
          className={`fixed flex flex-col items-center justify-start h-screen w-screen text-zinc-700 bg-zinc-100`}
        >
          <div
            className={`shadow-md w-screen flex flex-col items-center space-y-2 p-2 mb-2`}
          >
            <input
              placeholder="Pesquisar"
              className={`bg-white border rounded-full w-[40vh] h-fit text-center border-[#c9c9c9] p-1 `}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              className={`flex space-x-4 items-center text-zinc-50 text-sm text-center`}
            >
              <h2 className={`text-zinc-700`}>Filtrar Por</h2>
              <div
                className={`border rounded-3xl bg-green-500 p-1 px-2 `}
                onClick={() => setResFilter("yes")}
              >
                <h2>SIM</h2>
              </div>
              <div
                className={`border rounded-3xl bg-rose-700 p-1 px-2 `}
                onClick={() => setResFilter("no")}
              >
                <h2>NÃO</h2>
              </div>
              <div
                className={`border rounded-3xl bg-zinc-400 p-1 px-2 `}
                onClick={() => setResFilter("no response")}
              >
                <h2>S/R</h2>
              </div>
              <div
                className={`border rounded-3xl bg-blue-400 p-1 px-2`}
                onClick={() => setResFilter("")}
              >
                <h2>TODOS</h2>
              </div>
            </div>
          </div>

          <div className={`h-[60vh] overflow-x-scroll`}>
            {!isLoading &&
              finalResponses
                .filter((r) => plain(r.name).includes(plain(search)))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((r, i) => {
                  return (
                    <div
                      className={`flex justify-start text-xl pb-2 border-b border-zinc-300 w-[90vw] `}
                    >
                      <h2
                        className={`w-[15vw] text-center  border rounded-3xl ${bgRes[r.response]
                          }  p-1 px-2 text-xs text-zinc-50 mr-2`}
                      >
                        {textRes[r.response]}
                      </h2>
                      <h2 className={` w-[60vw]`}>{r.name}</h2>
                      <h3 className={`text-start mr-4 w-[10vw] `}>
                        {r.response === "yes" ? `+ ${r.plus}` : ""}{" "}
                      </h3>
                    </div>
                  );
                })}
          </div>

          <div className={`font-semibold w-screen flex py-3 `}>
            {["SIM", "NÃO", "SEM RESPOSTA"].map((a, b) => (
              <div
                className={` flex flex-col text-center border-r border-zinc-300 h-full w-1/3`}
              >
                <h2 className={`text-sm`}>{a}</h2>
                <h2 className={`text-xl`}>{`${totals[b]}`}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
