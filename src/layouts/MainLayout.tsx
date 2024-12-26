import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import SideBar from "@/components/SideBar";
import { useEffect, useRef } from "react";

const MainBack = styled.div`
  width: 90vw;
  height: 100vh;
  overflow-y: auto;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainScroll = styled.div`
  padding: 5%;
`;

export const MainLayout = () => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <SideBar />
      <MainBack ref={ref}>
        <MainScroll>
          <Outlet />
        </MainScroll>
      </MainBack>
    </Layout>
  );
};
