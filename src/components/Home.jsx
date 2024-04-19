import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner1.png";
const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold text-neutralDGray md:w-3/4 leading-snug ">
                Lessons and insights <br />
                <span className=" text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralDGray text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary"> Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold text-neutralDGray md:w-3/4 leading-snug ">
                Let's Learn and Earn Money
                <br />
                <span className=" text-brandPrimary leading-snug">
                  in 4 Months
                </span>
              </h1>
              <p className="text-neutralDGray text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary"> Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;