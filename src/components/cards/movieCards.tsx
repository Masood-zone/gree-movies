import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  release_date: number;
  backdrop_path: string;
}

export default function MovieCard({
  id,
  title,
  release_date,
  backdrop_path,
}: MovieCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
          className="w-full h-48 object-cover 
            hover:scale-110 transition-transform duration-500 ease-in-out
          "
        />
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">
          <Link to={`/movie/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-400">{release_date}</p>
      </div>
    </div>
  );
}
