import axios from "axios";

const covidAPI = axios.create({ baseURL: "https://api.dado.work" });
const economyAPI = axios.create({ baseURL: "https://api.dado.work" });
export { economyAPI, covidAPI };
