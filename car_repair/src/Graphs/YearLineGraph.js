import "regenerator-runtime/runtime";
import $ from "jquery";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

async function renderChart() {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-charts-fixture-tenant-zdvkh"
  });

  const chart = sdk.createChart({
    chartId: "48043c78-f1d9-42ab-a2e1-f2d3c088f864"
  });
  await chart.render(document.getElementById("chart"));

  $("#refresh").on("click", () => {
    chart.refresh();
  });
  $("#country-filter").on("change", e => {
    const country = e.target.value;
    country
      ? chart.setFilter({ "address.country": country })
      : chart.setFilter({});
  });
}

export default renderChart;
//renderChart().catch(e => window.alert(e.message));
