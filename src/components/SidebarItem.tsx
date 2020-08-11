import React from "react";

interface IProps {
  name: string;
  icon: string;
}

const SidebarItem: React.FC<IProps> = ({ name, icon }) => {
  const active = false;
  return (
    <a
      className={`flex items-center py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700 ${
        active ? "border-r-4 border-gray-700 bg-gray-200" : ""
      }`}
      href="#"
    >
      <svg
        className="h-5 w-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d={icon}
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span className="mx-4 font-medium">{name}</span>
    </a>
  );
};

export default SidebarItem;
