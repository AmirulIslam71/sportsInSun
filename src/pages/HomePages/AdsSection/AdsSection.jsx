import SectionTitle from "../../../components/SectionTitle";

const AdsSection = () => {
  return (
    <div>
      <SectionTitle
        heading={"push your limits forward"}
        subHeading={"why choose us?"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Modern Equipment</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Healthy nutrition plan</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Proffesional training plan </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Unique to your needs</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
