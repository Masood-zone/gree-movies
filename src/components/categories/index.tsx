import { Link } from "react-router-dom";
import { heart } from "../../assets/svgs";
import { MovieCard } from "../cards";
import moment from "moment";
import { ChevronRightIcon } from "lucide-react";
import CardsLoader from "../loader";

export function MovieCategories({
  title,
  data,
  isLoading,
  error,
}: {
  title: string;
  data: {
    id: number;
    title: string;
    release_date: number;
    backdrop_path: string;
  }[];
  isLoading: boolean;
  error: {
    message: string;
  };
}) {
  if (isLoading)
    return (
      <>
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <CardsLoader count={4} />
      </>
    );
  if (error)
    return (
      <div>
        Error fetching data
        {error.message}
      </div>
    );
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <button>
          <Link to={`/content/${title.toLowerCase()}`}>
            <span className="text-purple-600">
              <ChevronRightIcon size={24} />
            </span>
          </Link>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export function MovieOfDay({
  id,
  title,
  year,
  image,
  overview,
}: {
  id: number;
  title: string;
  year: number;
  image: string;
  overview: string;
}) {
  return (
    <>
      <div className="relative h-96 overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w1280${image}`}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 
          ease-in-out
            
          "
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-4xl font-bold text-white mb-2 hover:underline">
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p className="text-gray-300 mb-4">
            {moment(year).format("MMM Do YY")}
          </p>
          <p className="text-gray-300 mb-4">{overview}</p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
              Watch now
            </button>
            <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
              <img src={heart} alt="Add to favourites" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
