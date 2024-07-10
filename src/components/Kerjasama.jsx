import React from "react";
import TitleText from "../hooks/TitleText";

const Kerjasama = () => {
  const clientLogos = [
    { id: 1, image: "/src/assets/partner-logo/jntexpress.png", alt: "Logo 1" },
    { id: 2, image: "/src/assets/partner-logo/kausar mahala nawasena.jpeg", alt: "Logo 2" },
    { id: 3, image: "/src/assets/partner-logo/satake.png", alt: "Logo 3" },
    { id: 4, image: "/src/assets/partner-logo/shopeeexpress.png", alt: "Logo 4" },
    { id: 5, image: "/src/assets/partner-logo/sina.jpeg", alt: "Logo 5" },
    { id: 6, image: "/src/assets/partner-logo/stylekorean.png", alt: "Logo 6" },
    // Add more logos as needed
  ];

  return (
    <div
      id="kerjasama"
      className="relative bg-blue-100"
      style={{
        backgroundImage: `url(${"./src/assets/hero-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative container mx-auto py-12 px-4 z-10">
        <div className="mb-8">
          <TitleText
            text="Pelanggan Kami"
            warnaText="text-hitam-muda-jkl"
            warnaLatar=""
            warnaPanah="text-biru-muda-jkl"
            opacityLatar="opacity-5"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-12">
          {clientLogos.map((client) => (
            <div key={client.id} className="flex justify-center items-center p-2 rounded-lg">
              <img src={client.image} alt={client.alt} className="max-h-12 md:max-h-36 lg:max-h-36" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kerjasama;
