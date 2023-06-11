import { Helmet } from "react-helmet-async";
import AdsSection from "../AdsSection/AdsSection";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import PopularInstructor from "../Popular/PopularInstructor";

const Home = () => {
  return (
    <div className="bg-black">
      <Helmet>
        <title>SportInSun-Home</title>
      </Helmet>
      <Banner></Banner>
      <Popular></Popular>
      <PopularInstructor></PopularInstructor>
      <AdsSection></AdsSection>
    </div>
  );
};

export default Home;
