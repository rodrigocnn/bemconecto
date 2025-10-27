import React, { ReactNode } from "react";

import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useLogout } from "@/hooks/useLogout";
import Link from "next/link";
import { UserMenu } from "../UserMenu";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const { isChecking } = useAuthGuard();
  const { logout } = useLogout();

  const menuItems = [
    { label: "Painel", href: "/admin/home" },
    { label: "Pacientes", href: "/admin/pacientes" },
    { label: "Agenda", href: "/admin/agenda" },
    { label: "Finanças", href: "/admin/financas" },
    { label: "Relatórios", href: "/admin/relatorios" },
  ];

  if (isChecking) {
    return <div className="text-white p-6">Verificando autenticação...</div>;
  }

  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-sky-600/100 text-white p-4  flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-8 ">
            <h1 className="text-xl font-semibold">BEMCONECTO</h1>

            <nav className="flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-blue-200 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <UserMenu />
        </header>

        {/* Content Section */}
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
