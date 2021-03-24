import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { economyAPI } from "../../../Services/api";
import useLayout from "../../../contexts/layout";

function PIBPerCapta() {
  const { collapseSideBar } = useLayout();
  const [pibPerCaptaYear, setPibPerCaptaYear] = useState([]);
  const [pibPerCaptaValue, setPibPerCaptaValue] = useState([]);

  const getPibPerCapta = async () => {
    try {
      const { data } = await economyAPI.get(
        "/t1p1?V5=eq.PE&V8=eq.Recife&select=V1,V42",
        {}
      );

      setPibPerCaptaYear(data.map((d) => d.V1));
      setPibPerCaptaValue(data.map((d) => d.V42));
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  };
  useEffect(() => {
    getPibPerCapta();
  }, []);

  useEffect(() => {
    setTimeout(() => Highcharts.charts[0].reflow(), 300);
  }, [collapseSideBar]);

  const PibPerCaptaOptions = {
    title: {
      text: "Produto Interno Bruto per capita, a preços correntes (R$ 1,00)",
    },
    subtitle: {
      text: "Source: thesolarfoundation.com",
    },
    chart: {
      zoomType: "x",
    },
    yAxis: {
      title: {
        text: "PIB per capta",
      },
    },
    xAxis: {
      categories: pibPerCaptaYear,
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
        data: pibPerCaptaValue,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={PibPerCaptaOptions} />
  );
}

export default PIBPerCapta;
