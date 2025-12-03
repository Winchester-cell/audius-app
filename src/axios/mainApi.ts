import { getAudiusHost } from "@/utils/getAudiusHost";
import axios from "axios";

const hostAddress = await getAudiusHost()

export const mainApi = axios.create({
  baseURL: `${hostAddress}/v1`,
})
