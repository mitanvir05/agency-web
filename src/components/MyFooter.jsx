import { Footer } from "flowbite-react";

import logo from "../assets/logo.png";
const MyFooter = () => {
  return (
    <div>
      <Footer container>
        <div className="w-full">
          <div className="grid max-w-screen-2xl justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="space-y-4 mb-8 ml-40">
              <a
                className="flex text-2xl  font-semibold items-center space-x-3"
                href=""
              >
                <img src={logo} alt="" /> <span>NEXTCENT</span>
              </a>
              <div>
                <p className="mb-1">Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Nextcent</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
         
          
        </div>
      </Footer>
    </div>
  );
};

export default MyFooter;
