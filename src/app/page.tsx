import About from "@/components/About";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <About />
      <Features />
      <Timeline /> {/* ← 次フェーズで実装予定 */}
    </>
  );
}
