import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";
import { economyAPI } from "../../../services/api";

function MotorVehicleRepairJobs({ Highcharts }) {
  const [years, setYears] = useState([]);
  const [
    numOfMotorVehicleRepairJobs,
    setNumOfMotorVehicleRepairJobs,
  ] = useState([]);

  const getConstructionJobs = async () => {
    try {
      const { data } = await economyAPI.get(
        "/t6p1?select=B3,E8,V8&V8=eq.RECIFE",
        {}
      );

      setYears(data.map((d) => d.B3).reverse());
      setNumOfMotorVehicleRepairJobs(data.map((d) => d.E8).reverse());
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert("Ocorreu um erro ao buscar os items");
    }
  };
  useEffect(() => {
    getConstructionJobs();
  }, []);

  const constructionJobsOptions = {
    title: {
      text:
        "Evolução do número de emprego no Comércio, Reparação de Veículos automotores",
    },
    subtitle: {
      text: "Fonte: IBGE",
    },
    chart: {
      zoomType: "x",
    },
    yAxis: {
      title: {
        text: "Empregos",
      },
    },
    xAxis: {
      categories: years,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    series: [
      {
        name: "Recife",
        data: numOfMotorVehicleRepairJobs,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={constructionJobsOptions}
    />
  );
}

export default MotorVehicleRepairJobs;

MotorVehicleRepairJobs.propTypes = {
  Highcharts: PropTypes.node.isRequired,
};
