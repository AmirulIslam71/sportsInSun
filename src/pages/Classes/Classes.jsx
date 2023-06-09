import { Parallax } from "react-parallax";

const Classes = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -60, max: 60 }}
        bgImage={"https://i.ibb.co/2tc6vSJ/classes2.jpg"}
        bgImageAlt="the menu"
        strength={-200}
        className=""
      >
        <div className="hero h-[400px] bg-black opacity-50">
          <div className="hero-content text-center text-neutral-content w-2/4 ">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold  uppercase">
                our classes
              </h1>
              <p className="text-2xl">
                Home - <span className="text-amber-200">Classes</span>
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Classes;
