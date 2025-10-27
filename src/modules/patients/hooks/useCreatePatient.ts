import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { PatientCreate } from "../api";
import { AxiosError } from "axios";

export function useCreatePatient() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: PatientCreate,
    onSuccess: () => {
      router.push("/admin/pacientes");
      toast.success("Paciente criado com sucesso");
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
