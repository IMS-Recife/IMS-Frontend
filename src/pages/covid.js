import { injectIntl } from "react-intl";
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import styled from "styled-components";
import Layout from "../components/Layout";
import useLayout from "../contexts/layout";
import { covidAPI } from "../Services/api";

const Card = styled.div`
  background: #f7f7f7;
`;

const CovidPage = () => {
  const { collapseSideBar } = useLayout();
  const [analise11, setAnalise11] = useState([]);
  const [stable, setStable] = useState([]);
  const [weekCat, setWeekCat] = useState([]);
  const [subnot, setSubnot] = useState([]);
  const [completeWeek, setCompleteWeek] = useState([]);
  const [incompleteWeek, setIncompleteWeek] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const [mm7, setMM7] = useState([]);
  const [panelData, setPanelData] = useState({});

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
      let res = await covidAPI.get("/analises18");
      const weeks = res.data.map((s) => s.week);
      setWeekCat(weeks);

      setSubnot(
        res.data
          .filter((s) => s.cor !== "Estável")
          .map((s) => ({
            pointWidth: 15,
            y: s.new_deaths,
            x: weekCat.lastIndexOf(s.week),
            start: s["Início"],
            end: s["Término"],
            color: "#fc8d62",
          }))
      );

      setStable(
        res.data
          .filter((s) => s.cor === "Estável")
          .map((s) => ({
            pointWidth: 15,
            y: s.new_deaths,
            start: s["Início"],
            end: s["Término"],
            color: "#66c1a5",
          }))
      );
      res = await covidAPI.get("/analises17");
      setIncompleteWeek(
        res.data
          .filter((s) => s.cor !== "Semana Completa")
          .map((s) => ({
            pointWidth: 15,
            y: s.new_notifications,
            x: weekCat.lastIndexOf(s.week),
            start: s["Início"],
            end: s["Término"],
          }))
      );
      setCompleteWeek(
        res.data
          .filter((s) => s.cor === "Semana Completa")
          .map((s) => ({
            pointWidth: 15,
            y: s.new_notifications,
            start: s["Início"],
            end: s["Término"],
          }))
      );
      res = await covidAPI.get("/painel");
      setPanelData(res.data[0]);
      res = await covidAPI.get("/analises16");
      setConfirmed(res.data.map((d) => d.confirmados));
      setMM7(res.data.map((d) => d.mm7));
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    Highcharts.charts.forEach((c) => {
      if (c !== undefined) {
        setTimeout(() => c.reflow(), 300);
      }
    });
  }, [collapseSideBar]);

  const a11Options = {
    title: {
      text:
        "Óbitos diários por COVID19 nas capitais (média móvel de 7 dias, por número de dias desde a terceira morte",
    },
    subtitle: {
      text: "Fonte: Minstério da Saúde",
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
  const ceOptions = {
    title: {
      text: "Curvas Epidemiológicas: óbitos por semana epidemiológica",
    },
    subtitle: {
      text: "Fonte: CIEVS/Recife",
    },
    chart: {
      type: "column",
      zoomType: "x",
    },
    tooltip: {
      headerFormat: "<table>",
      pointFormat:
        '<tr><td style="color: {series.color}">Óbitos: </td>' +
        '<td style="text-align: right"><b>{point.y}</b></td></tr>' +
        '<tr><td style="color: {series.color}">Ínicio: </td>' +
        '<td style="text-align: right"><b>{point.start}</b></td></tr>',
      footerFormat: "</table>",
    },
    yAxis: {
      title: {
        text: "Número de óbitos",
      },
    },
    xAxis: {
      title: {
        text: "Semana Epidemiológica",
      },
      categories: weekCat,
    },
    series: [
      { name: "Estável", color: "#66c1a5", data: stable },
      {
        name: "Possivél subnotificado",
        color: "#fc8d62",
        data: subnot,
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const cenOptions = {
    title: {
      text: "Curvas Epidemiológicas: Notificações SRAG",
    },
    subtitle: {
      text: "Fonte: CIEVS/Recife",
    },
    chart: {
      type: "column",
      zoomType: "x",
    },
    tooltip: {
      headerFormat: "<table>",
      pointFormat:
        '<tr><td style="color: {series.color}">Óbitos: </td>' +
        '<td style="text-align: right"><b>{point.y}</b></td></tr>' +
        '<tr><td style="color: {series.color}">Ínicio: </td>' +
        '<td style="text-align: right"><b>{point.start}</b></td></tr>',
      footerFormat: "</table>",
    },
    yAxis: {
      title: {
        text: "Notificações SRAG",
      },
    },
    xAxis: {
      title: {
        text: "Semana Epidemiológica",
      },
      categories: weekCat,
    },
    series: [
      { name: "Semana Completa", color: "#66c1a5", data: completeWeek },
      {
        name: "Semana Incompleta",
        color: "#8ca0cb",
        data: incompleteWeek,
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const newCasesOptions = {
    title: {
      text: "Curvas Epidemiológicas (Casos novos nas últimas 24h)",
    },
    subtitle: {
      text: "Fonte: CIEVS/Recife",
    },
    chart: {
      zoomType: "x",
    },
    yAxis: {
      title: {
        text: "Casos Novos nas últimas 24h",
      },
    },
    xAxis: {
      title: {
        text: "Data",
      },
      type: "datetime",
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: Date.UTC(2020, 4, 1),
        pointIntervalUnit: "day",
      },
    },
    series: [
      { name: "Recife", color: "#66c1a5", data: confirmed, type: "column" },
      {
        name: "Média móvel (7 dias)",
        color: "#8ca0cb",
        data: mm7,
        type: "spline",
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <Layout>
      <div
        style={{ border: "1px solid #f7f7f7" }}
        className="bg-white rounded-lg h-100 w-100 m-4 p-10"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Total de casos</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData["Total.Confirmados"]?.toLocaleString("pt-BR")}
              </div>
            </div>
          </Card>
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Casos nas últimas 24h</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData["Confirmados.nas.últimas.24h"]?.toLocaleString(
                  "pt-BR"
                )}
              </div>
            </div>
          </Card>
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Total de mortes</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData["Total.de.Mortes"]?.toLocaleString("pt-BR")}
              </div>
            </div>
          </Card>
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Mortes nas últimas 24h</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData["Óbitos.nas.últimas.24h"]?.toLocaleString("pt-BR")}
              </div>
            </div>
          </Card>
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Casos em investigação</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData["Em.investigação"]?.toLocaleString("pt-BR")}
              </div>
            </div>
          </Card>
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Recifenses em UTI</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData["Recifenses.em.UTI"]?.toLocaleString("pt-BR")}
              </div>
            </div>
          </Card>
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Hospitalizados</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData.Hospitalizados?.toLocaleString("pt-BR")}
              </div>
            </div>
          </Card>
          <Card className="rounded-lg shadow-xl p-5">
            <div className="text-xl text-gray-400">Casos recuperados</div>
            <div className="flex items-center pt-1">
              <div className="text-4xl font-bold text-gray-900 ">
                {panelData["Total.de.Recuperados"]?.toLocaleString("pt-BR")}
              </div>
            </div>
          </Card>
          <div className="text-black-50 col-span-2 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
            <HighchartsReact highcharts={Highcharts} options={a11Options} />
          </div>
          <div className="text-black-50 col-span-2 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
            <HighchartsReact highcharts={Highcharts} options={ceOptions} />
          </div>
          <div className="text-black-50 col-span-2 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
            <HighchartsReact highcharts={Highcharts} options={cenOptions} />
          </div>
          <div className="text-black-50 col-span-2 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
            <HighchartsReact
              highcharts={Highcharts}
              options={newCasesOptions}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default injectIntl(CovidPage);
