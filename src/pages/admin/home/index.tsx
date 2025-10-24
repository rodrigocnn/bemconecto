"use client";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { CardDashboard } from "@/components/admin/CardDashboard";
import { getChartData } from "./charts";
import { useGetInfoDashboard } from "@/modules/dashboard/hooks/useGetInfoDashboard";
import LayoutAdmin from "@/components/admin/LayoutAdmin";

export default function Home() {
  const { data } = useGetInfoDashboard();

  const { chartData, chartCallServices } = getChartData(
    data?.chartNewPatients || [],
    data?.chartAppointments || []
  );

  console.log("data", data?.patients.total);

  return (
    <LayoutAdmin>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <CardDashboard
          title="Pacientes"
          value={data?.patients.total || 0}
          percent={data?.patients.totalCurrentMonth || 0}
          miniDescription="novos cadastros no mês atual"
          color="blue"
          link="/admin/contratos"
          footerDescription="Total de Pacientes"
        />

        <CardDashboard
          title="Agendamentos"
          value={data?.appointments.total || 0}
          percent={data?.appointments.totalCurrentMonth || 0}
          miniDescription="novos agendamentos no mês atual"
          color="blue"
          link="/admin/contratos"
          footerDescription="Total de Agendamentos"
        />

        <CardDashboard
          title="Atendimentos"
          value={data?.appointments.totalCompleted || 0}
          percent={data?.appointments.totalCompletedCurrentMonth || 0}
          miniDescription="atendimentos no mês atual"
          color="blue"
          link="/admin/contratos"
          footerDescription="Total de Atendimentos"
        />
        <CardDashboard
          title="Não Compareceu"
          value={data?.appointments.totalCanceled || 0}
          percent={data?.appointments.totalCanceledCurrentMonth || 0}
          miniDescription="cancelamentos no mês atual"
          color="blue"
          link="/admin/contratos"
          footerDescription="Total de Não Comparecimentos"
        />
      </div>

      <div className="mt-5 hidden   lg:flex  lg:gap-3 ">
        <div className="w-1/2 bg-white">
          <h2 className="m-3 font-semibold">Novos Pacientes por mês</h2>
          <ReactApexChart options={chartData} series={chartData.series} />
        </div>
        <div className="w-1/2 bg-white">
          <h2 className="m-3 font-semibold">Atendimentos no mês</h2>
          <ReactApexChart
            options={chartCallServices}
            type="bar"
            series={chartCallServices.series}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
