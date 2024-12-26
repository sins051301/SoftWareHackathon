import { Suspense } from "react";
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
import ReportPage from "./pages/ReportPage";
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import Chatting from "./pages/Chat/Chatting.tsx";
import Assignment from "./pages/team/Assignment.tsx";

const router = createBrowserRouter([
  { path: "login", element: <Login />, errorElement: <NotFound /> },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "explorer", element: <Explorer /> },
      { path: "profile", element: <MyPage /> },
      { path: "create-group", element: <CreateGroup /> },
      { path: "report-page", element: <ReportPage /> },

      {
        path: "team/:teamId",
        element: <TeamLayout />,
        children: [
          { path: "", element: <TeamSummary /> },
          { path: "assignment", element: <Assignment /> },
          { path: "member", element: <TeamMembers /> },
          { path: "leaderboard", element: <Leaderboard /> },
        ],
      },
      {
        path: "chatting/:teamId",
        children: [
          { path: "", element: <Chatting /> },
          { path: ":weekId", element: <Chatting /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
