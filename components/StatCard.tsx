type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="border rounded-xl p-6 bg-white">
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h2 className="text-4xl font-black mt-2">
        {value}
      </h2>

      {subtitle && (
        <p className="text-sm text-zinc-400 mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}