import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchMovieDetails } from "../../../api/api";

interface MovieDetails {
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: { id: number; name: string }[];
  poster_path: string;
  backdrop_path: string;
  images: {
    backdrops: { file_path: string }[];
  };
}

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useQuery<MovieDetails>({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id, { type: "images" }),
  });
  console.log(data);

  if (isLoading)
    return <div className="text-white text-center py-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-red-500 text-center py-10">
        Error fetching movie details
      </div>
    );
  if (!data) return null;

  return (
    <div className=" min-h-screen text-white">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
          className="w-full h-[50vh] object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
          <p className="text-lg mb-4">
            {data.release_date.split("-")[0]} | {data.runtime} min
          </p>
          <div className="flex space-x-2 mb-4">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-purple-600 px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xl font-bold">
              {data.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-300 mb-8">{data.overview}</p>

        <h2 className="text-2xl font-bold mb-4">Images</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mb-8"
        >
          {data.images.backdrops.slice(0, 10).map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                alt={`${data.title} backdrop ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Release Date:</span>{" "}
                {data.release_date}
              </li>
              <li>
                <span className="font-semibold">Runtime:</span> {data.runtime}{" "}
                minutes
              </li>
              <li>
                <span className="font-semibold">Genres:</span>{" "}
                {data.genres.map((genre) => genre.name).join(", ")}
              </li>
            </ul>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={`${data.title} poster`}
              className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
