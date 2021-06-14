import { injectIntl } from "react-intl";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import Layout from "../components/Layout";
import PIBPerCapta from "../components/EconomyCharts/PIBPerCapta";
import ConstructionJobs from "../components/EconomyCharts/ConstructionJobs";
import MotorVehicleRepairJobs from "../components/EconomyCharts/MotorVehicleRepairJobs";
import WorkAndIncomeIndicators from "../components/EconomyCharts/WorkAndIncomeIndicators";
import EconomyIndicators from "../components/EconomyCharts/EconomyIndicators";
import NeighborhoodsTable from "../components/EconomyCharts/NeighborhoodsTable";
import { economyAPI } from "../Services/api";
import useHighchartsDefault from "../hooks/useHighchartsDefault";
import useLayout from "../contexts/layout";

const EconomyPage = ({ neighborhoodsData }) => {
  useHighchartsDefault(Highcharts);
  const { collapseSideBar } = useLayout();

  useEffect(() => {
    Highcharts.charts.forEach((c) => {
      if (c !== undefined) {
        setTimeout(() => c.reflow(), 300);
      }
    });
  }, [collapseSideBar]);

  return (
    <Layout>
      <div
        style={{ border: "1px solid #f7f7f7" }}
        className="bg-white rounded-lg w-100 m-4 p-10"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 md:gap-8">
          <WorkAndIncomeIndicators />
          <EconomyIndicators />
          <div className="text-black-50 col-span-1 md:col-span-4 xl:col-span-4 row-span-2 bg-white rounded-lg shadow-xl h-100">
            <ConstructionJobs Highcharts={Highcharts} />
          </div>
          <div className="text-black-50 col-span-1 md:col-span-4 xl:col-span-4 row-span-2 bg-white rounded-lg shadow-xl h-100">
            <MotorVehicleRepairJobs Highcharts={Highcharts} />
          </div>
          <div className="text-black-50 col-span-1 sm:col-span-3 md:col-span-4 xl:col-span-8 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
            <PIBPerCapta Highcharts={Highcharts} />
          </div>
          <div className="text-black-50 col-span-1 sm:col-span-3 md:col-span-4 xl:col-span-8 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
            <NeighborhoodsTable data={neighborhoodsData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await economyAPI.get("/t9p1");
  return { props: { neighborhoodsData: data } };
}
EconomyPage.propTypes = {
  neighborhoodsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default injectIntl(EconomyPage);
