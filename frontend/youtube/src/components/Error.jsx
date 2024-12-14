import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
function Error() {
  const err = useRouteError();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-red-50 text-red-800">
      <div className="border border-red-300 rounded-lg p-8 shadow-lg bg-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          {err.status}:{err.statusText}
        </h1>
        <p className="text-lg font-medium mb-2">Oops! Something went wrong.</p>
        <h1 text-sm text-gray-600>
          {err.data}
        </h1>
        <Link to="/">
          <button className="border-2 bg-blue-400 mt-[30px] p-2 rounded-md">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Error;
