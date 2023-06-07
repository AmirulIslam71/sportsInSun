import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-h-screen">
      <img
        src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090004.jpg"
        alt=""
        className="lg:w-2/3 md:3/4 mx-auto h-[400px]  "
      />
      <div className="">
        <Link to="/">
          <button className="btn btn-primary">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
