import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { PatientUpdateApi } from "../api";
import { AxiosError } from "axios";

export function useUpdatePatient() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: PatientUpdateApi,
    onSuccess: () => {
      router.push("/admin/pacientes");
      toast.success("Paciente atualizado com sucesso");
      queryClient.refetchQueries({ queryKey: ["buscar-pacientes"] });
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        const message =
          (error.response?.data as { message?: string })?.message ||
          "Erro interno no servidor";
        toast.error(message);
        return;
      }

      toast.error("Erro interno no servidor");
    },
  });
}
