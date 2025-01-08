interface IContentIndicatorProps {
    title: string;
}

export function ContentIndicator({title} : IContentIndicatorProps) {
  return (
   <div className="flex gap-3">
      <hr className="w-28 h-1 bg-white rounded-full mt-3" />
      <span className="text-white w-2/6 text-center font-bold">{title}</span>
      <hr className="w-28 h-1 bg-white rounded-full mt-3" />
   </div>
  );
}