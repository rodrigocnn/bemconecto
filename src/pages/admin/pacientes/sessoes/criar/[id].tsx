import LayoutAdmin from "@/components/admin/LayoutAdmin";

import { StopWatch } from "@/modules/sessions/components/stopwatch";
import { SessionForm } from "@/modules/sessions/components/session-form";

export default function CriarSessaoPaciente() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold mb-4">Sessão</h2>
      <div className="bg-white p-4 rounded h-screen space-y-4 overflow-y-auto">
        <StopWatch />
        <SessionForm mode="create" />
      </div>
    </LayoutAdmin>
  );
}
