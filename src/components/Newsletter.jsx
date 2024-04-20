const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutral-200 py-16">
      <div className="flex items-center justify-center  mx-auto">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl text-neutralDGray font font-semibold mb-6 lg:leading-6 ">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">
              Get a Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="inline-block ml-2"
              >
                <path
                  d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                  stroke="white"
                  
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
