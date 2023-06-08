import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="text-center">
      <button
        // onClick={handleGoogleSignIn}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
