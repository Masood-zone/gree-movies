import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layout";
import NotFound from "./home/notFound";
import Auth from "./auth";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Home from "./home";
import Favourites from "./home/favourites";
import Trending from "./home/trending";
import ComingSoon from "./home/comingSoon";
import Search from "./home/search";
import Community from "./home/community";
import Profile from "./home/profile";
import Settings from "./home/profile/settings";
import ErrorBoundary from "../components/errors";
import ContentCategory from "./content/category";
import Approved from "./auth/approved";
import MovieDetails from "./content/movie/movieDetails";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      {/* Home */}
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route
        path="favourites"
        element={<Favourites />}
        errorElement={<ErrorBoundary />}
      />
      {/* Content */}
      <Route
        path="movie/:id"
        element={<MovieDetails />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="content/:category"
        element={<ContentCategory />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="trending"
        element={<Trending />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="coming-soon"
        element={<ComingSoon />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="search"
        element={<Search />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="community"
        element={<Community />}
        errorElement={<ErrorBoundary />}
      />
      {/* Profile */}
      <Route
        path="profile"
        element={<Profile />}
        errorElement={<ErrorBoundary />}
      />
      {/* Settings */}
      <Route
        path="settings"
        element={<Settings />}
        errorElement={<ErrorBoundary />}
      />
      {/* Auth */}
      <Route path="auth" element={<Auth />} errorElement={<ErrorBoundary />}>
        <Route
          path="login"
          element={<Login />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="signup"
          element={<Signup />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="approved"
          element={<Approved />}
          errorElement={<ErrorBoundary />}
        />
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
    </Route>
  )
);

export default routes;
