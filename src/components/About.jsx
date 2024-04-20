import about1 from "../assets/about/about1.png";
import member1 from "../assets/icons/member1.png";
import member2 from "../assets/icons/member2.png";
import member3 from "../assets/icons/member3.png";
import member4 from "../assets/icons/member4.png";


const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={about1} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h1 className="text-4xl text-neutralDGray font font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl text-neutralDGray font font-semibold mb-4 md:w-2/3">
              Helping a <br />
              <span className="text-brandPrimary">
                local business reinvent itself
              </span>
            </h1>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-8 ">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={member1} alt="" />
                <div>
                    <h4 className="text-2xl text-neutralDGray font-semibold">2,245,341</h4>
                    <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
              <img src={member2} alt="" />
                <div>
                    <h4 className="text-2xl text-neutralDGray font-semibold">46,328</h4>
                    <p>Club</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={member3} alt="" />
                <div>
                    <h4 className="text-2xl text-neutralDGray font-semibold">828,867</h4>
                    <p>Event Booking</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={member4} alt="" />
                <div>
                    <h4 className="text-2xl text-neutralDGray font-semibold">1,926,436</h4>
                    <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
