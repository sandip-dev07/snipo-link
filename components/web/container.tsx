import { cn } from "@/lib/utils";

type ContainerProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto grid min-h-svh w-full max-w-xl grid-cols-1 items-start justify-center overflow-hidden shadow-2xl bg-black sm:mt-8 sm:rounded-4xl",
        className
      )}
    >
      {children}
    </div>
  );
}
