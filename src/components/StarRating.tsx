"use client";

interface StarRatingProps {
  rating: number;
  onChange?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  readonly?: boolean;
}

export default function StarRating({
  rating,
  onChange,
  size = "md",
  readonly = false,
}: StarRatingProps) {
  const sizes = { sm: "text-lg", md: "text-2xl", lg: "text-3xl" };

  return (
    <div className={`flex gap-1 ${sizes[size]}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          className={`${
            star <= rating ? "star-filled" : "star-empty"
          } ${readonly ? "cursor-default" : "cursor-pointer hover:scale-110"} transition-transform`}
        >
          &#9733;
        </button>
      ))}
    </div>
  );
}
