const RowSkeleton = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-md wrapper-shadow">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-admin_gray_text rounded-full animate-pulse" />
        <div className="flex flex-col gap-1">
          <div className="w-20 h-4 bg-admin_gray_text rounded animate-pulse" />
          <div className="w-20 h-4 bg-admin_gray_text rounded animate-pulse" />
        </div>
      </div>

      <div className="w-20 h-4 bg-admin_gray_text rounded animate-pulse" />
    </div>
  );
};

export default RowSkeleton;
