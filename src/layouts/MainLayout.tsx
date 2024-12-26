import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="bg-gray-100 flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative h-full w-full max-w-[400px] overflow-scroll rounded-lg bg-white p-6 shadow-md [&::-webkit-scrollbar]:hidden">
        <Outlet />
      </div>
    </div>
  );
};
