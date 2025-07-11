// components/Card.tsx

import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  isNew?: boolean;
};

export default function Card({ title, description, href, isNew }: CardProps) {
  // ボタンテキストをhrefで判定
  let buttonText = "";
  if (href === "/exposants") buttonText = "Liste d'exposants";
  if (href === "/programme") buttonText = "Programme";

  const content = (
    <div className="bg-[#fcf7ea] rounded-lg shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative min-h-[180px] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2 whitespace-nowrap">
          {isNew && (
            <span className="bg-amber-200 text-emerald-700 text-xs font-bold rounded-full px-2 py-0.5 align-top mr-2">new</span>
          )}
          <h3 className="text-xl font-semibold text-emerald-700 whitespace-normal">{title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      {href && buttonText && (
        <div className="flex justify-end mt-4">
          <span className="inline-block bg-orange-600 text-white text-sm font-semibold rounded px-4 py-2 shadow hover:bg-orange-700 transition">
            {buttonText}
          </span>
        </div>
      )}
    </div>
  );
  return href ? (
    <Link href={href} tabIndex={0}>
      {content}
    </Link>
  ) : content;
}
