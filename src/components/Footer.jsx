import { Link } from "react-router-dom";
import { logoBracketsLight } from "../assets";

function Footer() {
  return (
    <div className="bg-background1 grid grid-cols-3 items-center justify-center bottom-0 w-full">

      <div className="col-span-1 pl-20 mb-0.1 mt-0.1">
      <p className="text-white font-body font-bold text-md mb-1">
          Copyright
          <span className="text-secondary font-links font-bold text-md mx-2">
            ©
          </span>
          2023 Anastasia Adamoudi
        </p>
      </div>

      <div className="col-span-1 mx-auto mb-0.1 mt-0.1">
      <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          alt="home"
        >
          <img
            src={logoBracketsLight}
            alt="logo"
            className="w-[100px]"
          />
        </Link>
      </div>

      <div className="col-span-1 pr-20 mb-0.1 mt-0.1">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="text-primary hover:bg-secondaryT font-links font-bold text-sm no-underline">
            Privacy Policy
          </div>
          <span className="text-secondary font-links font-bold text-md mx-2">
            |
          </span>
          <div className="text-primary hover:bg-secondaryT font-links font-bold text-sm no-underline">
            Web Accessibility Statement
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
