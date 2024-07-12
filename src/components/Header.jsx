import heroImage from "../assets/hero-image-1.png";

function Header() {
  return (
    <div
      id="beranda"
      className="relative bg-cover bg-bottom bg-no-repeat h-96"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto flex flex-col items-start justify-center h-full text-white p-6 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left">
          <span className="block">
            Tercepat Dalam <span className="text-biru-muda-jkl">Pengiriman</span>
          </span>
          <span className="block">
            <span className="text-biru-muda-jkl">Terbaik</span> Dalam Pelayanan
          </span>
        </h1>
        <h2 className="text-xs md:text-sm text-left max-w-xs md:max-w-md">
          Dengan Layanan Terluas dan Terintegrasi Secara Inovatif, Kolaboratif & Kompetitif, Kami Siap
          Memperlancar Bisnis Anda
        </h2>
        <button
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=6281232951016&text=Halo%2C%20saya%20mau%20bertanya%20tentang%20tarif%20pengiriman...",
              "_blank"
            );
          }}
          className="w-32 md:w-36 bg-biru-muda-jkl hover:bg-biru-tua-jkl text-white text-xs md:text-sm font-bold py-2 px-4 rounded"
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}

export default Header;
