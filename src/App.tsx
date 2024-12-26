import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./layouts/MainLayout";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import CreateGroup from "./pages/CreateGroup";
import Explorer from "./pages/Explorer";
import Leaderboard from "./pages/Leaderboard";
import MyPage from "./pages/MyPage";
import TeamPageHost from "./pages/TeamPageHost";
import TeamPageGuest from "./pages/TeamPageGuest";
import Chatting from "./pages/Chat/Chatting";
import ReportPage from "./pages/ReportPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/TanstackQueryStore";

// Todo: Change TS setting 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "login", element: <Login /> },
      { path: "create-group", element: <CreateGroup /> },
      { path: "explorer", element: <Explorer /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "my-page", element: <MyPage /> },
      { path: "team-page-host", element: <TeamPageHost /> },
      { path: "team-page-guest", element: <TeamPageGuest /> },
      { path: "chatting", element: <Chatting /> },
      { path: "report-page", element: <ReportPage /> },
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
