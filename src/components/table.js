import React from "react";
import FlagCoded from "./flagCoded";
import ExchangeTableRow from "./exchangeTableRow";

export default function Table({ exchangeData, type, selectedCountry, toggle }) {
  // console.log(selectedCountry);

  return (
    <table className="mt-5 lg:w-[30vw] w-min">
      <thead className="">
        <tr>
          <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3 rounded-tl-lg">
            Pays
          </th>
          <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3">
            {type === "sell" ? "PARS EXCHANGE VEND" : "PARS EXCHANGE ACHETE"}
          </th>
          <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3 rounded-tr-lg">
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
      <tfoot onClick={toggle}>
        <tr className="bg-primary hover:bg-primary-focus text-primary-content">
          <td></td>
          <td className="flex justify-end ">show all currencies</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}
