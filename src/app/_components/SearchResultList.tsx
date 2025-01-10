"use client"

import { useState, useEffect } from "react"
import { Options } from "./constants/type";

type SearchResultListProps = {
    searchValue: string;
};

export const SearchResultList = ({searchValue}: SearchResultListProps) => {
    const [movies, setMovies] = useState<Movie[]>();

    useEffect(()=> {
        const fetchMovies = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${searchValue}?language=en-US&page=1`,
                Options
            );
            const data = await response.json();
            setMovies(data.results?.slice(0, 5));
        };
        fetchMovies();
    } [searchValue]);

    return(
        
    )
}