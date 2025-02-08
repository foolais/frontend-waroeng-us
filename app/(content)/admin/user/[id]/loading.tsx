export default function Loading() {
  return (
    <div className="flex h-screen flex-1 items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-white"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-primary"></div>
      </div>
      <p className="ml-4 animate-pulse text-lg font-semibold text-primary">
        Loading User Details..
      </p>
    </div>
  );
}
