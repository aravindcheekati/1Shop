import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full h-14 shadow bg-violet-600">
      <nav className="w-full max-w-[1200px] h-14 mx-auto grid grid-cols-12 items-center gap-x-5 px-2">
        <div className="col-span-3 md:col-span-2">
          <h1 className="text-white text-2xl font-semibold">
            <Link to="/">1Shop</Link>
          </h1>
        </div>
        <div className="bg-white col-span-7 md:col-span-4 rounded">
          <form className="w-full flex">
            <input
              type="search"
              className="px-2 py-1 outline-none rounded w-full"
              placeholder="Search ..."
            />
            <button type="submit" className="px-2 py-1">
              <i className="ri-search-line" />
            </button>
          </form>
        </div>
        <div className="col-span-2 md:col-span-6 flex items-center justify-end gap-x-6">
          <div>
            <button
              className="bg-white w-10 h-10 rounded-full relative"
              onClick={() => setToggle(!toggle)}
            >
              <i className="ri-user-line" />
              {toggle &&
                <ul className="w-60 h-20 bg-white absolute top-14 right-0 shadow rounded-lg p-2 z-10">
                  <li className="p-1 rounded text-left text-[12px]">
                    Email: example@gmail.com
                  </li>
                  <li className="p-1 rounded">
                    <button className="block">
                      <i className="ri-login-box-line" /> Logout
                    </button>
                  </li>
                </ul>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
