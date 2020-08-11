import React, { SetStateAction, Dispatch } from "react";
import Logo from "../assets/Logo.png";

interface IProps {
  menuHidden: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

const HeaderNav: React.FC<IProps> = ({ menuHidden, toggleMenu }) => {
  return (
    <div className="bg-gray-20">
      <header className="z-30 fixed h-14 w-full px-5 bg-white flex flex-wrap items-center py-0 bg-opacity-75">
        <div
          onClick={() => {
            toggleMenu(menuHidden);
          }}
          className="rounded-full hover:bg-gray-300 p-1 m-1 mr-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            width="32px"
            version="1.1"
            viewBox="0 0 32 32"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </div>
        <div className="flex-initial flex justify-between items-center pr-10">
          <a href="#">
            <img width="54" height="54" src={Logo} alt="Placeholder Logo" />
          </a>
        </div>
        <form className="flex-1 m-1 px-4 w-full md:w-1/4">
          <div className="flex border-grey-light border">
            <input
              className="w-full pl-4 rounded"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
              <span className="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
                <svg
                  className="fill-current inline-block h-4 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 489.713 489.713"
                >
                  <g>
                    <path d="M483.4,454.444l-121.3-121.4c28.7-35.2,46-80,46-128.9c0-112.5-91.5-204.1-204.1-204.1S0,91.644,0,204.144   s91.5,204,204.1,204c48.8,0,93.7-17.3,128.9-46l121.3,121.3c8.3,8.3,20.9,8.3,29.2,0S491.8,462.744,483.4,454.444z M40.7,204.144   c0-90.1,73.2-163.3,163.3-163.3s163.4,73.3,163.4,163.4s-73.3,163.4-163.4,163.4S40.7,294.244,40.7,204.144z" />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </form>

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <a href="#" className="px-0 mr-3 block hover:bg-gray-300">
                  <svg
                    className="fill-current inline-block h-8 w-8"
                    viewBox="38 35 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M60.85,51 L57.7,51 C55.96015,51 54.55,52.343 54.55,54 L54.55,57 C54.55,58.657 55.96015,60 57.7,60 L60.85,60 C62.58985,60 64,58.657 64,57 L64,54 C64,52.343 62.58985,51 60.85,51 M49.3,51 L46.15,51 C44.41015,51 43,52.343 43,54 L43,57 C43,58.657 44.41015,60 46.15,60 L49.3,60 C51.03985,60 52.45,58.657 52.45,57 L52.45,54 C52.45,52.343 51.03985,51 49.3,51 M60.85,40 L57.7,40 C55.96015,40 54.55,41.343 54.55,43 L54.55,46 C54.55,47.657 55.96015,49 57.7,49 L60.85,49 C62.58985,49 64,47.657 64,46 L64,43 C64,41.343 62.58985,40 60.85,40 M52.45,43 L52.45,46 C52.45,47.657 51.03985,49 49.3,49 L46.15,49 C44.41015,49 43,47.657 43,46 L43,43 C43,41.343 44.41015,40 46.15,40 L49.3,40 C51.03985,40 52.45,41.343 52.45,43" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="px-0 mr-3 block hover:bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    width="36px"
                    height="36px"
                    className="fill-current text-gray-700 mx-1"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                      <g>
                        <path d="M2,4v16h20V4H2z M20,8.67h-2.5V6H20V8.67z M17.5,10.67H20v2.67h-2.5V10.67z M4,6h11.5v12H4V6z M17.5,18v-2.67H20V18H17.5z" />
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="px-0 mr-3 block hover:bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="36px"
                    height="36px"
                    className="fill-current text-gray-700 mx-1"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-.74 0-1.45.17-2.08.46 1.72.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c.63.29 1.34.46 2.08.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-3 px-0 lg:p-3 block hover:bg-gray-300"
                >
                  Features
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                  className="fill-current text-gray-700"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M0 0h24v24H0V0z"
                    fill="none"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="nav-container">{/* TODO */}</div>
    </div>
  );
};

export default HeaderNav;
