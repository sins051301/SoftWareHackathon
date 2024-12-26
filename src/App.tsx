import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./layouts/MainLayout";
import Chatting from "./pages/Chat/Chatting";
import Login from "./pages/Auth/Login";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/TanstackQueryStore";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "chatting", element: <Chatting /> },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
