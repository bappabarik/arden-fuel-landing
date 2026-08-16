import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Industries } from "@/components/industries";
import { Products } from "@/components/products";
import { Coverage } from "@/components/coverage";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Industries />
        <Products />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
