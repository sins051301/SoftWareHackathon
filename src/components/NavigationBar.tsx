import { useState } from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

// Styled Components
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const NavItem = styled(NavLink)`
  font-size: 14px;
  text-transform: capitalize;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #007bff;
  }
`;

interface ActiveIndicatorProps {
  activeTab: string;
}

const ActiveIndicator = styled.div<ActiveIndicatorProps>`
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 70%;
  transition: transform 0.3s ease-in-out;

  transform: ${({ activeTab }) =>
    activeTab === "/overview"
      ? "translateX(0%)"
      : activeTab === "/member"
      ? "translateX(100%)"
      : "translateX(200%)"};
`;

const NavItemUrls = [
  { name: "개요", url: "" },
  { name: "과제", url: "/assignment" },
  { name: "랭킹", url: "/leaderboard" },
];

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState(NavItemUrls[0].url);
  const params = useParams();
  const TeamUrl = "/team/" + params.teamId;

  return (
    <NavContainer>
      {NavItemUrls.map(
        (item) => (
          <NavItem
            key={item.name}
            to={TeamUrl + item.url}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setActiveTab(item.name)}
          >
            {item.name}
          </NavItem>
        ),
        []
      )}

      <ActiveIndicator activeTab={activeTab} />
    </NavContainer>
  );
};

export default NavigationBar;
