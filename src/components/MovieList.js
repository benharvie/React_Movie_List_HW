import React, { Component } from 'react';
import Movie from './Movie'

class MovieList extends Component {
    render() {
        const movieNodes = this.props.data.map((movie) => {
            return (
                <Movie 
                    key={movie.id} 
                    name={movie.name} 
                    url={movie.url} 
                />
            )
        })

        return(
            <div className="movie-list">
                <ul>
                    {movieNodes}
                </ul>
            </div>
        );
    }
}

export default MovieList;