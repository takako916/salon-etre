// components/Card.tsx

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-[#fcf7ea] rounded-lg shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
