import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useProfile from "../../../hooks/useProfile";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [profile] = useProfile();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/adminStats");
      return res.data;
    },
  });

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl lg:text-3xl">
        HI ,Welcome there,{" "}
        <span className="text-4xl font-bold uppercase">
          {user?.displayName}
        </span>
      </h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
        <div className="stat bg-slate-200">
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>

        <div className="stat bg-green-200">
          <div className="stat-title">Classes</div>
          <div className="stat-value">{stats?.classes}</div>
        </div>

        <div className="stat bg-red-300">
          <div className="stat-title">Instructors</div>
          <div className="stat-value">{stats?.instructor}</div>
        </div>

        <div className="stat bg-amber-200">
          <div className="stat-title">Student Enrolled</div>
          <div className="stat-value">{stats?.payments}</div>
        </div>
        <div className="stat bg-green-600">
          <div className="stat-title">Total Payments</div>
          <div className="stat-value">{stats?.total}</div>
        </div>
      </div>
      <div className="card lg:card-side mt-4 shadow-xl w-2/3">
        <div className="w-1/2 h-full">
          <figure>
            <img src={profile?.photo} alt="Album" className="w-full h-full" />
          </figure>
        </div>
        <div className="card-body w-1/2">
          <h2 className="card-title uppercase">Name : {profile?.name}</h2>
          <p>Email : {profile?.email}</p>
          <p>Gender : {profile?.gender}</p>
          <p>Contact :{profile?.phone}</p>
          <p>Address : {profile?.address}</p>
          <p>Role : {profile?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
