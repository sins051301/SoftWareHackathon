import {Outlet, useLocation} from 'react-router-dom';
import styled from "styled-components";
import SideBar from "@/components/SideBar";
import {useEffect} from 'react';

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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <SideBar />
      <MainBack>
        <Outlet />
      </MainBack>
    </Layout>
  );
};
