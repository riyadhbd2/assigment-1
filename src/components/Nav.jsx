import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* <!-- Logo --> */}
          <a href="/">
            <img className="h-[70px]" src={logo} alt="Lws" />
          </a>
          {/* <!-- Logo Ends --> */}
          <a
            className="px-5 py-2 bg-[#172227] rounded-[44px] text-white"
            href="#"
          >
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
