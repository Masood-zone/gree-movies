import { useQuery } from "@tanstack/react-query";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../../api/api";
import { MovieCategories, MovieOfDay } from "../../components/categories";

function Home() {
  const { data: movies } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });
  const {
    data: topRatedMovies,
    isLoading: topRatedMoviesLoading,
    error: topRatedMoviesErrorData,
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });
  const {
    data: upcomingMovies,
    isLoading: upcomingMoviesLoading,
    error: upcomingMoviesErrorData,
  } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpcomingMovies,
  });

  const movieOfDay = movies?.results[1];

  return (
    <div className="z-10 ">
      {/* Movie Banner */}
      <section className="mb-12">
        <MovieOfDay
          id={movieOfDay?.id}
          title={movieOfDay?.title}
          year={movieOfDay?.release_date}
          overview={movieOfDay?.overview}
          image={movieOfDay?.backdrop_path}
        />
      </section>
      {/* Movie Sections */}
      <section className="mb-10">
        <MovieCategories
          title="Top Rated movies"
          data={topRatedMovies?.results?.slice(1, 5)}
          isLoading={topRatedMoviesLoading}
          error={topRatedMoviesErrorData}
        />
      </section>
      <section className="mb-10">
        <MovieCategories
          title="Upcoming movies"
          data={upcomingMovies?.results?.slice(1, 5)}
          isLoading={upcomingMoviesLoading}
          error={upcomingMoviesErrorData}
        />
      </section>
    </div>
  );
}

export default Home;
