

import Providers from "../providers";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <Navbar />
        <main className="relative">
          <div className="sticky bottom-0 bg-base-100 z-20">{children}</div>
          <Footer />
        </main>
      </Providers>
    </>
  );
}

export default layout;
