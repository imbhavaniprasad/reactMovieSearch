import './App.css';
import React,{useState} from 'react'
import SearchMovies from './components/SearchMovies';

function App() {
const [queryz,setQuery] = useState("");
const [movies,setMovies] = useState([]);
  return (
    <div className="container">
     <h2 className="title">React Movie Search</h2> 
     <SearchMovies movies={movies} setMovies={setMovies} setQuery={setQuery} queryz={queryz}/>
    </div>
  );
}

export default App;
