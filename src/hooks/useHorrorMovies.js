import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useHorrorMovies = () => {
  // Fetch data from Movies TMDB API and update Store.
  const dispatch = useDispatch();

  const HorrorMovies = useSelector(
    (store) => store.movies.horrorMovies
  );

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=horror&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    !HorrorMovies && getHorrorMovies();// eslint-disable-next-line 
  }, []);
};

export default useHorrorMovies;