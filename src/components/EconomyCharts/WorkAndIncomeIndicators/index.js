import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import { economyAPI } from "../../../services/api";

const Card = styled.div`
  background: #f7f7f7;
`;

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
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {workersAverageMonthlyWages ? (
          <>
            <div className="text-xl text-gray-400">
              {workersAverageMonthlyWages.Indicador}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {workersAverageMonthlyWages.Valor}
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {busyPeople ? (
          <>
            <div className="text-xl text-gray-400">{busyPeople.Indicador}</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {busyPeople.Valor}
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {percentageEmployedPopulation ? (
          <>
            <div className="text-xl text-gray-400">
              {percentageEmployedPopulation.Indicador}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {percentageEmployedPopulation.Valor}
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" variant="light" />
        )}
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10 p-5">
        {populationUpToHalfPerCaptaWage ? (
          <>
            <div className="text-xl text-gray-400">
              {populationUpToHalfPerCaptaWage.Indicador}
            </div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {populationUpToHalfPerCaptaWage.Valor}
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

export default WorkAndIncomeIndicators;
