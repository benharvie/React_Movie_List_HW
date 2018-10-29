import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return(
            <h3 className="movie">
                <li><a href={this.props.url}>{this.props.name}</a></li>
            </h3>
        );
    }
}

export default Movie;