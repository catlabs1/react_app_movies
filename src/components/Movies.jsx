import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4>Извините, мы не смогли найти такого фильма.</h4>
            )
        }
        </div>
    );
}

export { Movies };
