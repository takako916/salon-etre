import About from "@/components/salon/About";
import Gallery from "@/components/salon/Gallery";
import SalonFeatures from "@/components/salon/SalonFeatures";
import Timeline from "@/components/salon/Timeline";
import { salonMetadata } from "@/lib/salon-seo";

export const metadata = salonMetadata.home;

export default function Home() {
  return (
    <>
      <About />
      <Gallery />
      <SalonFeatures />
      <Timeline />
    </>
  );
}
