import React from "react";
import TitleText from "../hooks/TitleText";

const Armada = () => {
  return (
    <section id="armada" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <TitleText
            text="Dukungan Armada"
            warnaText="text-hitam-muda-jkl"
            warnaLatar=""
            warnaPanah="text-biru-muda-jkl"
            opacityLatar="opacity-5"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* BLINDVAN */}
          <div className="flex flex-col items-center">
            <img src="/src/assets/armada/granmax.jpeg" alt="CDE" className="h-32 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">5 Unit CDE</h3>
          </div>
          {/* CDE */}
          <div className="flex flex-col items-center">
            <img src="/src/assets/armada/cde.jpeg" alt="CDE" className="h-32 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">5 Unit CDE</h3>
          </div>
          {/* CDD */}
          <div className="flex flex-col items-center">
            <img src="/src/assets/armada/cdd.jpeg" alt="CDD" className="h-32 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">15 Unit CDD</h3>
          </div>
          {/* Wingbox */}
          <div className="flex flex-col items-center">
            <img src="/src/assets/armada/wingbox.jpeg" alt="Wingbox" className="h-32 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">5 Unit Wingbox</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Armada;
