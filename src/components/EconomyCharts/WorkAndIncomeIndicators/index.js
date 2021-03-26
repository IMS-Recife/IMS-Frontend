import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import { economyAPI } from "../../../Services/api";

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
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10">
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
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10">
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
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10">
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
      </Card>
      <Card className="rounded-lg md:col-span-4 shadow-xl h-48 z-10">
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
      </Card>
    </>
  );
}

export default WorkAndIncomeIndicators;
