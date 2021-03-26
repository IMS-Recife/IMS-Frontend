import { injectIntl } from "react-intl";
import React from "react";
import Layout from "../components/Layout";
import PIBPerCapta from "../components/EconomyCharts/PIBPerCapta";
import ConstructionJobs from "../components/EconomyCharts/ConstructionJobs";
import MotorVehicleRepairJobs from "../components/EconomyCharts/MotorVehicleRepairJobs";
import WorkAndIncomeIndicators from "../components/EconomyCharts/WorkAndIncomeIndicators";
import EconomyIndicators from "../components/EconomyCharts/EconomyIndicators";

const CovidPage = () => (
  <Layout>
    <div style={{ background: "#fff" }} className="w-100 mx-4 mb-4 p-4 rounded">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 md:gap-8">
        <EconomyIndicators />
        <WorkAndIncomeIndicators />
        <div className="text-black-50 col-span-1 md:col-span-4 xl:col-span-4 row-span-2 bg-white rounded-lg shadow-xl h-100">
          <ConstructionJobs />
        </div>
        <div className="text-black-50 col-span-1 md:col-span-4 xl:col-span-4 row-span-2 bg-white rounded-lg shadow-xl h-100">
          <MotorVehicleRepairJobs />
        </div>
        <div className="text-black-50 col-span-1 sm:col-span-3 md:col-span-4 xl:col-span-8 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
          <PIBPerCapta />
        </div>
      </div>
    </div>
  </Layout>
);
export default injectIntl(CovidPage);
