import React from "react";

interface IProps {
  title: string;
}

const SidebarHeader: React.FC<IProps> = ({ title }) => {
  return (
    <h2 className="flex items-center py-2 px-8 font-bold text-gray-700">
      {title}
    </h2>
  );
};

export default SidebarHeader;
