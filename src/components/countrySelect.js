import React from "react";

function CountrySelect({ selectedValue, setValue, setCountry, exchangeData }) {

  const handleTypeSelect = (e) => {
    setValue(e.target.value);
    const searchObject =
      e.target.value !== "none"
        ? exchangeData.find((country) => country.country === e.target.value)
        : "none";
    setCountry(searchObject);
  };

  return (
    <div className="">
      <div className="form-control w-full max-w-xs">
        <select
          className="select select-bordered  text-lg animate-pulse-blackred "
          onChange={handleTypeSelect}
          value={selectedValue}
        >
          <option value={"none"} className="">
            Choisissez le pays que vous voulez
          </option>
          {exchangeData?.map((option) => (
            <option key={option.id} value={option.country}>
              {option.country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountrySelect;
