import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { economyAPI } from "../../../Services/api";

function WorkAndIncomeIndicators() {
  const [
    workersAverageMonthlyWages,
    setWorkersAverageMonthlyWages,
  ] = useState();
  const [busyPeople, setBusyPeople] = useState();
  const [
    percentageEmployedPopulation,
    setPercentageEmployedPopulation,
  ] = useState();
  const [
    populationUpToHalfPerCaptaWage,
    setPopulationUpToHalfPerCaptaWage,
  ] = useState();

  const getWorkAndIncomeIndicators = async () => {
    try {
      const { data } = await economyAPI.get(
        "/panoramaRecife?Categoria=eq.Trabalho%20e%20Rendimento",
        {}
      );

      setWorkersAverageMonthlyWages(data[0]);
      setBusyPeople(data[1]);
      setPercentageEmployedPopulation(data[2]);
      setPopulationUpToHalfPerCaptaWage(data[3]);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  };
  useEffect(() => {
    getWorkAndIncomeIndicators();
  }, []);

  return (
    <>
      <div className="bg-blue-500 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {workersAverageMonthlyWages ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">
              {workersAverageMonthlyWages.Indicador}
            </h2>
            <h5 className="text-start ml-4 mt-4">
              {workersAverageMonthlyWages.Valor}
            </h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
      <div className="bg-blue-500 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {busyPeople ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">
              {busyPeople.Indicador}
            </h2>
            <h5 className="text-start ml-4 mt-4">{busyPeople.Valor}</h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
      <div className="bg-blue-500 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {percentageEmployedPopulation ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">
              {percentageEmployedPopulation.Indicador}
            </h2>
            <h5 className="text-start ml-4 mt-4">
              {percentageEmployedPopulation.Valor}
            </h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
      <div className="bg-blue-500 rounded-lg md:col-span-4 shadow-xl h-48 z-10">
        {populationUpToHalfPerCaptaWage ? (
          <>
            <h2 className="text-start ml-4 mt-4 font-bold">
              {populationUpToHalfPerCaptaWage.Indicador}
            </h2>
            <h5 className="text-start ml-4 mt-4">
              {populationUpToHalfPerCaptaWage.Valor}
            </h5>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </div>
    </>
  );
}

export default WorkAndIncomeIndicators;
