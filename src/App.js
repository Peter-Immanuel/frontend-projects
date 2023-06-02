import { useState, useEffect} from "react";

import './App.css'
import searchIcon from './search.svg';

// componet imports
import MovieCard from './MovieCard';



const API_URL = "https://omdbapi.com?apikey=93845995"

const App = () => {

    // state 
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    
    useEffect(() => {
        searchMovies("superman")
    }, []);
    
    return (
        <div className="app">
            <h1>MovieLand for IDANS only</h1>

            {/* Search bar component */}
            <div className="search">
                <input 
                    placeholder="Idan type your search 🤲🏽"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />

                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => {
                        searchMovies(searchTerm)
                    }}
                />
            </div>
            {movies.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => <MovieCard movie={movie} />)}
                    </div>
                ) : (
                    <div className="empty"> 
                        <h2> Idan no vex we still the cook 🧑🏽‍🍳</h2>
                    </div>
                )
            }            
        </div>
    );
}

export default App