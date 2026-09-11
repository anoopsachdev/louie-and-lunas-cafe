import { cn } from "@/lib/utils";

type CatMarkProps = {
  className?: string;
};

/** Subtle paired silhouette: Louie (black) & Luna (white outline). */
export function CatMark({ className }: CatMarkProps) {
  return (
    <svg
      viewBox="0 0 64 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("text-espresso", className)}
    >
      <path
        d="M10 22c-3.2 0-6-2.2-6-5.2 0-2.2 1.2-4.1 3-5.1-.2-1.8.4-3.6 1.8-4.7.6 1.8 1.8 3.2 3.4 4 .8-1.5 2.2-2.6 3.9-3 .2 1.6-.2 3.2-1.2 4.4 1.6 1.1 2.6 2.9 2.6 5 0 3.2-3.1 5.6-7.5 5.6Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M46 22c3.2 0 6-2.2 6-5.2 0-2.2-1.2-4.1-3-5.1.2-1.8-.4-3.6-1.8-4.7-.6 1.8-1.8 3.2-3.4 4-.8-1.5-2.2-2.6-3.9-3-.2 1.6.2 3.2 1.2 4.4-1.6 1.1-2.6 2.9-2.6 5 0 3.2 3.1 5.6 7.5 5.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        opacity="0.85"
      />
      <circle cx="32" cy="16" r="1.2" fill="currentColor" opacity="0.45" />
    </svg>
  );
}
