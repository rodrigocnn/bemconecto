import { useQuery } from "@tanstack/react-query";

import { findAllInfoDashboard } from "../api";
import { DashboardData } from "../interfaces";

export function useGetInfoDashboard() {
  const { data, isLoading, error } = useQuery<DashboardData>({
    queryKey: ["get-info-dashboard"],
    queryFn: () => findAllInfoDashboard(),
  });

  return {
    isLoading,
    data,
    error,
  };
}
