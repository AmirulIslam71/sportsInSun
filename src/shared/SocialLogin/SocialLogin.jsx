import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
  const { googleSignIn, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const name = user?.displayName;
        const email = user?.email;
        const photo = user?.photoURL;

        updateUserProfile(name, photo)
          .then(() => {
            const saveUser = {
              name,
              email,
              photo,
            };
            axios.post("http://localhost:5000/users", saveUser).then((res) => {
              if (res.data.insertedId) {
                navigate(from, { replace: true });
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
