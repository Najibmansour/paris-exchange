import React from "react";
import FlagCoded from "./flagCoded";
import ExchangeTableRow from "./exchangeTableRow";

export default function Table({ exchangeData, type, selectedCountry }) {
  console.log(selectedCountry);

  return (
    <table className="mt-5">
      <thead className="">
        <tr>
          <th className="bg-neutral lg:text-sm text-xs text-neutral-content px-6 py-3 rounded-tl-lg">
            Pays
          </th>
          <th className="bg-neutral lg:text-sm text-xs text-neutral-content px-6 py-3">
            {type === "sell" ? "PARS EXCHANGE VEND" : "PARS EXCHANGE ACHETE"}
          </th>
          <th className="bg-neutral lg:text-sm text-xs text-neutral-content px-6 py-3 rounded-tr-lg">
            {type === "sell" ? "PE VEND" : "PE ACHETE"}
          </th>
        </tr>
      </thead>
      <tbody>
        {selectedCountry ? (
          <ExchangeTableRow
            key={0}
            index={0}
            code={selectedCountry.countryIso2}
            currency={selectedCountry.iso}
            name={selectedCountry.country}
            Rate={
              type == "sell"
                ? selectedCountry.webSellRate
                : selectedCountry.webBuyRate
            }
            type={type}
          ></ExchangeTableRow>
        ) : (
          exchangeData.map((country, i) => (
            <ExchangeTableRow
              key={i}
              index={i}
              code={country.countryIso2}
              currency={country.iso}
              name={country.country}
              Rate={type == "sell" ? country.webSellRate : country.webBuyRate}
              type={type}
            ></ExchangeTableRow>
          ))
        )}
        {}
      </tbody>
    </table>
  );
}