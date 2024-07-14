import React from "react";
import TitleText from "../hooks/TitleText";
import granmax from "../assets/armada/blindvan.png";
import cde from "../assets/armada/cde.png";
import cdd from "../assets/armada/cdd.png";
import wingbox from "../assets/armada/wingbox.png";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* BLINDVAN */}
          <div className="flex flex-col items-center">
            <img src={granmax} alt="granmax" className="h-36 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Blindvan</h3>
          </div>
          {/* CDE */}
          <div className="flex flex-col items-center">
            <img src={cde} alt="CDE" className="h-36 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">CDE & CDE L</h3>
          </div>
          {/* CDD */}
          <div className="flex flex-col items-center">
            <img src={cdd} alt="CDD" className="h-36 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">CDD & CDD L</h3>
          </div>
          {/* Wingbox */}
          <div className="flex flex-col items-center">
            <img src={wingbox} alt="Wingbox" className="h-36 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Fusobox & Wingbox</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Armada;
