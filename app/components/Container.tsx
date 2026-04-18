export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
         {children}
       </div>
    </div>
  );
}