export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full  mx-auto">
       <div className="max-w-7xl mx-auto px-12">
         {children}
       </div>
    </div>
  );
}