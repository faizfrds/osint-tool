"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

export default function Home() {
  const [ip, setIP] = useState("");
  const [search, setSearch] = useState({
    // creating a search const in order to store ip address data
    ipAdd: "",
    city: "",
    region: "",
    country: "",
    postal: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = () => { //handles form submission for new IP
    fetch("https://ipinfo.io/" + ip + "/json?token=74d362736f86b7") // uses user input in fetching api request
      .then((response) => response.json())
      .then((data) =>
        setSearch({
          ipAdd: data.ip,
          city: data.city,
          region: data.region,
          country: data.country,
          postal: data.postal,
        })
      );

  };

  useEffect(() => { // displays current user IP
    
    fetch("https://ipinfo.io/" + ip + "/json?token=74d362736f86b7") // uses user input in fetching api request
      .then((response) => response.json())
      .then((data) =>
        setSearch({
          ipAdd: data.ip,
          city: data.city,
          region: data.region,
          country: data.country,
          postal: data.postal,
        })
      );
  }, []);

  if (!data) return <p>No profile data</p>;

  return (
    <main className="flex flex-col h-screen items-center p-24 bg-[url(https://cdna.artstation.com/p/assets/images/images/047/517/388/original/inkpendude-portal-storm.gif?1647794887)]">
      <h1 className="text-4xl text-center pb-5">Search IP</h1>

      <div>
        <input
          className="text-black py-4 px-3 rounded-md sm:w-auto"
          type="text"
          required
          placeholder="IP Address"
          value={ip}
          onChange={(t) => setIP(t.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 items-center py-4 px-3 text-white font-bold rounded-md mt-5 md:ml-3 lg:mt-0"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-3 rounded-lg text-center bg-sky-900 text-3xl font-semibold py-6 px-4 mt-10 flex-none">
        <div>{search.city}</div>
        <div>{search.region}</div>
        <div>{search.country}</div>
        <div>{search.postal}</div>
      </div>
    </main>
  );
}
