
import React, { useEffect, useState } from 'react';
import SearchIcon from '../app/search.png';
import MovieCard from '@/component/MovieCard'
import Image from 'next/image';

const API_URL = "http://www.omdbapi.com?apikey=123b5025";

const SearchBar: React.FC = () => {
    const [movies,setMovies]=useState([]);
    const [search,setSearch] = useState("");
  const searchMovie = async (title: string) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    


  useEffect(() => {
    searchMovie('batman');
  }, []);

  return (
 <div className='app'>
    
      <h1>MovieLand</h1>
    
    
    <div className='search'>
        <input placeholder='search for movies' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <Image src={SearchIcon} alt='search' onClick={()=> searchMovie(search)}/>

    </div>

    
    {movies?.length>0 ? (<div className='container' >
        {movies.map((movies)=>(
            <MovieCard movie1={movies}  />
        ))}
    </div>) : (
        <div className='empty'>
            <h2>No Movies Found</h2>
        </div>
    ) }
 </div>
  );
};

export default SearchBar;
