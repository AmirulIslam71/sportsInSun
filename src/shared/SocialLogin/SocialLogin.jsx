import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Create with social site successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
        navigate(from, { replace: true });
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
