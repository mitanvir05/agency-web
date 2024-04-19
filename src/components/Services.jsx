import { Card } from "flowbite-react";

const Services = () => {
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
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-10">
          <div>
            <Card className="card-style">
              <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src="src/assets/icons/card1.png" alt="" />
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-neutralDGray">
                Membership Organisations
              </h5>
              <p className="font-normal text-neutralDGray">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </Card>
          </div>
          <div>
            <Card className="card-style">
              <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src="src/assets/icons/card2.png" alt="" />
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-neutralDGray">
                National Associations
              </h5>
              <p className="font-normal text-neutralDGray">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </Card>
          </div>
          <div>
            <Card className="card-style">
              <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src="src/assets/icons/card3.png" alt="" />
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-neutralDGray">
                Clubs And Groups
              </h5>
              <p className="font-normal text-neutralDGray">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
