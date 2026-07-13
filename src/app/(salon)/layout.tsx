import SalonConditionalBanner from "./_components/SalonConditionalBanner";
import SalonNavbar from "./_components/SalonNavbar";
import SalonBreadcrumb from "./_components/SalonBreadcrumb";
import SalonFooter from "./_components/SalonFooter";

export default function SalonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SalonConditionalBanner />
      <SalonNavbar />
      <SalonBreadcrumb />
      {children}
      <SalonFooter />
    </>
  );
}
