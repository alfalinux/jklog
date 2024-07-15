import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const data = [
  { id: 1, kota: "Jakarta Pusat", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 2, kota: "Jakarta Timur", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 3, kota: "Jakarta Barat", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 4, kota: "Jakarta Selatan", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 5, kota: "Jakarta Utara", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 6, kota: "Bogor (Kota)", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 7, kota: "Cibinong (Kab. Bogor)", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 8, kota: "Depok", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 9, kota: "Bekasi (Kota)", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 10, kota: "Cikarang (Kab. Bekasi)", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 11, kota: "Tangerang (Kota)", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 12, kota: "Tangerang Selatan", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 13, kota: "Tigaraksa (Kab. Tangerang)", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 14, kota: "Bandung (Kota)", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 15, kota: "Cimahi", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 16, kota: "Karawang", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 17, kota: "Purwakarta", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 18, kota: "Soreang (Kab. Bandung)", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 19, kota: "Ngamprah (Kab. Bdg Barat)", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 20, kota: "Sumedang", ongkir: 4300, minimum: 30, sla: "3-4" },
  { id: 21, kota: "Subang", ongkir: 4300, minimum: 30, sla: "3-4" },
  { id: 22, kota: "Cirebon (Kota)", ongkir: 4300, minimum: 30, sla: "3-4" },
  { id: 23, kota: "Sumber (Kab. Cirebon)", ongkir: 4500, minimum: 30, sla: "3-4" },
  { id: 24, kota: "Indramayu", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 25, kota: "Majalengka", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 26, kota: "Kuningan", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 27, kota: "Tasikmalaya (Kota)", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 28, kota: "Garut", ongkir: 5000, minimum: 30, sla: "4-5" },
  { id: 29, kota: "Ciamis", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 30, kota: "Cianjur", ongkir: 6500, minimum: 30, sla: "4-5" },
  { id: 31, kota: "Sukabumi (Kota)", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 32, kota: "Pel. Ratu (Kab. Sukabumi)", ongkir: 7500, minimum: 30, sla: "4-5" },
  { id: 33, kota: "Semarang (Kota)", ongkir: 2800, minimum: 30, sla: "2-3" },
  { id: 34, kota: "Ungaran (Kab. Semarang)", ongkir: 3000, minimum: 30, sla: "2-3" },
  { id: 35, kota: "Kendal", ongkir: 3100, minimum: 30, sla: "2-3" },
  { id: 36, kota: "Salatiga", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 37, kota: "Solo/Surakarta", ongkir: 3300, minimum: 30, sla: "2-3" },
  { id: 38, kota: "Boyolali", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 39, kota: "Sukoharjo", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 40, kota: "Karang Anyar", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 41, kota: "Sragen", ongkir: 3700, minimum: 30, sla: "3-4" },
  { id: 42, kota: "Klaten", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 43, kota: "Magelang (Kota)", ongkir: 3500, minimum: 30, sla: "3-4" },
  { id: 44, kota: "Temanggung", ongkir: 3700, minimum: 30, sla: "2-3" },
  { id: 45, kota: "Wonosobo", ongkir: 3700, minimum: 30, sla: "3-4" },
  { id: 46, kota: "Yogyakarta", ongkir: 3300, minimum: 30, sla: "2-3" },
  { id: 47, kota: "Bantul", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 48, kota: "Sleman", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 49, kota: "Kudus", ongkir: 3300, minimum: 30, sla: "2-3" },
  { id: 50, kota: "Demak", ongkir: 3300, minimum: 30, sla: "2-3" },
  { id: 51, kota: "Jepara", ongkir: 3500, minimum: 30, sla: "3-4" },
  { id: 52, kota: "Purwodadi", ongkir: 3700, minimum: 30, sla: "3-4" },
  { id: 53, kota: "Blora", ongkir: 3700, minimum: 30, sla: "3-4" },
  { id: 54, kota: "Pekalongan (Kota)", ongkir: 5000, minimum: 30, sla: "3-4" },
  { id: 55, kota: "Batang", ongkir: 5000, minimum: 30, sla: "3-4" },
  { id: 56, kota: "Pemalang", ongkir: 5000, minimum: 30, sla: "3-4" },
  { id: 57, kota: "Tegal (Kota)", ongkir: 5000, minimum: 30, sla: "3-4" },
  { id: 58, kota: "Slawi (Kab. Tegal)", ongkir: 5000, minimum: 30, sla: "3-4" },
  { id: 59, kota: "Brebes", ongkir: 5000, minimum: 30, sla: "3-4" },
  { id: 60, kota: "Purwokerto (Kab. Banyumas)", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 61, kota: "Purbalingga", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 62, kota: "Banjarnegara", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 63, kota: "Kebumen", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 64, kota: "Cilacap", ongkir: 5500, minimum: 30, sla: "4-5" },
  { id: 65, kota: "Makassar", ongkir: 5000, minimum: 50, sla: "4-5" },
  { id: 66, kota: "Bone", ongkir: 7000, minimum: 50, sla: "6-7" },
  { id: 67, kota: "Maros", ongkir: 6500, minimum: 50, sla: "5-6" },
  { id: 68, kota: "Palu", ongkir: 7500, minimum: 50, sla: "7-8" },
  { id: 69, kota: "Gorontalo", ongkir: 8500, minimum: 50, sla: "9-10" },
  { id: 70, kota: "Kendari", ongkir: 8500, minimum: 50, sla: "9-10" },
  { id: 71, kota: "Manado", ongkir: 8500, minimum: 50, sla: "9-10" },
  { id: 72, kota: "Sorong", ongkir: 11500, minimum: 100, sla: "11-12" },
  { id: 73, kota: "Manokwari", ongkir: 12500, minimum: 100, sla: "11-12" },
  { id: 74, kota: "Jayapura", ongkir: 12500, minimum: 100, sla: "11-12" },
  { id: 75, kota: "Biak", ongkir: 12500, minimum: 100, sla: "11-12" },
  { id: 76, kota: "Timika", ongkir: 12500, minimum: 100, sla: "11-12" },
  { id: 77, kota: "Merauke", ongkir: 12500, minimum: 100, sla: "11-12" },
  { id: 78, kota: "Surabaya", ongkir: 1000, minimum: 30, sla: "1-2" },
  { id: 79, kota: "Sidoarjo", ongkir: 1000, minimum: 30, sla: "1-2" },
  { id: 80, kota: "Gresik", ongkir: 1500, minimum: 30, sla: "1-2" },
  { id: 81, kota: "Malang (Kota)", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 82, kota: "Pandaan", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 83, kota: "Kepanjen (Kab. Malang)", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 84, kota: "Batu", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 85, kota: "Lamongan", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 86, kota: "Mojokerto (Kota)", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 87, kota: "Mojosari (Kab. Mojokerto)", ongkir: 2500, minimum: 30, sla: "2-3" },
  { id: 88, kota: "Kediri (Kota)", ongkir: 2500, minimum: 30, sla: "2-3" },
  { id: 89, kota: "Pare (Kab. Kediri)", ongkir: 2500, minimum: 30, sla: "2-3" },
  { id: 90, kota: "Pasuruan (Kota)", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 91, kota: "Bangil (Kab. Pasuruan)", ongkir: 2000, minimum: 30, sla: "2-3" },
  { id: 92, kota: "Probolinggo (Kota)", ongkir: 2500, minimum: 30, sla: "2-3" },
  { id: 93, kota: "Jember", ongkir: 3000, minimum: 30, sla: "3-4" },
  { id: 94, kota: "Lumajang", ongkir: 2500, minimum: 30, sla: "3-4" },
  { id: 95, kota: "Banyuwangi", ongkir: 3500, minimum: 30, sla: "3-4" },
  { id: 96, kota: "Tuban", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 97, kota: "Bojonegoro", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 98, kota: "Jombang", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 99, kota: "Kertosono", ongkir: 3500, minimum: 30, sla: "3-4" },
  { id: 100, kota: "Nganjuk", ongkir: 3500, minimum: 30, sla: "3-4" },
  { id: 101, kota: "Tulungagung", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 102, kota: "Blitar (Kota)", ongkir: 3500, minimum: 30, sla: "2-3" },
  { id: 103, kota: "Trenggalek", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 104, kota: "Madiun (Kota)", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 105, kota: "Caruban (Kab. Madiun)", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 106, kota: "Magetan", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 107, kota: "Ngawi", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 108, kota: "Ponorogo", ongkir: 4000, minimum: 30, sla: "3-4" },
  { id: 109, kota: "Pacitan", ongkir: 5000, minimum: 30, sla: "4-5" },
  { id: 110, kota: "Bangkalan", ongkir: 4000, minimum: 30, sla: "2-3" },
  { id: 111, kota: "Banjarmasin", ongkir: 5000, minimum: 50, sla: "4-5" },
  { id: 112, kota: "Banjarbaru", ongkir: 6000, minimum: 50, sla: "4-5" },
  { id: 113, kota: "Balikpapan", ongkir: 5000, minimum: 50, sla: "4-5" },
  { id: 114, kota: "Samarinda", ongkir: 6000, minimum: 50, sla: "5-6" },
  { id: 115, kota: "Sangata", ongkir: 7000, minimum: 50, sla: "8-10" },
  { id: 116, kota: "Tanah Grogot", ongkir: 9000, minimum: 50, sla: "8-10" },
  { id: 117, kota: "Palangkaraya", ongkir: 7500, minimum: 50, sla: "4-5" },
  { id: 118, kota: "Sampit", ongkir: 7500, minimum: 50, sla: "4-5" },
  { id: 119, kota: "Pangkalan Bun", ongkir: 7000, minimum: 50, sla: "4-5" },
  { id: 120, kota: "Pontianak", ongkir: 7500, minimum: 50, sla: "6-7" },
  { id: 121, kota: "Sintang", ongkir: 10500, minimum: 50, sla: "5-6" },
  { id: 122, kota: "Ketapang", ongkir: 11500, minimum: 50, sla: "7-8" },
  { id: 123, kota: "Berau", ongkir: 10000, minimum: 50, sla: "10-11" },
  { id: 124, kota: "Tarakan", ongkir: 7500, minimum: 50, sla: "12-13" },
  { id: 125, kota: "Singkawang", ongkir: 11500, minimum: 50, sla: "5-6" },
  { id: 126, kota: "Bandar Lampung", ongkir: 7000, minimum: 50, sla: "6-7" },
  { id: 127, kota: "Palembang", ongkir: 8000, minimum: 50, sla: "7-8" },
  { id: 128, kota: "Jambi", ongkir: 8500, minimum: 50, sla: "7-8" },
  { id: 129, kota: "Bengkulu", ongkir: 10000, minimum: 50, sla: "9-10" },
  { id: 130, kota: "Pekanbaru", ongkir: 9500, minimum: 50, sla: "8-9" },
  { id: 131, kota: "Padang", ongkir: 10100, minimum: 50, sla: "9-10" },
  { id: 132, kota: "Medan", ongkir: 9500, minimum: 50, sla: "9-10" },
  { id: 133, kota: "Bangka/Pangkal Pinang", ongkir: 12200, minimum: 50, sla: "10-11" },
  { id: 134, kota: "Banda Aceh", ongkir: 14000, minimum: 50, sla: "11-12" },
  { id: 135, kota: "Belawan", ongkir: 13300, minimum: 50, sla: "6-7" },
  { id: 136, kota: "Rantau Prapat", ongkir: 15500, minimum: 50, sla: "7-8" },
  { id: 137, kota: "Batam", ongkir: 14500, minimum: 50, sla: "13-14" },
  { id: 138, kota: "Tanjung Pinang", ongkir: 16500, minimum: 50, sla: "10-11" },
  { id: 139, kota: "Ambon", ongkir: 10000, minimum: 50, sla: "11-12" },
  { id: 140, kota: "Ternate", ongkir: 15500, minimum: 50, sla: "11-12" },
  { id: 141, kota: "Denpasar", ongkir: 4500, minimum: 50, sla: "2-3" },
  { id: 142, kota: "Mataram", ongkir: 6400, minimum: 50, sla: "5-6" },
  { id: 143, kota: "Bima", ongkir: 8500, minimum: 100, sla: "5-6" },
  { id: 144, kota: "Kupang", ongkir: 7000, minimum: 100, sla: "11-12" },
  { id: 145, kota: "Maumere", ongkir: 8500, minimum: 100, sla: "11-12" },
  { id: 146, kota: "Ende", ongkir: 8500, minimum: 100, sla: "11-12" },
  { id: 147, kota: "Larantuka", ongkir: 13000, minimum: 100, sla: "8-10" },
  { id: 148, kota: "Atambua", ongkir: 10500, minimum: 100, sla: "10-11" },
  { id: 149, kota: "Alor", ongkir: 13500, minimum: 100, sla: "13-14" },
  { id: 150, kota: "Labuan Bajo", ongkir: 9500, minimum: 100, sla: "5-6" },
  { id: 151, kota: "Ruteng", ongkir: 9500, minimum: 100, sla: "5-6" },
  { id: 152, kota: "Dompu", ongkir: 10200, minimum: 100, sla: "5-6" },
  { id: 153, kota: "Sumbawa Besar", ongkir: 8000, minimum: 100, sla: "5-6" },
  { id: 154, kota: "Lembata", ongkir: 13500, minimum: 100, sla: "13-14" },
];

function SelectTujuan({ onChange, onClear }) {
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  };

  const handleOnSelect = (item) => {
    // the item selected
    // console.log(item)
    onChange(item);
  };

  const handleOnFocus = () => {
    // console.log('Focused')
  };

  const handleOnClear = (item) => {
    onClear();
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.kota}</span>
      </>
    );
  };

  return (
    <div className="w-full">
      <header className="">
        <div className="">
          <ReactSearchAutocomplete
            items={data}
            placeholder="Silahkan Pilih Kota Tujuan"
            fuseOptions={{ keys: ["kota"] }} // Search on both fields
            resultStringKeyName="kota" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={true}
            formatResult={formatResult}
            styling={{
              height: "36px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightblue",
              hoverColor: "white",
              color: "black",
              fontSize: "15px",
              fontFamily: "Montserrat",
              iconColor: "grey",
              lineColor: "lightblue",
              placeholderColor: "lightgray",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default SelectTujuan;
