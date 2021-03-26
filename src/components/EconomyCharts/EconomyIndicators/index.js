import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import { economyAPI } from "../../../Services/api";

const Card = styled.div`
  background: #f7f7f7;
`;

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
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {PIBPerCapta2018 ? (
          <>
            <div className="text-xl text-gray-400">
              {PIBPerCapta2018.Indicador}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {PIBPerCapta2018.Valor}
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {IDHM ? (
          <>
            <div className="text-xl text-gray-400">{IDHM.Indicador}</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {IDHM.Valor}
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {totalRevenue2017 ? (
          <>
            <div className="text-xl text-gray-400">
              {totalRevenue2017.Indicador}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {totalRevenue2017.Valor}
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {totalExpendituresCommitted ? (
          <>
            <div className="text-xl text-gray-400">
              {totalExpendituresCommitted.Indicador}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {totalExpendituresCommitted.Valor}
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Card>
    </>
  );
}

export default EconomyIndicators;
