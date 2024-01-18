"use client";
import React, { useState } from "react";
import { partyPopper } from "@/images/svgAll";

function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const time = [days, hours, minutes, seconds];

  var countDownDate = new Date("Jan 18, 2025 12:00:00").getTime();
  setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <div
      className={`flex flex-col text-zinc-300 items-center space-y-2 bgTransparent w-screen h-fit pt-6 pb-5 shadowCD`}
    >
      <div className={`flex pb-4`}>
        {["DIAS", "HS", "MIN", "SEG"].map((e, i) => {
          return (
            <div
              className={`flex  flex-col items-center w-[70px] ${
                i < 3 && "border-r"
              } border-zinc-400 `}
            >
              <p className={` text-4xl`}>{time[i]}</p>
              <p className={` text-xl text-[#ff347e]`}>{e}</p>
            </div>
          );
        })}
      </div>
      <h1 className={`text-xl text-center `}>Estou contando os segundos...</h1>
      {partyPopper}
    </div>
  );
}

export default CountDown;
