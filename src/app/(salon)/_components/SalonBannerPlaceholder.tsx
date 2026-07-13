import Image from "next/image";

export default function SalonBannerPlaceholder() {
  return (
    <section
      className="w-full overflow-hidden bg-[#f3eee3] md:bg-transparent"
      aria-label="Bannière Salon du bien-être 2026"
    >
      <Image
        src="/images/bannier2026_mb.jpg"
        alt="Salon du bien-être 2026"
        width={800}
        height={400}
        className="h-auto w-full md:hidden"
        priority
        quality={88}
        sizes="100vw"
      />
      <Image
        src="/images/bannier2026.jpg"
        alt="Salon du bien-être 2026"
        width={1920}
        height={250}
        className="hidden h-[250px] w-full object-cover object-center md:block"
        priority
        quality={85}
        sizes="100vw"
      />
    </section>
  );
}
