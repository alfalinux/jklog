import React from "react";
import TitleText from "../hooks/TitleText";

const CompanyInfo = () => {
  return (
    <div id="profil" className="container mx-auto py-12 px-4 font-montserrat text-sm">
      <div className="mb-8">
        <TitleText
          text="Tentang Kami"
          warnaText="text-hitam-muda-jkl"
          warnaLatar=""
          warnaPanah="text-biru-muda-jkl"
          opacityLatar="opacity-5"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-100 hover:border-biru-muda-jkl p-6 rounded-sm shadow-md">
          <h2 className="text-2xl font-bold mb-4">Sejarah Perusahaan</h2>
          <p className="text-gray-700">
            PT. Jupan Karya Logistik adalah perusahaan yang bergerak dibidang layanan pengiriman barang, paket
            dan dokumen dalam negeri. PT. Jupan Karya Logistik didirikan pada tahun 2024 di Surabaya. Dalam
            perkembangannya, kini PT. Jupan Karya Logistik sudah menjalin kerja sama dengan
            perusahaan-perusahaan besar di Indonesia. PT Jupan Karya Logistik menawarkan layanan terluas dan
            terintegrasi secara inovatif, kolaboratif dan kompetitif
          </p>
        </div>
        <div className="bg-white border border-gray-100 hover:border-biru-muda-jkl p-6 rounded-sm shadow-md">
          <h2 className="text-2xl font-bold mb-4">Visi</h2>
          <p className="text-gray-700">
            Menjadi pemimpin dan percontohan dalam industri layanan pengiriman dan transportasi dengan
            memberikan pelayanan terbaik, premium, dan tepat waktu
          </p>
        </div>
        <div className="bg-white border border-gray-100 hover:border-biru-muda-jkl p-6 rounded-sm shadow-md">
          <h2 className="text-2xl font-bold mb-4">Misi</h2>
          <p className="text-gray-700">
            Memperlancar proses bisnis semua mitra melalui jasa pengiriman secara disiplin, terintegrasi, demi
            mencapai efektifitas dan efisiensi pengiriman
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
