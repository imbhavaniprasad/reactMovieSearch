import React from 'react'
import MovieCard from './MovieCard'
const SearchMovies = ({queryz,setQuery,setMovies,movies})=>{
    const searchMovies = async(e)=>{
          e.preventDefault();
          const query = queryz;       
        const url = `https://api.themoviedb.org/3/search/movie?api_key=400dc2a2535a014ff6bf8481f3d3358e&language=en-US&query=${query}&page=1&include_adult=false`;
          try{
              const res = await fetch(url);
              const data = await res.json();
              setMovies(data.results);
          }
          catch(e){
              console.log(e);
          }
        //   setQuery("");
    }
    const handleChange=(e)=>{
            setQuery(e.target.value);
    }
    return(
        <>
          <form className="form" onSubmit={searchMovies}>
              <div>
                  <label className="label" htmlFor="query">Movie Name: </label>
              <input onChange={handleChange} className="mname" type="text" name="query" placeholder="Enter Movie Name"/>
              <button type="submit" className="button"><i className="fa fa-search"></i></button>
              </div>
          </form>
          <MovieCard movies={movies}/>
          </>
    );

}
export default SearchMovies;