import React,{useState} from 'react'

export const useGetMovies=()=>{
    const [listMovies, setListMovies] = useState()

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=1")
    .then((response)=>response.json())
    .then((data)=>setListMovies(data))

    return { listMovies}
}
