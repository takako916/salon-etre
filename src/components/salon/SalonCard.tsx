import Link from "next/link";

type SalonCardProps = {
  title: string;
  description: string;
  href?: string;
  buttonText?: string;
  isNew?: boolean;
  atelier?: boolean;
};

export default function SalonCard({
  title,
  description,
  href,
  buttonText,
  isNew,
  atelier,
}: SalonCardProps) {
  const content = (
    <div className="bg-salon-surface rounded-lg shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative min-h-[180px] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2 whitespace-nowrap">
          {isNew && (
            <span className="bg-salon-badge text-salon-accent text-xs font-bold rounded-full px-2 py-0.5 align-top mr-2">
              new
            </span>
          )}
          {atelier && (
            <span className="bg-salon-badge text-salon-accent text-xs font-bold rounded-full px-2 py-0.5 align-top mr-2">
              Atelier
            </span>
          )}
          <h3 className="text-xl font-semibold text-salon-accent whitespace-normal">{title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      {href && buttonText && (
        <div className="flex justify-end mt-4">
          <span className="inline-block bg-salon-cta text-white text-sm font-semibold rounded px-4 py-2 shadow hover:opacity-90 transition">
            {buttonText}
          </span>
        </div>
      )}
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} tabIndex={0}>
      {content}
    </Link>
  );
}
