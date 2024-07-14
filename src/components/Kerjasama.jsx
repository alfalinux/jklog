import React from "react";
import TitleText from "../hooks/TitleText";
import partnerbg from "../assets/hero-bg.jpg";
import logojnt from "../assets/partner-logo/jntexpress.png";
import logokmn from "../assets/partner-logo/kmn.png";
import logosatake from "../assets/partner-logo/satake.png";
import logoshopeeexpress from "../assets/partner-logo/shopeeexpress.png";
import logosina from "../assets/partner-logo/sina.png";
import logostylekorean from "../assets/partner-logo/stylekorean.png";
import logolynthaztigajaya from "../assets/partner-logo/LYNTHAZTIGAJAYA.png";
import logomashmoshem from "../assets/partner-logo/mashmoshem.png";
import logoparicargo from "../assets/partner-logo/paricargo.png";
import logohsemei from "../assets/partner-logo/hsemei.png";
import logogdm from "../assets/partner-logo/gdm.png";

const Kerjasama = () => {
  const clientLogos = [
    { id: 1, image: logojnt, alt: "logo j&t express" },
    { id: 2, image: logokmn, alt: "logo kausar mahala nawasena" },
    { id: 3, image: logosatake, alt: "logo satake indonesia" },
    { id: 4, image: logoshopeeexpress, alt: "logo shopee express" },
    { id: 5, image: logosina, alt: "logo sin a six fifteen" },
    { id: 6, image: logostylekorean, alt: "logo style korean" },
    { id: 7, image: logolynthaztigajaya, alt: "logo lhyntaz tiga jaya" },
    { id: 8, image: logomashmoshem, alt: "logo mash moshem indonesia" },
    { id: 9, image: logoparicargo, alt: "logo pari cargo" },
    { id: 10, image: logohsemei, alt: "logo hsemei / hse mei" },
    { id: 11, image: logogdm, alt: "logo gdm dari alam ke alam" },
    // Add more logos as needed
  ];

  return (
    <div
      id="kerjasama"
      className="relative bg-blue-100"
      style={{
        backgroundImage: `url(${partnerbg})`,
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
              <img src={client.image} alt={client.alt} className="max-h-32 md:max-h-36 lg:max-h-36" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kerjasama;
