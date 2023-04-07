import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const getMovie = async () => {
        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
            headers: {
                'X-RapidAPI-Key': '3680e98eeemsh8d6117be1d6ed1bp1f603fjsn542338db49ad',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        setIsLoading(true);
        try {
            const response = await axios.request(options)
            console.log(response.data.results)
            setMovie(response.data.results);
            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setError(true);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        return () => {
            getMovie()
        };
    }, []);

    return(
        <div>
            {
                isLoading && <p>Loading...</p>
            }
            {
                error && <p>Something went wrong</p>
            }
            {
                !isLoading && !error &&
                (<div>
                    <h1> Title: {movie.titleText.text}</h1>
                        <p>Relase date: {
                            movie.releaseYear.year
                        }</p>
                </div>
                )
            }

        </div>
    )

}

export default MovieDetails