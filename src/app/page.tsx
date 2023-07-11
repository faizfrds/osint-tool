"use client";
import Image from "next/image";
import { useState } from "react";
import { data } from "autoprefixer";
import { Button } from "react-bootstrap";

export default function Home() {
  const [ip, setIP] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = () => {

    fetch("https://ipinfo.io/" + ip + "/json?token=74d362736f86b7")
      .then((response) => response.json())
      .then((data) => setSearch(data));
  };

  return (
    <main className="flex flex-col h-screen items-center p-24 bg-[url(https://cdna.artstation.com/p/assets/images/images/047/517/388/original/inkpendude-portal-storm.gif?1647794887)]">
      <h1 className="text-4xl text-center pb-5">Search IP</h1>
      <div>
        <input
          className="text-black py-4 px-3 rounded-md"
          type="text"
          required
          placeholder="IP Address"
          value={ip}
          onChange={(t) => setIP(t.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 ml-3 py-4 px-3 text-white font-bold rounded-md"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10 text-center bg-slate-700 py-6 px-4 mt-10">
        <div>{search.city}</div>
        <div>{search.region}</div>
        <div>{search.country}</div>
        <div>{search.postal}</div>
      </div>
    </main>
  );
}
