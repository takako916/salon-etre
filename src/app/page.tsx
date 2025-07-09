import About from "@/components/About";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <About />
      <Gallery />
      <Features />
      <Timeline /> {/* ← 次フェーズで実装予定 */}
    </>
  );
}
