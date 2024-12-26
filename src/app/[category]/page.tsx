"use client"
import { Options } from "../_components/constants/type"
import { MovieCard } from "../_components/movieCard";
import { Movie } from "../_components/constants/type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default async function Page() {
    const params = useParams();
    const [movies, setMoives] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovies = async() => {
            const response = await fetch (
                `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=30`,
                Options
            );
            const resJson =await response.json();
            const movies: Movie[] = resJson.results;
            setMoives(resJson);
        };
        fetchMovies();
    },[]);

     return (
        <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <h1 className="font-bold">{params.category}</h1>
            {movies?.map((movie) => (
                <MovieCard movie = {movie} />
            ))}
        </div>
    )
}







// ({params}:{
//     params: {category: string}
// }) {
//     const {category} = await params
//     const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=30`,
//         Options
//     );
//     const resJson =await response.json();
//     const movies: Movie[] = resJson.results;
   

    

