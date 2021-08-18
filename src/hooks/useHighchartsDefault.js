import { useEffect } from "react";

const useHighchartsDefault = (Highcharts) => {
  useEffect(() => {
    if (typeof Highcharts === "object") {
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
          weekdays: [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
          ],
          resetZoom: "Resetar Zoom",
        },
      });
    }
  }, []);
};

export default useHighchartsDefault;
