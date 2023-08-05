import { Link, useRouteError } from "react-router-dom";

const ErrorLayout = () => {
  const handleError = useRouteError();
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl font-semibold">Oops!</h1>
      <h2 className="text-3xl font-semibold">Something went wrong!</h2>
      <p className="text-xl">Error Message: {handleError.statusText}</p>
      <p className="text-xl">Error Code: {handleError?.status}</p>
      <p className="text-xl">{handleError.data}</p>
      <Link
        className="text-xl text-blue-500 underline hover:text-blue-600 hover:no-underline  active:text-blue-600"
        to={"/"}
      >
        Go Back to Home Page
      </Link>
    </div>
  );
};

export default ErrorLayout;
