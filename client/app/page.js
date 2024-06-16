"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {

  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");
    toast.loading('Searching...');
    const { data } = await axios.get(`http://127.0.0.1:5000/getmovies/${movie}`);
    if (data.success) {
      setMovies(data.movies);
      toast.dismiss();
    }
    else {
      toast.dismiss();
      setError("No recommendations for the Movie");
      setMovies([]);
    }
  }

  return (
    <div className="flex flex-col gap-5 my-7 items-center justify-center">
      <div className="relative w-[600px] h-[300px]">
        <Image
          src={"/images/avengers.png"}
          fill
        />
      </div>
      <div className="flex items-center gap-1 mt-5 w-[600px]">
        <input value={movie} onChange={e => setMovie(e.target.value)} type="text" className="rounded-md p-2 w-3/4" placeholder="Search for Recommendations..." />
        <button onClick={handleSubmit} className="rounded-md p-2 font-bold text-[#E23636] w-1/4 bg-[#1C75BC]">Search</button>
      </div>
      <div className="flex flex-col mt-5 gap-2 w-[600px]">
        {movies?.length > 0 && (
          movies.map(movie => (
            <div key={movie} className="rounded-md flex text-white p-2 bg-slate-700 items-center justify-center">
              {movie}
            </div>
          ))
        )
        }
        {error && (<p className="text-red-500 text-lg">{error}</p>)}
      </div>
    </div>
  );
}
