import { Link } from "react-router-dom";
import { Button } from "../components/index";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { useTitle } from "../hooks";

export const PageNotFound = () => {
  useTitle(`Page Not Found 404 / CineFlix`);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-2">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, OOPS!!!! Page Not found
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page not found"
            />
          </div>
          <div className="flex justify-center my-4">
            <Link to="/">
              <Button>Back to CineFlix</Button>
            </Link>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
};
