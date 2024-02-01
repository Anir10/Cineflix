import { MovieCard } from "../components/MovieCard";
import { UseFetch, useTitle } from "../hooks";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
    },
  };
  const { data: movies } = UseFetch(apiPath, options, queryTerm);

  useTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Results found for '${queryTerm}'`
            : `Results found for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
