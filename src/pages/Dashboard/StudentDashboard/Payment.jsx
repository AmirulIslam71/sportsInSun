import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import PaymentForm from "./PaymentForm";
import { useLocation } from "react-router-dom";
import useSelect from "../../../hooks/useSelect";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const [selectedClass] = useSelect();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const classId = searchParams.get("classId");

  const payClasses = selectedClass.find((classes) => classes._id === classId);
  const price = payClasses?.price;

  return (
    <div className="bg-gradient-to-r from-black to-red-950 w-full h-full p-5">
      <SectionTitle heading="Payment for Enrolled" />

      <Elements stripe={stripePromise}>
        <PaymentForm payClasses={payClasses} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
