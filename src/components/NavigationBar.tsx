import { useState } from "react";
import styled from "styled-components";
import {NavLink, useParams} from 'react-router-dom';

// Styled Components
const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

interface TabProps {
  active: boolean;
}

const Tab = styled(NavLink)<TabProps>`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  color: ${({ active }) => (active ? "#000" : "#666")};
  border-bottom: ${({ active }) => (active ? "2px solid #000" : "none")};

  &:hover {
    color: #000;
  }
`;

const AddTab = styled.div`
  margin-left: auto;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`;


// interface ActiveIndicatorProps {
//   activeTab: string;
// }
// const ActiveIndicator = styled.div<ActiveIndicatorProps>`
//   position: absolute;
//   bottom: 0;
//   height: 3px;
//   background-color: #007bff;
//   width: 33.33%;
//   transition: transform 0.3s ease-in-out;
//
//   transform: ${({ activeTab }) =>
//   activeTab === "/overview"
//     ? "translateX(0%)"
//     : activeTab === "/member"
//       ? "translateX(100%)"
//       : "translateX(200%)"};
// `;

const NavItemUrls = [
  { name: "개요", url: "" },
  // { name: "맴버", url: "/member" },
  { name: "과제", url: "/assignment" },
  { name: "랭킹", url: "/leaderboard" },
];

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState(NavItemUrls[0].url);
  const params = useParams();
  const TeamUrl = "/team/" + params.teamId;

  return (
    <>
      <Tabs>
        {NavItemUrls.map((item) => (
          <Tab
            key={item.name}
            to={TeamUrl + item.url}
            active={activeTab === item.url}
            onClick={() => setActiveTab(item.url)}
          >
            {item.name}
          </Tab>
        ))}

        <AddTab>+</AddTab>
      </Tabs>
    </>
  );
};

export default NavigationBar;
