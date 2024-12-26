import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./layouts/MainLayout";
import Test from "./pages/test";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ path: "test", element: <Test /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
