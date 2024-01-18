"use client";
import React, { useEffect, useState } from "react";
import { songsObjFirebase } from "/src/firebase/dataHandling.js";
import { plain } from "/src/app/responses/page.js";

function page() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("song");

  useEffect(() => {
    songsObjFirebase().then((data) => {
      setSongs(data[0]);
    });
  }, []);

  return (
    <div className={`h-screen text-zinc-800`}>
      <div
        className={`shadow-md w-screen flex flex-col items-center space-y-2 p-2 mb-2`}
      >
        <input
          placeholder="Pesquisar"
          className={`bg-white border rounded-full w-[40vh] h-fit text-center border-[#c9c9c9] p-1 `}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={`flex space-x-4 items-center text-sm text-zinc-50`}>
          <h2 className={`text-zinc-700`}>Ordenar Por</h2>
          <div
            className={`border rounded-3xl bg-blue-500 p-1 px-2`}
            onClick={() => setOrder("song")}
          >
            <h2>Música</h2>
          </div>
          <div
            className={`border rounded-3xl bg-rose-700 p-1 px-2`}
            onClick={() => setOrder("artist")}
          >
            <h2>Artista</h2>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-center space-y-3 h-[60vh] overflow-scroll`}
      >
        {songs
          .filter(
            (s) =>
              plain(s.song).includes(plain(search)) ||
              plain(s.artist).includes(plain(search))
          )
          .sort((a, b) => a[order].localeCompare(b[order]))
          .map((s) => (
            <h2 className={`text-xl`}>{`${s.song} - ${s.artist}`}</h2>
          ))}
      </div>
    </div>
  );
}

export default page;
