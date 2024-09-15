import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzg4N2M3ZGRjZWZlYTQ1YzkzMmFiYThiYzYyZWUzNCIsIm5iZiI6MTcyNjM1OTU2My40MDQzNjMsInN1YiI6IjY2ZTYyNzEwZDdiY2NhNTI0ZGIwNTAwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8iEWUZ73G77N3rT5-UwGL_7njWL9XRa9w4hBGO-Ybss",
  },
});

// Movie List section
export const fetchPopularMovies = async () => {
  const { data } = await apiClient.get("/movie/popular");
  return data;
};

export const fetchTopRatedMovies = async () => {
  const { data } = await apiClient.get("/movie/top_rated");
  return data;
};

export const fetchUpcomingMovies = async () => {
  const { data } = await apiClient.get("/movie/upcoming");
  return data;
};

// Search movies
export const searchMovies = async (query: string) => {
  const { data } = await apiClient.get(`/search/movie?query=${query}`);
  return data;
};

// Movie details
export const fetchMovieDetails = async (
  id?: string,
  append_to_response?: {
    type: string;
  }
) => {
  const { data } = await apiClient.get(
    `/movie/${id}?append_to_response=${append_to_response?.type}`
  );
  return data;
};
