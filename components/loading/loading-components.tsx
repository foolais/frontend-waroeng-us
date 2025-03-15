import { cn } from "@/lib/utils";

const LoadingComponents = ({
  text,
  isFullScreen = true,
}: {
  text: string;
  isFullScreen?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        isFullScreen && "h-screen",
      )}
    >
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-white"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-primary"></div>
      </div>
      <p className="ml-4 animate-pulse text-lg font-semibold text-primary">
        {text}
      </p>
    </div>
  );
};

export default LoadingComponents;
