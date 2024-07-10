import React from "react";

const Footer = () => {
  return (
    <footer
      id="kontak"
      className="relative bg-black text-gray-300 text-sm font-montserrat"
      style={{
        backgroundImage: `url(${"./src/assets/testimonials-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0 z-10">
            <img src="/src/assets/jkl-logo-1.png" alt="Jupan Karya Logistik" className="h-10 mb-4" />
            <div className="">
              <p>Karah I/29 E</p>
              <p>Kel. Karah, Kec. Jambrangan</p>
              <p>Kota Surabaya, Jawa Timur - 60232</p>
              <br />
              <p>
                <strong>Telp / Whatsapp:</strong>
                <p>0812-3295-1016</p>
                <p>0812-1667-8852</p>
              </p>
              <br />
              <p>
                <strong>Email:</strong>
              </p>
              <p>eri.jklogistics@gmail.com</p>
              <p>eri.andynata@jupankaryalogistik.com</p>
              <p>admin@jupankaryalogistik.com</p>
            </div>
          </div>

          {/* usefull links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0 z-10">
            <h4 className="text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cek Ongkir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0 z-10">
            <h4 className="text-white mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cargo Retail
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Trucking On Call
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Trucking Dedicated
                </a>
              </li>
            </ul>
          </div>

          <div className="container mt-12 mx-auto text-center py-4 border-t border-gray-800 z-10">
            <p>
              © <span className="px-1 text-white">2024</span>{" "}
              <strong className="px-1">Jupan Karya Logistik</strong>
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          filter: "opacity(90%)",
        }}
      ></div>
    </footer>
  );
};

export default Footer;
