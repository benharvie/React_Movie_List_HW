import React, { Component } from 'react';
import Movie from './Movie'

class MovieList extends Component {
    render() {
        const movieNodes = this.props.data.map((movie) => {
            return <Movie key={movie.id} name={movie.name} url={movie.url} />
        })

        return(
            <div>
                <h3 className="movie-list">Upcoming Film Releases for UK</h3>
                {movieNodes}
            </div>
        );
    }
}

export default MovieList;