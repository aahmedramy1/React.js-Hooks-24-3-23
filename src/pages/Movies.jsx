import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);


     const getMovies = async () => {
         const options = {
             method: 'GET',
             url: `https://moviesdatabase.p.rapidapi.com/titles?page=${page}`,
             headers: {
                 'X-RapidAPI-Key': '3680e98eeemsh8d6117be1d6ed1bp1f603fjsn542338db49ad',
                 'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
             }
         };
         setIsLoading(true);
         try {
             const response = await axios.request(options)
             setMovies(response.data.results);
             setIsLoading(false);
         } catch (error) {
                console.error(error)
                setError(true);
                setIsLoading(false);
         }
     }

    useEffect(() => {
        getMovies()
    }, [page])

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong</p>}
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <h2>{movie.titleText.text}</h2>
                </Link>
            ))}
            <Stack spacing={2}>
                <Pagination count={10} onClick={
                    (event) => {
                        setPage(parseInt(event.target.innerText));
                    }
                } />
            </Stack>
        </div>
    );
}

export default Movies;