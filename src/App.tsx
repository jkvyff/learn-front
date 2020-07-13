import React from "react";
import "./tailwind.css";

function App() {
  return (
    <div className="App h-screen">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="mx-auto h-screen flex justify-center items-center">
          <div className="w-full md:w-1/2 rounded-lg">
            <img
              className="h-56 lg: h-90 w-full object-cover rounded-t"
              src="https://source.unsplash.com/random"
              alt="Motorcycle"
            />
            <div className="border-teal p-8 xl:p-12 border-t-12 bg-gray-100 rounded-lg shadow-xl">
              <h1 className="text-2xl text-blue-600">
                React, Typescript, Tailwind
              </h1>
              <p className="text-base text-gray-700 leading-normal">
                Get started togeather
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
