import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import moment from "moment/moment";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  const total = payments.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="bg-gradient-to-r from-black to-red-950 w-full h-full p-5">
      <SectionTitle
        heading={"Manage all Payment Classes"}
        subHeading={""}
      ></SectionTitle>
      <div className="overflow-x-auto bg-white p-2 mt-6">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-2xl ">Payment classes : {payments.length}</h1>
          <h1 className="text-2xl ">Total Amount : ${total}</h1>
          {/* <h1 className="text-2xl">Total Price: ${totalPrice}</h1> */}
        </div>
        <table className="table">
          <thead className="bg-amber-700 text-white text-lg">
            <tr>
              <th>#</th>
              <th>Image-- Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={payment?.image} alt="User Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{payment?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{payment?.instructorName}</td>
                <td className="">${payment?.price}</td>
                <td className="">
                  {moment(payment?.date).format("YYYY-MM-DD HH:mm:ss")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
