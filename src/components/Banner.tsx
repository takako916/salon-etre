// components/Banner.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <Image
        src="/images/bannier2025_2.jpg"
        alt="Salon de l’Être – bannière"
        width={800
        }
        height={250}
        className="w-full object-cover"
        priority
      />
    </section>
  );
}
