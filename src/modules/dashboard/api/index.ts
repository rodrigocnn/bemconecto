import api from "@/services/api";
import { DashboardData } from "../interfaces";

export const findAllInfoDashboard = async (): Promise<DashboardData> => {
  const response = await api.index("dashboard");
  return response.data;
};
