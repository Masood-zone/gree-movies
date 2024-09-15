import { Link } from "react-router-dom";
import {
  calendar,
  film,
  heart,
  logout,
  settings,
  trending,
} from "../../assets/svgs";

export default function Sidebar() {
  return (
    <aside className="w-64 text-white p-6 overflow-hidden shadow-purple-shadow">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Gree Movies</h1>
      </div>
      <nav className="flex flex-col h-[80dvh]">
        {/* Top Links */}
        <div className="flex-1 space-y-4">
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-1 rounded hover:bg-gray-700"
          >
            <img src={film} alt="Home" />
            Home
          </Link>
          <Link
            to="/favourites"
            className="flex items-center gap-4 py-2 px-1 rounded hover:bg-gray-700"
          >
            <img src={heart} alt="Favourites" />
            Favourites
          </Link>
          <Link
            to="/trending"
            className="flex items-center gap-4 py-2 px-1 rounded hover:bg-gray-700"
          >
            <img src={trending} alt="Trending" />
            Trending
          </Link>
          <Link
            to="/coming-soon"
            className="flex items-center gap-4 py-2 px-1 rounded hover:bg-gray-700"
          >
            <img src={calendar} alt="coming-soon" />
            Coming soon
          </Link>
        </div>

        {/* Bottom Links */}
        <div className="space-y-4">
          <Link
            to="/settings"
            className="flex items-center gap-4 py-2 px-1 rounded hover:bg-gray-700"
          >
            <img src={settings} alt="Settings" />
            Settings
          </Link>
          <button className="flex items-center gap-4 py-2 px-1 rounded hover:bg-gray-700">
            <img src={logout} alt="Logout" />
            Log out
          </button>
        </div>
      </nav>
    </aside>
  );
}
