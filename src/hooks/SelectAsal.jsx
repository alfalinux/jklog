import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

// Dummy data for demonstration

const data = [{ id: 78, kota: "Surabaya", ongkir: 1000, minimum: 30, sla: "1-2" }];

function SelectAsal({ onChange, onClear }) {
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

  const handleOnClear = () => {
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
            placeholder="Silahkan Pilih Kota Asal"
            fuseOptions={{ keys: ["kota"] }} // Search on both fields
            resultStringKeyName="kota" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={true}
            autoFocus
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

export default SelectAsal;
