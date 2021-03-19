import { injectIntl } from "react-intl";
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Layout from "../components/Layout";
import useLayout from "../contexts/layout";
import covidAPI from "../Services/api";

const CovidPage = () => {
  const { collapseSideBar } = useLayout();
  const [analise11, setAnalise11] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      try {
        const { data } = await covidAPI.get("/analises2", {
          params: { municipio: "eq.Recife", order: "Data.asc" },
        });

        setAnalise11(
          data.map((d) => {
            if (d.Óbitos === null) {
              d.Óbitos = 0;
              return d.Óbitos;
            }
            return d.Óbitos;
          })
        );
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    };
    getItems();
  }, []);

  useEffect(() => {
    setTimeout(() => Highcharts.charts[0].reflow(), 300);
    setTimeout(() => Highcharts.charts[1].reflow(), 300);
  }, [collapseSideBar]);

  const a11Options = {
    title: { text: "Analise 11" },
    subtitle: {
      text: "Source: thesolarfoundation.com",
    },
    chart: {
      zoomType: "x",
    },
    yAxis: {
      title: {
        text: "Número de óbitos",
      },
    },
    xAxis: {
      type: "datetime",
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
        pointStart: Date.UTC(2020, 2, 28),
        pointIntervalUnit: "day",
      },
    },
    series: [
      {
        name: "Recife",
        data: analise11,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <Layout>
      <div
        style={{ background: "#FEEC47" }}
        className="w-100 mx-4 mb-4 p-4 rounded"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 md:gap-8">
          <div className="text-black-50 col-span-1 sm:col-span-3 md:col-span-4 xl:col-span-3 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
            <HighchartsReact highcharts={Highcharts} options={a11Options} />
          </div>
          <div className="text-black-50 col-span-1 md:col-span-4 xl:col-span-3 row-span-2 bg-white rounded-lg shadow-xl h-100">
            <HighchartsReact highcharts={Highcharts} options={a11Options} />
          </div>
          <div className="bg-white rounded-lg md:col-span-2 shadow-xl h-48">
            1
          </div>
          <div className="bg-white rounded-lg md:col-span-2 shadow-xl h-48">
            1
          </div>
          <div className="bg-white rounded-lg md:col-span-2 shadow-xl h-48">
            1
          </div>
          <div className="bg-white rounded-lg md:col-span-2 shadow-xl h-48">
            1
          </div>
          <div className="bg-white rounded-lg md:col-span-2 shadow-xl h-48">
            1
          </div>
          <div className="bg-white rounded-lg md:col-span-2 shadow-xl h-48">
            1
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default injectIntl(CovidPage);
