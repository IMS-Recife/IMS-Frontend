import { injectIntl } from "react-intl";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HCExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import covidAPI from "../../Services/api";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
  HCExporting(Highcharts);
  Highcharts.setOptions({
    lang: {
      months: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      weekdays: [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
      ],
      shortMonths: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
  });
}

function Dashboard({ bigCardClassName }) {
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
    <div className={bigCardClassName}>
      <div
        className="card card-responsive p-5 pt-5 mr-sm-0 ml-md-4 m-lg-0"
        style={{
          marginBottom: "40px",
          marginLeft: "0px",
        }}
      >
        <div className="row">
          <div className="card card-custom col-12 m-0 mb-3 col-lg-5 mr-md-2 m-xl-2 ml-xl-5 ">
            <HighchartsReact highcharts={Highcharts} options={a11Options} />
          </div>
          <div className="card card-custom col-12 m-0 mb-3 col-lg-6  m-lg-0 ml-xl-2 mt-xl-2">
            <HighchartsReact highcharts={Highcharts} options={a11Options} />
          </div>
          <div
            className="card card-custom bg-info col-12 m-0 mb-3 col-lg-4 mr-md-2 m-xl-2 ml-xl-5 "
            style={{ height: "300px" }}
          />
          <div
            className="card card-custom bg-success col-12 m-0 mb-3 col-lg-7  m-xl-2"
            style={{ height: "300px" }}
          />
          <div
            className="card card-custom bg-warning col-12 m-0 mb-3 col-lg-4 mr-md-2 m-xl-2 ml-xl-5 mb-xl-4 "
            style={{ height: "300px" }}
          />
          <div
            className="card card-custom bg-danger col-12 m-0 mb-3 col-lg-7  m-xl-2 mb-4"
            style={{ height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default injectIntl(Dashboard);

Dashboard.defaultProps = {
  bigCardClassName: "col-12 col-sm-10 col-md-10 col-lg-8 col-xl-10 ml-0",
};
Dashboard.propTypes = {
  bigCardClassName: PropTypes.string,
};
