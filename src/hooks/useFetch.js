import { useEffect, useState } from "react";

export const UseFetch = (apiPath, options, queryTerm = " ") => {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json.results);
    };
    fetchMovies();
  }, [url, options]);
  return { data };
};
