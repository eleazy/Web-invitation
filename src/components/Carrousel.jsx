"use client";
import React, { useRef, useEffect, useState } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { urlsObjFirebase } from "../firebase/dataHandling.js";

function Carrousel() {
  const scrollRef = useRef(null);
  const stopScrollRef = useRef(null);
  const [urls, setUrls] = useState([]);

  const scrool = (direction) => {
    const scrollAmount = direction === "right" ? 316 : -316;
    const currentScrollLeft = scrollRef.current.scrollLeft;

    scrollRef.current.scrollTo({
      left: currentScrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    urlsObjFirebase().then((res) => {
      setUrls(res[0].map((u) => u.url));
    });

    stopScrollRef.current = setInterval(() => {
      scrool("right");
    }, 4000);

    return () => {
      clearInterval(stopScrollRef.current);
    };
  }, []);

  return (
    <div className={`relative flex flex-col items-center `}>
      <div
        ref={scrollRef}
        onClick={() => {
          clearInterval(stopScrollRef.current);
        }}
        className={`w-[95vw] overflow-x-scroll justify-start no-scrollbar pb-2`}
      >
        <div className={` flex items-center text-zinc-300 `}>
          <ArrowBackIosRoundedIcon
            className={`absolute left-1 scale-150 cursor-pointer `}
            onClick={() => {
              scrool("left");
              clearInterval(stopScrollRef.current);
            }}
          />
          {urls.map((u, i) => (
            <img
              src={u}
              alt={`img${i}`}
              className={`mr-4 h-[300px] w-[300px] rounded-lg object-cover `}
            />
          ))}
          <ArrowForwardIosRoundedIcon
            className={`absolute right-1 scale-150 cursor-pointer`}
            onClick={() => {
              scrool("right");
              clearInterval(stopScrollRef.current);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
