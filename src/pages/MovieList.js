import { MovieCard } from "../components/MovieCard";
import { UseFetch, useTitle } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
    },
  };
  const { data: movies } = UseFetch(apiPath, options);

  useTitle(`${title}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
