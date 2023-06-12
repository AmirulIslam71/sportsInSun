import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../assets/bg-slider/slider1.jpg";
import slider2 from "../../../assets/bg-slider/slider2.jpg";
import slider3 from "../../../assets/bg-slider/slider3.jpg";
import useAuth from "../../../hooks/useAuth";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div>
      <Carousel>
        <div>
          <img src={slider1} />
          <div className="absolute bg-black opacity-50 top-0 left-0 bottom-0 right-0 text-center">
            <div className="hero-content text-center text-neutral-content">
              <div className="lg:w-1/2 lg:mt-72 md:mt-50 mt-2 space-y-2">
                <h1 className="mb-5 lg:text-5xl text-xl font-bold">
                  <Slide>Welcome there,</Slide>{" "}
                  <Fade
                    delay={1e3}
                    cascade
                    damping={1e-1}
                    className="uppercase"
                  >
                    {user?.displayName ? user?.displayName : ""}
                  </Fade>
                </h1>
                <p className="mb-5">
                  Summer is the perfect time to hit the road on your bicycle,
                  enjoying the warmth of the sun and the refreshing breeze as
                  you explore scenic routes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={slider2} />
          <div className="absolute bg-black opacity-50 top-0 left-0 bottom-0 right-0 text-center">
            <div className="hero-content text-center text-neutral-content">
              <div className="lg:w-1/2 lg:mt-72 md:mt-50 mt-2">
                <h1 className="mb-5 lg:text-5xl text-xl font-bold">
                  Welcome there,
                </h1>
                <p className="mb-5">
                  Summer is synonymous with outdoor activities, and for many,
                  that includes the spirited game of volleyball, as players
                  gather on sunny beaches to engage in friendly matches under
                  the clear blue sky.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={slider3} />
          <div className="absolute bg-black opacity-50 top-0 left-0 bottom-0 right-0 text-center">
            <div className="hero-content text-center text-neutral-content">
              <div className="lg:w-1/2 lg:mt-72 md:mt-50 mt-2">
                <h1 className="mb-5 lg:text-5xl text-xl font-bold">
                  Welcome there,
                </h1>
                <p className="mb-5">
                  Summer swimming is a popular activity that allows people to
                  cool off and enjoy the refreshing water during the hot months,
                  whether it is in a pool, lake, or the ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
