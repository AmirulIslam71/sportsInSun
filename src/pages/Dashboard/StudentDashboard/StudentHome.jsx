import useAuth from "../../../hooks/useAuth";

const StudentHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full h-full p-2">
      <h1>HI ,Welcome there,{user?.displayName}</h1>
    </div>
  );
};

export default StudentHome;
