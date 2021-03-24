import { injectIntl } from "react-intl";
import React from "react";
import Layout from "../components/Layout";
import PIBPerCapta from "../components/EconomyCharts/PIBPerCapta";

const CovidPage = () => (
  <Layout>
    <div
      style={{ background: "#FEEC47" }}
      className="w-100 mx-4 mb-4 p-4 rounded"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 md:gap-8">
        <div className="text-black-50 col-span-1 sm:col-span-3 md:col-span-4 xl:col-span-3 row-span-2 bg-white rounded-lg shadow-xl h-100 w-100">
          <PIBPerCapta />
        </div>
        <div className="text-black-50 col-span-1 md:col-span-4 xl:col-span-3 row-span-2 bg-white rounded-lg shadow-xl h-100" />
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
export default injectIntl(CovidPage);
