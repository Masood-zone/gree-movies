import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error: Error | undefined = useRouteError() as Error | undefined;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-400 mb-8">
          We're sorry, but there was an error loading this page.
        </p>
        <p className="text-gray-400 mb-8 italic">
          <span className="text-red-500 text-lg">Error: </span>
          {error?.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
