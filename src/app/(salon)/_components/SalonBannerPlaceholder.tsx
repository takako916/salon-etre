export default function SalonBannerPlaceholder() {
  return (
    <section
      className="w-full flex items-center justify-center text-white font-playfair"
      style={{
        minHeight: "250px",
        background: `linear-gradient(135deg, var(--salon-primary) 0%, var(--salon-footer) 100%)`,
      }}
      aria-label="Bannière Salon du bien-être 2026"
    >
      <p className="text-2xl md:text-4xl font-bold text-center px-4">
        Salon du bien-être 2026
      </p>
    </section>
  );
}
