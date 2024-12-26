import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/TanstackQueryStore";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./layouts/MainLayout";
import TeamLayout from "./layouts/TeamLayout.tsx";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import CreateGroup from "./pages/CreateGroup";
import Explorer from "./pages/Explorer";
import Leaderboard from "./pages/team/Leaderboard";
import TeamMembers from "./pages/team/TeamMembers";
import TeamSummary from "./pages/team/TeamSummary";
import MyPage from "./pages/MyPage";
import Chatting from "./pages/Chat/Chatting";
import ReportPage from "./pages/ReportPage";
import "./index.css";

// Todo: Change TS setting

const router = createBrowserRouter([
  { path: "login", element: <Login />, errorElement: <NotFound /> },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "explorer", element: <Explorer /> },
      { path: "my-page", element: <MyPage /> },
      { path: "create-group", element: <CreateGroup /> },
      { path: "report-page", element: <ReportPage /> },

      {
        path: "team/:teamId",
        element: <TeamLayout />,
        children: [
          { path: "", element: <TeamSummary /> },
          { path: "chatting", element: <Chatting /> },
          { path: "member", element: <TeamMembers /> },
          { path: "leaderboard", element: <Leaderboard /> },
        ],
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
