import { Skeleton } from "./ui/skeleton";

export const SkeletonLoading = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-24 w-24 rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-96" />
        <Skeleton className="h-6 w-96" />
      </div>
    </div>
  );
};
