import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  //toogle menu set
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navitem array

  const navitems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className=" w-full bg-white md:bg-transparent fixed top-0 right-o left-0">
      <nav className={`py-4 lg:px-14 ${isSticky?"sticky top-0 left-0 right-0 bg-white duration-300":""}`}>
        <div className="flex justify-between items-center text-base gap-6">
          <a
            className="flex text-2xl font-semibold items-center space-x-3"
            href=""
          >
            <img src={logo} alt="" /> <span>NEXTCENT</span>
          </a>
          {/* nav items for large items */}
          <ul className="md:flex space-x-11 hidden">
            {navitems.map(({ link, path }) => (
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                to={path}
                className="block text-base text-gray-900 hover:text-brandPrimary"
              >
                {link}
              </Link>
            ))}
          </ul>
         {/* menu button for small device */}
         <div className="md:hidden">
            
            <button onClick={toggleMenu} className="focus:outline-none focus:text-neutralGrey">
            
                {
                    isMenuOpen?(<FaXmark className="h-6 w-6 text-neutralGrey"></FaXmark>):(<FaBars></FaBars>)
                }
            </button>
         </div>
        </div>
      </nav>
      {/* nav items for mobile device  */}
      <div className={`space-y-4 px-4 mt-16 bg-brandPrimary ${isMenuOpen?"block fixed top-0 left-0 right-0":"hidden"}`}>
      {navitems.map(({ link, path }) => (
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                to={path}
                className="block text-base text-gray-900 hover:text-brandPrimary"
              >
                {link}
              </Link>
            ))}     
      </div>
    </header>
  );
};

export default Navbar;
