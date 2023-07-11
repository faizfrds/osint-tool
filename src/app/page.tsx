"use client";
import Image from "next/image";
import { useState } from "react";
import { data } from "autoprefixer";
import { Button } from "react-bootstrap";

export default function Home() {

  type Repository = {
    country: string;
    city: string;
  };
  
  const [ip, setIP] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://ipinfo.io/' + ip + '/json?token=74d362736f86b7')
      .then((response) => response.json())
      .then((data) =>setSearch(data));
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <label>Search IP</label>
        <input
          className="text-black"
          type="text"
          required
          placeholder="IP Address"
          value={ip}
          onChange={(t) => setIP(t.target.value)}
        />

        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {handleSubmit(e)}}
        >
          Search
        </Button>
      </form>
      <h2>{search.city}</h2>
    </main>
  );
}
