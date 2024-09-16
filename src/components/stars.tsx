import { Star } from "lucide-react";

export function Stars() {
  const ratings = new Array(5).fill("");

  return (
    <>
      {ratings.map((_, i) => (
        <Star key={i} className="text-yellow-300" size={18} />
      ))}
    </>
  );
}
