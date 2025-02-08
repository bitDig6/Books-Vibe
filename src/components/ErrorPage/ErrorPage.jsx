import { useRouteError } from "react-router";


const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <div>
            <h2 className="text-5xl">
              Error  {error.status}
            </h2>
            <h2 className="text-4xl"> Page {error.statusText}</h2>
        </div>
    );
};

export default ErrorPage;