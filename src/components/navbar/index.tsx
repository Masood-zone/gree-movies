import { Link } from "react-router-dom";
import { bell, search } from "../../assets/svgs";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-5 sticky">
      {/* Nav Links */}
      <nav className="space-x-4">
        <Link to="/content/movies" className="text-white hover:text-purple-400">
          Movies
        </Link>
        <Link to="/content/series" className="text-white hover:text-purple-400">
          Series
        </Link>
        <Link
          to="/content/documentaries"
          className="text-white hover:text-purple-400"
        >
          Documentaries
        </Link>
      </nav>
      {/* Avatar */}
      <div className="flex items-center space-x-4">
        <button className="text-white">
          <img src={search} alt="search" />
        </button>
        <button className="text-white">
          <img src={bell} alt="notifications" />
        </button>
        <img
          src="/placeholder.svg?height=32&width=32"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}

export default Navbar;
