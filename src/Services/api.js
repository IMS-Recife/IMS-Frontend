import axios from "axios";

const covidAPI = axios.create({ baseURL: "https://api.dado.work" });
export default covidAPI;
