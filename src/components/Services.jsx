import { Card } from "flowbite-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/member1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/member2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/member3.png",
    },
  ];
  return (
    <div className="md:px-14 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Our Client
        </h2>
        <p className="text-neutralDGray">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="src/assets/icons/company1.png" alt="" />
          <img src="src/assets/icons/company2.png" alt="" />
          <img src="src/assets/icons/company3.png" alt="" />
          <img src="src/assets/icons/company4.png" alt="" />
          <img src="src/assets/icons/company5.png" alt="" />
          <img src="src/assets/icons/company6.png" alt="" />
          <img src="src/assets/icons/company7.png" alt="" />
        </div>
        {/* services card */}
        <div className="mt-20 md:w-1/2 mx-auto text-center ">
          <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
            Manage your entire community <br /> in a single system
          </h2>
          <p className="text-neutralDGray">Who is Nextcent suitable for?</p>
        </div>
        {/* card */}
        
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:w-11/12 mx-auto w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-800 transition-all duration-300 flex items-center h-full justify-center"
            >
              <div>
                <div className="">
                  <img
                    src={service.image}
                    alt=""
                    className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"
                  />
                  <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutralDGray">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
