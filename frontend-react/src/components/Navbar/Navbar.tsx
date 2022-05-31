import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <div>
      <nav className="app__navbar flex justify-between items-center m-4">
        <div className="app__navbar-logo text-3xl font-bold text-gray-800">
          <h1>CHAMPNC</h1>
        </div>
        <ul className="app__navbar-links flex justify-between items-center space-x-8">
          {["About me", "Experiance", "Education", "Work", "Contact"].map(
            (item) => (
              <li
                key={`link-${item}`}
                className="text-gray-400 hover:text-gray-900 duration-500 hidden md:inline"
              >
                <div />
                <a
                  href={`#${item.toLocaleLowerCase()}`}
                  className="text-lg font-bold"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <button
          className="text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setIsShowNav(!isShowNav)}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
      </nav>
      <Transition
        show={isShowNav}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className={"block md:hidden" + (isShowNav ? " flex" : " hidden")}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["About me", "Experiance", "Education", "Work", "Contact"].map(
              (item) => (
                <div
                  key={`link-${item}`}
                  className="text-gray-400 hover:text-gray-900 duration-500"
                >
                  <div />
                  <a
                    href={`#${item.toLocaleLowerCase()}`}
                    className="text-lg font-bold"
                  >
                    {item}
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
