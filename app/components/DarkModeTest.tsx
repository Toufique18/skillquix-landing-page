'use client';

export default function DarkModeTest() {
  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 text-black dark:text-white border rounded-lg shadow-lg z-50">
      <p>Dark mode test</p>
      <p className="text-sm">If this box is dark in dark mode, it's working!</p>
    </div>
  );
}