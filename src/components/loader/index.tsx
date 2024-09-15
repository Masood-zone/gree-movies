export default function CardsLoader({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(count)].map((_, index: number) => (
        <Loader key={index} />
      ))}
    </div>
  );
}

function Loader() {
  return (
    <div className="w-full p-4 bg-gray-800 rounded-lg flex flex-col gap-4">
      {/* Image Loader */}
      <div className="w-full h-40 bg-gray-700 rounded-md animate-pulse"></div>

      {/* Title Loader */}
      <div className="w-3/4 h-4 bg-gray-700 rounded-md animate-pulse"></div>

      {/* Date Loader */}
      <div className="w-1/3 h-3 bg-gray-700 rounded-md animate-pulse"></div>
    </div>
  );
}
