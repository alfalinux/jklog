import React from "react";
import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import SelectTujuan from "../hooks/SelectTujuan";
import SelectAsal from "../hooks/SelectAsal";

const CekTarif = () => {
  const [asal, setAsal] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [layanan, setLayanan] = useState("");
  const [getDataTujuan, setGetDataTujuan] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [asalVerified, setAsalVerified] = useState(true);
  const [tujuanVerified, setTujuanVerified] = useState(true);
  const [layananVerified, setLayananVerified] = useState(true);

  const asalChangeHandler = (e) => {
    setAsal(e.kota);
  };

  const tujuanChangeHandler = (e) => {
    setTujuan(e.kota);
    setGetDataTujuan(e);
  };

  const layananChangeHandler = (e) => {
    setLayanan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonClicked(true);

    layanan === "Cargo Retail"
      ? showOngkir()
      : layanan === "Trucking On Call"
      ? showContact()
      : layanan === "Trucking Dedicated"
      ? showContact()
      : null;
  };

  const asalClearHandler = (e) => {
    setAsal("");
  };

  const tujuanClearHandler = (e) => {
    setTujuan("");
    setGetDataTujuan("");
  };

  const showOngkir = () => {
    Swal.fire({
      title: "Informasi Pengiriman",
      html: `
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border: none;">
            <td style="padding: 8px; text-align: left;">Asal</td>
            <td style="padding: 8px; text-align: left;">:</td>
            <td style="padding: 8px; text-align: left;">${asal}</td>
          </tr>
          <tr style="border: none;">
            <td style="padding: 8px; text-align: left;">Tujuan</td>
            <td style="padding: 8px; text-align: left;">:</td>
            <td style="padding: 8px; text-align: left;">${getDataTujuan.kota}</td>
          </tr>
          <tr style="border: none;">
            <td style="padding: 8px; text-align: left;">Ongkir</td>
            <td style="padding: 8px; text-align: left;">:</td>
            <td style="padding: 8px; text-align: left;">Rp ${getDataTujuan.ongkir.toLocaleString(
              "id-ID"
            )} per-Kg</td>
          </tr>
          <tr style="border: none;">
            <td style="padding: 8px; text-align: left;">Minimal</td>
            <td style="padding: 8px; text-align: left;">:</td>
            <td style="padding: 8px; text-align: left;">${getDataTujuan.minimum} Kg</td>
          </tr>
          <tr style="border: none;">
            <td style="padding: 8px; text-align: left;">Estimasi</td>
            <td style="padding: 8px; text-align: left;">:</td>
            <td style="padding: 8px; text-align: left;">${getDataTujuan.sla} hari</td>
          </tr>
        </table>
      `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-biru-muda-jkl text-white py-2 px-12 rounded",
      },
    });
  };

  const showContact = () => {
    const whatsappNumber1 = "082284486336";
    const whatsappNumber2 = "081234567890"; // Nomor WhatsApp kedua
    const message = encodeURIComponent("Halo, saya mau bertanya tentang tarif pengiriman...");
    Swal.fire({
      html: `
      <br>  
        <p>Untuk Tarif Pengiriman ${layanan}, Dapat Menghubungi Kami Melalui Telpon Atau Whatsapp Ke Nomor Berikut :</p>
        <br>
        <button class="swal2-confirm swal2-styled" style="background-color: #25D366;" onclick="window.open('https://api.whatsapp.com/send?phone=6281232951016&text=Halo%2C%20saya%20mau%20bertanya%20tentang%20tarif%20pengiriman...', '_blank')">0812-3295-1016</button>
        <button class="swal2-confirm swal2-styled" style="background-color: #25D366;" onclick="window.open('https://api.whatsapp.com/send?phone=6281216678852&text=Halo%2C%20saya%20mau%20bertanya%20tentang%20tarif%20pengiriman...', '_blank')">0812-1667-8852</button>
      `,
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  useEffect(() => {
    asal === "" ? setAsalVerified(false) : setAsalVerified(true);
    tujuan === "" ? setTujuanVerified(false) : setTujuanVerified(true);
    layanan === "" ? setLayananVerified(false) : setLayananVerified(true);
    // setButtonClicked(false)
  }, [asal, tujuan, layanan]);

  return (
    <>
      {/* Form Cek Ongkir */}
      <div
        id="cekongkir"
        className="max-w-full mx-auto bg-biru-muda-jkl p-8 md:pt-0 md:pb-8 shadow-md font-montserrat text-sm"
      >
        <form className="space-y-4 items-center justify-center md:flex md:items-start md:space-x-4">
          {/* Asal */}
          <div className="relative w-full mt-4">
            <label htmlFor="layanan" className="block text-sm font-medium text-gray-200">
              Asal
            </label>
            <div className="relative mt-1">
              <SelectAsal onChange={asalChangeHandler} onClear={asalClearHandler} />
            </div>
            <div
              className={`text-xs text-red-500 bg-red-100 p-2 rounded-md ${
                buttonClicked && !asalVerified ? "block" : "hidden"
              }`}
            >
              *Tidak Boleh Kosong...
            </div>
          </div>

          {/* Tujuan */}
          <div className="relative w-full mt-4">
            <label htmlFor="layanan" className="block text-sm font-medium text-gray-200">
              Tujuan
            </label>
            <div className="relative mt-1">
              <SelectTujuan onChange={tujuanChangeHandler} onClear={tujuanClearHandler} />
            </div>
            <div
              className={`text-xs text-red-500 bg-red-100 p-2 rounded-md ${
                buttonClicked && !tujuanVerified ? "block" : "hidden"
              }`}
            >
              *Tidak Boleh Kosong...
            </div>
          </div>

          {/* Layanan */}
          <div className="relative w-full">
            <label htmlFor="layanan" className="block text-sm font-medium text-gray-200">
              Layanan
            </label>
            <div className="relative mt-1">
              <select
                id="layanan"
                name="layanan"
                onChange={layananChangeHandler}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-biru-muda-jkl focus:border-biru-muda-jkl sm:text-sm"
              >
                <option value="">Silahkan Pilih Layanan</option>
                <option>Cargo Retail</option>
                <option>Trucking On Call</option>
                <option>Trucking Dedicated</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ShoppingCartIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div
              className={`text-xs text-red-500 bg-red-100 p-2 rounded-md ${
                buttonClicked && !layananVerified ? "block" : "hidden"
              }`}
            >
              *Tidak Boleh Kosong...
            </div>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 mt-6 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-biru-muda-jkl disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              style={{ whiteSpace: "nowrap" }}
              disabled={buttonClicked && (!asalVerified || !tujuanVerified || !layananVerified)}
            >
              Cek Tarif
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CekTarif;
