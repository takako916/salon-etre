import Banner from "@/components/Banner";
import About from "@/components/About";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <About />
      <Features />
      <Timeline /> {/* ← 次フェーズで実装予定 */}
    </>
  );
}
