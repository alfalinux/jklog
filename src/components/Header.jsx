import heroImage from "../assets/hero-image-2.png";

function Header() {
  return (
    <div
      id="beranda"
      className="relative bg-cover bg-bottom bg-no-repeat h-96"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-white p-6 space-y-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
          <span className="block">Tercepat Dalam Pengiriman</span>
          <span className="block">Terbaik Dalam Pelayanan</span>
        </h1>
        <h2 className="text-xs md:text-sm text-center max-w-xs md:max-w-md">
          Dengan Layanan Terluas dan Terintegrasi Secara Inovatif, Kolaboratif & Kompetitif, Kami Siap
          Memperlancar Bisnis Anda
        </h2>
        <button className="mx-auto w-32 md:w-36 bg-biru-muda-jkl hover:bg-biru-tua-jkl text-white text-xs md:text-sm font-bold py-2 px-4 rounded">
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}

export default Header;
