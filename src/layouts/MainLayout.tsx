import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "@/components/SideBar";

const MainBack = styled.div`
  width: 80vw;
  height: 100vh;
  padding: 5%;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainLayout = () => {
  return (
    <Layout>
      <SideBar />
      <MainBack>
        <Outlet />
      </MainBack>
    </Layout>
  );
};
