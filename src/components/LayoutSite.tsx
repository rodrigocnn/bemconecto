import { ReactNode } from "react";
import Topbar from "./home/Topbar";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Topbar />
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
