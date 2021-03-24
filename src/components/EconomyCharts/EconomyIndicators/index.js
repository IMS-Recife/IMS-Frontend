import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { economyAPI } from "../../../Services/api";

function EconomyIndicators() {
  const [PIBPerCapta2018, setPIBPerCapta2018] = useState();
  const [IDHM, setIDHM] = useState();
  const [totalRevenue2017, setTotalRevenue2017] = useState();
  const [
    totalExpendituresCommitted,
    setTotalExpendituresCommitted,
  ] = useState();

  const getWorkAndIncomeIndicators = async () => {
    try {
      const { data } = await economyAPI.get(
        "/panoramaRecife?Categoria=eq.Economia",
        {}
      );

      setPIBPerCapta2018(data[0]);
      setIDHM(data[1]);
      setTotalRevenue2017(data[2]);
      setTotalExpendituresCommitted(data[3]);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  };
  useEffect(() => {
    getWorkAndIncomeIndicators();
  }, []);

  return (
    <>
      <div className="bg-green-600 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {PIBPerCapta2018 ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">
              {PIBPerCapta2018.Indicador}
            </h2>
            <h5 className="text-start ml-4 mt-4">{PIBPerCapta2018.Valor}</h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
      <div className="bg-green-600 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {IDHM ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">{IDHM.Indicador}</h2>
            <h5 className="text-start ml-4 mt-4">{IDHM.Valor}</h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
      <div className="bg-green-600 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {totalRevenue2017 ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">
              {totalRevenue2017.Indicador}
            </h2>
            <h5 className="text-start ml-4 mt-4">{totalRevenue2017.Valor}</h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
      <div className="bg-green-600 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {totalExpendituresCommitted ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">
              {totalExpendituresCommitted.Indicador}
            </h2>
            <h5 className="text-start ml-4 mt-4">
              {totalExpendituresCommitted.Valor}
            </h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
    </>
  );
}

export default EconomyIndicators;
